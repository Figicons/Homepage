import * as React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
    <React.Fragment>
        <div className="info container center">
            <h1 className="mb4">404. Oopsy :(</h1>
            <p>Seems you got lost somewhere along the way.</p>
            <p>Let's get you back to land.</p>

            <Link className="button mt5" to="/">
                Go to homepage
            </Link>
        </div>
    </React.Fragment>
);

export default Error;
