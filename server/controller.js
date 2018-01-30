module.exports = {
    getWorkout: (req, res, next) => {
        const db = req.app.get('db');

        db.get_workout(req.params.id).then(workout => {
            console.log(req.params.id)
            res.status(200).send(workout)
        })
    },

    getWeek: (req, res, next) => {
        const db = req.app.get('db');

        db.get_week(req.params.id).then(week => {
            console.log(req.params.id)
            res.status(200).send(week);
        })
    },

    getBurnWeek: (req, res, next) => {
        const db = req.app.get('db');

        db.get_burn_week(req.params.id).then(burnWeek => {
            console.log(req.params.id)
            res.status(200).send(burnWeek);
        })
    }
}