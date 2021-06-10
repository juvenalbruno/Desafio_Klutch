import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DataCard from './pages/DataCard';
import Home from './pages/Home';
import SelectCart from './pages/SelectedCard';
import Solicitation from './pages/Solicitation';
import Conclusion from './pages/Conclusion';
import Success from './pages/Success';
import Details from './pages/Details';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/solicitation/details" component={Details} />
                <Route path="/solicitation/success" component={Success} />
                <Route path="/solicitation/conclusion" component={Conclusion} />
                <Route path="/solicitation/datacard" component={DataCard} />
                <Route path="/solicitation/card" component={SelectCart} />
                <Route path="/solicitation" component={Solicitation} exact />
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    );
}