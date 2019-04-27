import * as React from 'react';
import Figicon from '../../Figicons/components/FigiconReact';
import * as figicons from '../../Figicons/figicons.json';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.svg';
import icons from '../../Figicons/icons/*.svg';

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
                    className="button"
                    href="https://www.figma.com/file/eIOdDEWeiHETuccK5xpfNhEc/Icons?node-id=0%3A1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open Icons in Figma
                </a>
                <div className="split" />
                <a href="https://github.com/animify/figicons">See on Github</a>
            </div>
        </main>
        <section className="mw7 center">
            <h2>Using icons</h2>
            <p className="mt2">
                Currently, Figicons can be used as React components or programatically using the <Link to="/api">API</Link>.&nbsp; To get a
                full overview, check out the full documentation on <Link to={'/usage'}>Usage</Link>.
            </p>
            <div className="snippet mt4">
                <small>
                    Import <a>Copy</a>
                </small>
                <code>
                    <span>
                        <span className="yellow">fig-icon</span> <span className="orange">name</span>=<span className="green">"heart"</span>
                        &gt;&lt;/
                        <span className="yellow">fig-icon</span>
                        &gt;
                    </span>
                </code>
            </div>
            <div className="snippet mt4">
                <small>
                    React Component <a>Copy</a>
                </small>
                <code>
                    <span>
                        &lt;
                        <span className="yellow">Figicon</span> <span className="orange">name</span>=<span className="green">"heart"</span>
                        /&gt;
                    </span>
                </code>
            </div>
        </section>
        <section className="mw7 center">
            <h2>Default icons</h2>
            <p className="mt2">
                There are over 150+ icons that ship by default with Figicons. You can also{' '}
                <Link to={'/building-icons'}>create your own framework</Link> based on your custom Figma-designed icons.
            </p>
            <div className="svgs">
                {Object.keys(figicons).map(name => (
                    <a className="svg" key={name} href={`${icons[name]}`} download={`${name}.svg`} title={`Download ${name}.svg`}>
                        <div className="icon">
                            <Figicon name={name} />
                        </div>
                        <div className="desc">{name}</div>
                    </a>
                ))}
            </div>
        </section>
    </React.Fragment>
);

export default Home;
