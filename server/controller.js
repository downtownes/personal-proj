module.exports = {
    getWorkout: (req, res, next) => {
        const db = req.app.get('db');

        db.get_workout(req.params.id).then(workout => {
            console.log(req.params.id)
            res.status(200).send(workout)
        })
    }
}