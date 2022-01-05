import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';

const index = () => {
    return (
        <div>
            <Router>
               <Switch>
                   <Route path="/" exact component={Home}></Route>
                   <Route path="/profil" exact component={Profil}></Route>
                   <Route path="/trending" exact component={Trending}></Route>
                   <Redirect to="/"></Redirect>
               </Switch>
            </Router>
        </div>
    );
};

export default index;