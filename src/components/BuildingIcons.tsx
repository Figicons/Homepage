import * as React from 'react';
import { Link } from 'react-router-dom';
import Figicon from '../../Figicons/components/FigiconReact';
import Highlight from 'react-highlight';

const Usage = () => (
    <React.Fragment>
        <div className="info mw7 center">
            <h1 className="mb3">Building custom icons</h1>
            <p>
                Figicons ships with over 100+ default icons, designed in Figma. However, Figicons was built from the ground up to support
                your own Figma-designed icons. With just a few steps, you can create a customized Figicon set to use on your site right
                away.
            </p>
            <br />

            <Link className="alert dark" to="/usage">
                <span>
                    <Figicon name="lightbulb" className="mr2" /> Skip this tutorial if you wish to use the default Figicons set only
                </span>
                <Figicon name="arrow-right" />
            </Link>
        </div>
        <div className="mw7 center">
            <section className="desc">
                <h2><span className="number">#1</span> Clone the repository</h2>
                <p>Clone the Figicons repository, or <a href="x-github-client://openRepo/https://github.com/Figicons/Figicons">open in Github Desktop</a>, to get the necessary scripts needed to build your icons.</p>
                <div className="snippet">
                    <div className="flex mt3">
                        <code className="white">
                            <span className="grey">$</span> git clone https://github.com/Figicons/Figicons.git
                        </code>
                    </div>
                </div>

                <p>Navigate to the folder and install the packages using <a href="https://github.com/yarnpkg/yarn" target="_blank" rel="noopener noreferrer">Yarn</a>.</p>
                <div className="snippet">
                    <code>
                        <span className="grey">$</span> yarn
                    </code>
                </div>
            </section>

            <section className="desc">
                <h2><span className="number">#1</span> Setting up the Figma API</h2>
                <p>Next, we'll need to get a communication going with Figma. Grab &amp; copy the file key of your Figma file - this is the ending ID of your Figma project URL:</p>
                <div className="snippet">
                    <small>A Figma file URL</small>
                    <code className="grey">
                        https://www.figma.com/file/<strong className="yellow">eIOdDEWeiHETuccK5xpfNhEc</strong>
                    </code>
                </div>

                <p>Go to your Account Settings in Figma and click <code>Create a new personal access token</code>. It should look something like this:</p>
                <div className="snippet">
                    <small>Generated token</small>
                    <code>
                        <span className="white">4562-826234b4-7936-4bf6-9d52-464da724bbdb</span>
                    </code>
                </div>

                <p>Paste the file key and generated Token into your <code>FigmaAPI.json</code>config relatively:</p>
                <div className="snippet">
                    <small>figmapi.json</small>
                    <Highlight className="json">{`{ 
    "fileKey": "eIOdDEWeiHETuccK5xpfNhEc",
    "token": "4562-826234b4-7936-4bf6-9d52-464da724bbdb"
}`}</Highlight>
                </div>
            </section>

            <section className="desc">
                <h2><span className="number">#2</span> Fetching &amp; building your icon set</h2>
                <div className="alert dark mv3">
                    <span>
                        <Figicon name="lightbulb" className="mr2" /> Icons should be individually placed in Frames to be fetched correctly
                    </span>
                </div>
                <p>
                    Let's fetch the icons. A <code>figicons.json</code> file will be created, which contains an optimized list of all your icons. The generated list will be the basis of how your icons will turn out.
                </p>
                <p>Run the below command in Terminal:</p>
                <div className="flex mt3">
                    <code className="white">
                        <span className="grey">$</span> yarn run build
                    </code>
                </div>
            </section>

            <section className="desc">
                <h2><span className="number">#3</span> Configuring icon options</h2>
                <p>
                    Figicons ship with a default setup for how SVG icons will be rendered. Each property maps as an attribute on the created component.
                </p>
                <p>You can edit the default style of your icons here or override the defaults on the icon component later on.</p>
                <div className="snippet">
                    <small>iconAttributes.json defaults</small>
                    <Highlight className="json">{`{
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "height": 24,
    "stroke": "currentColor",
    "stroke-width": 2,
    "stroke-linejoin": "round",
    "stroke-linecap": "round",
    "width": 24
}`}</Highlight>
                </div>
            </section>

            <section className="desc">
                <h2><span className="number">#4</span> Preparing for usage</h2>
                <p>
                    It's time to bundle your custom icons into React &amp; Web Components (you can use whichever). Run the below command in
                    Terminal to package everything.
                </p>
                <div className="flex mt3">
                    <code className="white">
                        <span className="grey">$</span> yarn run bundle
                    </code>
                </div>
            </section>

            <div className="alert dark">
                <span>
                    Next, add your icon components to your site
                </span>
                <Link className="button" to={'/usage'}>
                    Go to Usage
                </Link>
            </div>
        </div>
    </React.Fragment>
);

export default Usage;
