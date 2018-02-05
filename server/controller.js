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

        db.get_active_wo().then(week => {
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
            res.status(200).send(chest);
        })
    },

    getChestBackB: (req, res, next) => {
        const db = req.app.get('db');

        db.get_chest_back_burn_wo().then(chestB => {
            res.status(200).send(chestB);
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
            res.status(200).send(legsB);
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

    addActive: (req, res, next) => {
        const db = req.app.get('db');

        db.add_active_lift([req.body.active]).then(result => {
            console.log('req.body.active', req.body.active);
            res.status(200).send(result)
        })
    },

    addChest: (req, res, next) => {
        const db = req.app.get('db');

        db.add_chest_lift([req.body.active]).then(chest => {
            res.status(200).send(chest);
        })
    },

    addBi: (req, res, next) => {
        const db = req.app.get('db');

        db.add_leg_bi([req.body.active]).then(bi => {
            res.status(200).send(bi);
        })
    },

    addTri: (req, res, next) => {
        const db = req.app.get('db');

        db.add_leg_tri([req.body.active]).then(tri => {
            res.status(200).send(tri);
        })
    },

    updateAct: (req, res, next) => {
        const db = req.app.get('db');

        db.update_wo([req.body.id, req.body.updateBody]).then(upAct => {
            res.status(200).send(upAct);
        })
    },

    updateBi: (req, res, next) => {
        const db = req.app.get('db');

        db.update_bi([req.body.id, req.body.updateBody]).then(upBi => {
            res.status(200).send(upBi);
        })
    },

    updateChest: (req, res, next) => {
        const db = req.app.get('db');

        db.update_chest([req.body.id, req.body.updateBody]).then(upChest => {
            res.status(200).send(upChest);
        })
    },

    updateTri: (req, res, next) => {
        const db = req.app.get('db');

        db.update_tri([req.body.id, req.body.updateBody]).then(upTri => {
            res.status(200).send(upTri);
        })
    }
}