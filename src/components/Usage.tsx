import * as React from 'react';
import Highlight from 'react-highlight';
import { Icon } from '../../Figicons/src';
import { Link } from 'react-router-dom';

const Usage = () => (
    <React.Fragment>
        <div className="info mw7 center">
            <h1 className="mb3">Usage</h1>
            <p>Import the required script and use the components immediately, simple.</p>
            <br />

            <Link className="alert dark" to={'/building-icons'}>
                <span>
                    <Icon name="lightbulb" className="mr2" /> To use your own icons, designed in Figma, check out how to build custom icons
                </span>
                <Icon name="arrow-right" />
            </Link>
        </div>

        <div className="mw7 center">
            <section className="desc">
                <h2>Getting started</h2>
                <p>
                    Navigate to your working project root and setup the package. This'll just take a minute, assuming you can copy &amp;
                    paste fairly fast.
                </p>

                <h3>Installation</h3>
                <p>Add the Figicons package to your working project via NPM or Yarn.</p>
                <div className="snippet">
                    <small>NPM</small>
                    <code className="white">
                        <span className="grey">$</span> npm install figicons
                    </code>
                </div>
                <div className="snippet">
                    <small>Yarn</small>
                    <code className="white">
                        <span className="grey">$</span> yarn add figicons
                    </code>
                </div>

                <div className="snippet">
                    <small>Import</small>
                    <Highlight className="js">{"import Figicons, { Icon } from 'figicons';"}</Highlight>
                </div>

                <h2 className="mt5">With React</h2>
                <p>Halfway there. Now all you need to do is use it.</p>
                <h3>Icon Component</h3>
                <p>
                    The Icon component is used to render an icon by name from the config - the <code>name</code> attribute is required.
                    Other props are set as inline.
                </p>
                <div className="snippet">
                    <small>Basic Usage</small>
                    <Highlight className="html">{'<Icon name="heart" />'}</Highlight>
                </div>
                <div className="snippet">
                    <small>Attribute overrides</small>
                    <Highlight className="html">{'<Icon name="heart" stroke="red" strokeWidth={1} />'}</Highlight>
                </div>

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

export default Usage;
