import * as React from 'react';
import Figicons, { Icon } from '../../Figicons/src';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.svg';
import icons from '../../Figicons/icons/*.svg';
import Highlight from 'react-highlight';
import Snippet from '../components/Snippet';

const Home = () => (
    <React.Fragment>
        <div className="bg" style={{ backgroundImage: `url(${bg})` }} />
        <main className="mw7 center tc">
            <h1 className="mb3">Design &amp; use your icons in minutes. No fuss.</h1>
            <p className="large">
                Beautiful, customizable SVG icons, based on a 24px grid. Completely open source, MIT licensed and designed in Figma.
            </p>
            <div className="more">
                <a
                    className="button large"
                    href="https://www.figma.com/file/eIOdDEWeiHETuccK5xpfNhEc/Icons?node-id=0%3A1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Preview Icons in Figma
                </a>
                <div className="split" />
                <a href="https://github.com/animify/figicons">See on Github</a>
            </div>
        </main>
        <section className="mw7 center desc">
            <h2>Quick Start</h2>
            <p className="mt2">
                Currently, Figicons can be used as React components or programatically using the <Link to="/api">API</Link>.&nbsp; To get a
                full overview, check out the full documentation on <Link to={'/usage'}>Usage</Link>.
            </p>
            <Snippet title="Yarn" language="console" code={'yarn add figicons'} />
            <Snippet title="Import" language="js" code={"import Figicons, { Icon } from 'figicons';"} />
            <Snippet title="React Component" language="html" code={'<Icon name="heart"/>'} />
        </section>
        <section className="mw7 center">
            <h2>Default Icons</h2>
            <p className="mt2">
                There are over 150+ icons that ship by default with Figicons. You can also{' '}
                <Link to={'/building-icons'}>create your own framework</Link> based on your custom Figma-designed icons.
            </p>
            <div className="svgs">
                {Object.keys(Figicons.icons).map(name => (
                    <a className="svg" key={name} href={`${icons[name]}`} download={`${name}.svg`} title={`Download ${name}.svg`}>
                        <div className="icon">
                            <Icon name={name} />
                        </div>
                        <div className="desc">{name}</div>
                    </a>
                ))}
            </div>
        </section>
    </React.Fragment>
);

export default Home;
