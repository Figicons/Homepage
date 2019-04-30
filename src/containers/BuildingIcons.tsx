import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../Figicons/src';
import Highlight from 'react-highlight';
import Snippet from '../components/Snippet';

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
                    <Icon name="lightbulb" className="mr2" /> Skip this tutorial if you wish to only use the default Figicons set
                </span>
                <Icon name="arrow-right" />
            </Link>
        </div>
        <div className="mw7 center">
            <section className="desc">
                <h2>
                    <span className="number">#1</span> Get the CLI
                </h2>
                <p>
                    Grab the <a href="https://github.com/Figicons/cli">Figicons CLI</a> package and install it globally.
                </p>
                <Snippet title="npm" language="console" code={'npm i figicons-cli -g'} />
                <Snippet title="yarn" language="console" code={'yarn global add figicons-cli'} />
            </section>

            <section className="desc">
                <h2>
                    <span className="number">#2</span> Run, run, run...
                </h2>
                <p>
                    Navigate to your working project root and run the command to get started. A series of propmpts will follow to guide you
                    along.
                </p>
                <Snippet title="Terminal" language="console" code={'figicons'} />

                <p>
                    Initially, select <code>New project</code>. Here you should input the ID of your Figma project, which you can find in
                    the URL of your Figma file.
                </p>
      
                <Snippet title="Figma project" language="console" code={<>https://www.figma.com/file/<strong className="yellow">eIOdDEWeiHETuccK5xpfNhEc</strong></>} />

                <p>
                    Next, you'll need a new personal access token so that the file can be read. Go to your Account Settings in Figma and
                    click <code>Create a new personal access token</code>. Grab it and paste that in.
                </p>
                <Snippet title="Figma personal access token" language="console" code={'4562-826234b4-7936-4bf6-9d52-464da724bbdb'} />
            </section>

            <section className="desc">
                <h2>
                    <span className="number">#3</span> Configuration
                </h2>
                <p>
                    Out of the box, you won't be required to create any configuration file. However, doing so may make things a little
                    easier and will extend some functionality.
                </p>

                <p>
                    In your project root, create a <code>.figiconsrc</code> file. Figicons will automatically pick up this file, assuming
                    this is where you're executing the <code>figicons</code> command.
                </p>

                <Snippet title="Default configuration file" language="json" code={`{
    "iconAttrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "height": 24,
        "width": 24,
        "stroke": "currentColor",
        "stroke-width": 2,
        "stroke-linejoin": "round",
        "stroke-linecap": "round"
    }
}`} />

                <h3>Extending with a Figma config</h3>
                <p>
                    Adding a Figma config to <code>.figiconsrc</code> will skip the prompt when running the CLI.
                </p>
                <Snippet title="Default configuration file" language="json" code={`{
    ...,
    "figmaConfig": {
        "project": "xxxxxxxxxxxx",
        "token": "xxxx-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"
    }
}`} />
            </section>

            <section className="desc">
                <h2>
                    <span className="number">#5</span> Preparing for usage
                </h2>
                <p>
                    It's time to bundle your custom icons into React &amp; Web Components (you can use whichever). Run the below command in
                    Terminal to package everything.
                </p>
                <Snippet title="yarn" language="console" code={'yarn global add figicons-cli'} />
            </section>

            <div className="alert dark">
                <span>Next, add your icon components to your site</span>
                <Link className="button" to={'/usage'}>
                    Go to Usage
                </Link>
            </div>
        </div>
    </React.Fragment>
);

export default Usage;