import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Workouts from './components/Workouts/Workouts';
import About from './components/About/About';
import MuscleWorkout from './components/MuscleWorkout/MuscleWorkout';
import BurnFat from './components/BurnFat/BurnFat';
import Week from './components/Week/Week';


export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/workouts" render={() => (
            <Workouts>
                <Switch>
                    <Route path="/workouts/muscle" component={MuscleWorkout} />
                    <Route path="/workouts/week" component={Week}/>
                    <Route path="/workouts/fat" component={BurnFat} />
                </Switch>
            </Workouts>
        )} />
        <Route path="/about" component={About} />
    </Switch>
)
