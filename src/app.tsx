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
import Api from './containers/Api';

const history = createBrowserHistory();

history.listen(_ => {
    window.scrollTo(0, 0);
});

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/custom-icons" component={CustomIcons} />
        <Route exact path="/start" component={GettingStarted} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/api" component={Api} />
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
