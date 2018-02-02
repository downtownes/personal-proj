module.exports = {
    getWorkout: (req, res, next) => {
        const db = req.app.get('db');

        db.get_workout(req.params.id).then(workout => {
            console.log(req.params.id)
            res.status(200).send(workout)
        })
    },

    getActive: (req, res, next) => {
        const db = req.app.get('db');
        console.log('req.params.id', req.params.id);
        const { params } = req;

        db.get_one_wo([params.id]).then(week => {
            console.log(week);
            res.status(200).send(week);
        })
    },

    getActiveB: (req, res, next) => {
        const db = req.app.get('db');

        db.get_active_wo_rest_burn_wo().then(activeB => {
            res.status(200).send(activeB)
        })
    },

    getChestBack: (req, res, next) => {
        const db = req.app.get('db');

        db.get_chest_back_wo().then(chest => {
            res.status(200).then(chest);
        })
    },

    getChestBackB: (req, res, next) => {
        const db = req.app.get('db');

        db.get_chest_back_burn_wo().then(chestB => {
            res.status(200).then(chestB);
        })
    },

    getLegs: (req, res, next) => {
        const db = req.app.get('db');

        db.get_legs_bis_wo().then(legs => {
            res.status(200).send(legs);
        })
    },

    getLegsB: (req, res, next) => {
        const db = req.app.get('db');

        db.get_legs_bis_burn_wo().then(legsB => {
            res.status(200).then(legsB);
        })
    },

    getTri: (req, res, next) => {
        const db = req.app.get('db');

        db.get_legs_tris_shoulders_wo().then(tris => {
            res.status(200).send(tris);
        })
    },

    getTriB: (req, res, next) => {
        const db = req.app.get('db');

        db.get_legs_tris_shoulders_burn_wo().then(trisB => {
            res.status(200).send(trisB);
        })
    },

    addLift: (req, res, next) => {
        const db = req.app.get('db');

        db.add_lift([req.body.name, req.body.workout]).then(result => {
            console.log('req.body.name', req.body.name);
            res.status(200).send(result)
        })
    },

    updateWo: (req, res, next) => {
        const db = req.app.get('db');
        const { params, query } = req
        console.log(req.params)

        db.update_wo([params.id, query.wo_details]).then(id => {
            res.status(200).send(id);
        })
    },
}