import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './containers/Nav';
import Home from './containers/Home';
import CustomIcons from './containers/CustomIcons';
import GettingStarted from './containers/GettingStarted';
import Footer from './containers/Footer';
import createBrowserHistory from 'history/createBrowserHistory';
import About from './containers/About';
import Api from './containers/Api';
import Error from './containers/Error';

const history = createBrowserHistory();

history.listen(_ => {
    window.scrollTo(0, 0);
});

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/custom-icons" component={CustomIcons} />
        <Route exact path="/getting-started" component={GettingStarted} />
        <Route exact path="/api" component={Api} />
        <Route exact path="/404" component={Error} />
        <Redirect from="*" to="/404" />
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
