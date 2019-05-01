import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import Nav from './containers/Nav';
import Home from './containers/Home';
import CustomIcons from './containers/CustomIcons';
import GettingStarted from './containers/GettingStarted';
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
        <Route exact path="/custom-icons" render={props => <CustomIcons />} />
        <Route exact path="/start" render={props => <GettingStarted />} />
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
