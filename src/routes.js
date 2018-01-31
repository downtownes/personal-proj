import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Workouts from './components/Workouts/Workouts';
import About from './components/About/About';
import MuscleWorkout from './components/MuscleWorkout/MuscleWorkout';
import BurnFat from './components/BurnFat/BurnFat';
import Week from './components/Week/Week';
import Profile from './components/Profile/Profile';
import BurnWeek from './components/BurnWeek/BurnWeek';
import AdminProfile from './components/AdminProfile/AdminProfile';


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/workouts" render={() => (
            <Workouts>
                <Switch>
                    <Route path="/workouts/muscle" component={MuscleWorkout} />
                    <Route path="/workouts/fat" component={BurnFat} />
                </Switch>
            </Workouts>
        )} />
        <Route path="/week/:workout_id" component={Week} />
        <Route path="/burnweek/:workout_id" component={BurnWeek} />
        <Route path="/profile" component={Profile} />
        <Route path="/adminprofile" component={AdminProfile} />
        <Route path="/about" component={About} />
    </Switch>
)
