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
    console.log(profile);
    db.find_user(user_id).then(function (users) {
        // console.log(users);
        if (!users[0]) {
            db.create_user(
                [displayName,
                    picture,
                    is_admin,
                    user_id
                ]).then(user => {
                    console.log('user', user)
                    return done(null, user[0].id)
                })
        } else {
            return done(null, users[0].id)
        }
    })
}))

passport.serializeUser((id, done) => {
    console.log('serialize', id)
    done(null, id);
})
passport.deserializeUser((id, done) => {
    console.log('deserialize', id);
    app.get('db').find_session_user([id]).then(function (user) {
        console.log('user')
        return done(null, user[0]) //this returns not only the id, but the object of all the user's information
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/profile',
    failureRedirect: 'http://localhost:3000/'
}))

app.get('/auth/me', (req, res) => {
    console.log('req.user', req.user)
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
app.get('/api/week', controller.getWeek);
app.get('/api/burnweek', controller.getBurnWeek)




app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port: ${process.env.SERVER_PORT}`))