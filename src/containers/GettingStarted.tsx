import * as React from 'react';
import { Icon } from '../../Figicons/src';
import { Link } from 'react-router-dom';
import Snippet from '../components/Snippet';

const GettingStarted = () => (
    <React.Fragment>
        <div className="info container center">
            <h1 className="mb3">Getting Started</h1>
            <p>
                Import the required script and use the components immediately, simple. This will only take a minute, assuming you can copy
                &amp; paste fairly quickly.
            </p>
            <br />

            <Link className="alert dark" to={'/custom-icons'}>
                <span>
                    <Icon name="lightbulb" className="mr2" /> To use your own icons, designed in Figma, check out how to build custom icons
                </span>
                <Icon name="arrow-right" />
            </Link>
        </div>

        <div className="container center">
            <section className="desc">
                <h2>
                    <span className="number">1.</span> Installation
                </h2>
                <p>
                    Navigate to your working project root and add the <code>figicons</code> package via <strong>npm</strong> or{' '}
                    <strong>Yarn</strong>.
                </p>
                <Snippet title="npm" language="console" code="npm install figicons" />
                <Snippet title="or Yarn" language="console" code="yarn add figicons" />

                <p>
                    Finally, import the package at the top of your file. This exposes the <code>Figicons</code> allowing you to access the
                    API, and <code>Icon</code> which is the React component that will render the icon.
                </p>
                <Snippet title="Import" language="js" code="import Figicons, { Icon } from 'figicons';" />

                <h2 className="mt5">
                    <span className="number">2.</span> Usage
                </h2>
                <p>You're already halfway there. Now all you need to do is generate the icon.</p>

                <h3>React Icon Component</h3>
                <p>
                    The Icon component is used to render an icon by name from the config - the <code>name</code> attribute is required.
                    Other props are set as inline.
                </p>
                <Snippet title="Basic usage" language="html" code={'<Icon name="heart" />'} />
                <Snippet title="Override props" language="html" code={'<Icon name="heart" stroke="red" strokeWidth={1} />'} />

                <h2 className="mt5">The Config</h2>
                <p>
                    The default export of <code>figicons</code> exposes the backbone so that you have full control on what is displayed. You
                    can use this to set up different icon configs and attributes for your icons.
                </p>

                <p>
                    Check out <Link to={'/api'}>more on the API</Link>.
                </p>
            </section>
        </div>
    </React.Fragment>
);

export default GettingStarted;
