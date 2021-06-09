import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DataCard from './pages/DataCard';
import Home from './pages/Home';
import Solicitation from './pages/Solicitation';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/solicitation" component={Solicitation} exact />
                <Route path="/solicitation/datacard" component={DataCard} />
            </Switch>
        </BrowserRouter>
    );
}