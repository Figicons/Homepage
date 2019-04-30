import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import Nav from './containers/Nav';
import Home from './containers/Home';
import GettingStarted from './containers/BuildingIcons';
import Usage from './containers/Usage';
import Footer from './containers/Footer';
import createBrowserHistory from 'history/createBrowserHistory';
import Faq from './containers/Faq';

const history = createBrowserHistory();

history.listen(_ => {
    window.scrollTo(0, 0);
});

const Routes = () => (
    <Switch>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/building-icons" render={props => <GettingStarted />} />
        <Route exact path="/usage" render={props => <Usage />} />
        <Route exact path="/faq" render={props => <Faq />} />
    </Switch>
);

ReactDOM.render(
    <Router history={history}>
        <React.Fragment>
            <Nav />
            <Routes />
            <Footer />
        </React.Fragment>
    </Router>,
    document.getElementById('app')
);
