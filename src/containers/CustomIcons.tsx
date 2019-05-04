import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../Figicons/src';
import Snippet from '../components/Snippet';

const CustomIcons = () => (
    <React.Fragment>
        <div className="info mw7 center">
            <h1 className="mb3">Building Custom Icons</h1>
            <p>
                Figicons ships with over 100+ default icons, designed in Figma. However, Figicons was built from the ground up to support
                your own Figma-designed icons. With just a few steps, you can create a customized Figicon set to use on your site right
                away.
            </p>
            <br />

            <Link className="alert dark" to="/start">
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
                    <span className="number">#2</span> Fetch icons from Figma
                </h2>
                <p>
                    Open up the console, navigate to your working project root and run <code>figicons</code> to get started. A series of propmpts will follow to guide you
                    along.
                </p>
                <Snippet title="Terminal" language="console" code={'$ figicons'} />

                <p>
                    Initially, select <strong>New project</strong>. Here you should input the ID of your Figma project, which you can find in
                    the URL of your Figma file, followed by your personal access token. These will be saved locally for the next time you fetch.
                </p>
      
                <Snippet title="Figma project ID" language="console" code={<>https://www.figma.com/file/<strong className="yellow">eIOdDEWeiHETuccK5xpfNhEc</strong></>} />

                <p>
                    Next, you'll need a new personal access token so that the file can be read. Go to your Account Settings in Figma and
                    click <strong>Create a new personal access token</strong>. Grab it and paste that in.
                </p>
                <Snippet title="Figma personal access token" language="console" code={'4562-826234b4-7936-4bf6-9d52-464da724bbdb'} />
            </section>

            <section className="desc">
                <h2>
                    <span className="number">#3</span> Config with .figiconsrc
                </h2>
                <p>
                    Out of the box, you won't be required to create any configuration file. However, doing so may make things a little
                    easier and will extend some functionality.
                </p>

                <p>
                    In your project root, create a <code>.figiconsrc</code> file. Figicons will automatically pick up this file, assuming
                    this is where you're executing the <code>figicons</code> command.
                </p>

                <Snippet title=".figiconsrc" language="json" code={`{
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
                <Snippet title=".figiconsrc" language="json" code={`{
    ...,
    "figmaConfig": {
        "project": "xxxxxxxxxxxx",
        "token": "xxxx-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"
    }
}`} />
            </section>

            <section className="desc">
                <h2>
                    <span className="number">#5</span> Usage
                </h2>
                <p>
                    Once your icons have been successfully fetched and bundled, you should see a new <code>/figicons</code> directory where the CLI was run. This contains your custom icon config and an <strong>.svg</strong> export of each individual icons.
                </p>

                <p>Import the default export of <code>figicons</code>. This is the core of Figicons.</p>
                <Snippet title="Import Figicons" language="js" code={"import Figicons, { Icon } from 'figicons'"} />

                <p>Import your newly created custom config file below that. This may vary on how you have JSON imports set up in your environment.</p>
                <Snippet title="Import Custom JSON config" language="js" code={"import CustomConfig from './figicons/iconConfig.json'"} />

                <p>Use the API to set your custom config within Figicons. You won't need to set this up each time you want to use an icon.</p>
                <Snippet title="Set the custom config" language="js" code={'Figicons.setConfig(iconConfig);'} />

                <p>Use your custom icon with React. The <code>name</code> prop is a reflection of the Frame title in Figma. This can also be changed directly in the icon config but is not recommended.</p>
                <Snippet title="Custom Icon" language="html" code={'<Icon name="custom-icon" />'} />
            </section>

            <div className="alert dark">
                <span>Next, add your icon components to your site</span>
                <Link className="button" to={'/start'}>
                    Go to Usage
                </Link>
            </div>
        </div>
    </React.Fragment>
);

export default CustomIcons;
