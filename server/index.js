require('dotenv').config();
const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , controller = require('./controller')
    , passport = require('passport')
    , session = require('express-session')
    , Auth0Strategy = require('passport-auth0');

const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
});

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    let { displayName, user_id, picture, is_admin } = profile
    const db = app.get('db'); //this is making the database connection
    db.find_user(user_id).then(function (users) {
        if (!users[0]) {
            db.create_user(
                [displayName,
                    picture,
                    is_admin,
                    user_id
                ]).then(user => {
                    return done(null, user[0].id)
                })
        } else {
            return done(null, users[0].id)
        }
    })
}))

passport.serializeUser((id, done) => {
    done(null, id);
})
passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id]).then(function (user) {
        return done(null, user[0]) //this returns not only the id, but the object of all the user's information
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/profile',
    failureRedirect: 'http://localhost:3000/'
}))

app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('User not found');
    } else {
        res.status(200).send(req.user);
    }
})

app.get('/auth/authorized', (req, res) => {
    if(req.user.is_admin != true) {
        return res.status(403).send(false)
    } else { 
        return res.status(200).send(req.user);
    }
})



app.get('/auth/logout', function (req, res) {
    req.logOut();
    res.redirect('http://localhost:3000/')
})

app.get('/api/muscle', controller.getWorkout);
app.get('/api/fatburn', controller.getWorkout);
app.get('/api/active_rest', controller.getActive);
app.get('/api/active_rest_b', controller.getActiveB);
app.get('/api/chest_back', controller.getChestBack);
app.get('/api/chest_back_b', controller.getChestBackB);
app.get('/api/legs_tris', controller.getTri);
app.get('/api/legs_tris_b', controller.getTriB);
app.get('/api/legs_bis', controller.getLegs);
app.get('/api/legs_bis_b', controller.getLegsB);
app.put('/api/lift1', controller.addActive);
app.put('/api/lift2', controller.addChest);
app.put('/api/lift3', controller.addBi);
app.put('/api/lift4', controller.addTri);
app.post('/api/updateAct', controller.updateAct);
app.post('/api/updateBi', controller.updateBi);
app.post('/api/updateChest', controller.updateChest);
app.post('/api/updateTri', controller.updateTri);




app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port: ${process.env.SERVER_PORT}`))