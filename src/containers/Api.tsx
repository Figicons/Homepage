import * as React from 'react';
import { Link } from 'react-router-dom';
import Snippet from '../components/Snippet';
import { Icon } from '../../../Figicons/src';

const Api = () => (
    <React.Fragment>
        <div className="info container center">
            <h1 className="mb4">API Reference</h1>
            <p>
                The Figicons API provides a way to customize the inner core of Figicons. It mainly serves as a purpose for you to use any{' '}
                <Link to="/custom-icons">custom icons</Link> that you've created.
            </p>

            <br />

            <div className="alert dark">
                <span>
                    <Icon name="lightbulb" className="mr3" /> Changes to the core config should be done before any icon components are used.
                </span>
            </div>
        </div>
        <div className="container center">
            <section className="desc">
                <h2>
                    <code>Figicons.config</code>
                </h2>
                <p>
                    Returns the default (unless modified) Figicons config, containing used attributes and icons. If using Typescript you can
                    import the <code>IConfig</code> interface from the package.
                </p>
                <Snippet
                    title="A Figicons config"
                    language="json"
                    code={`{
    icons: {
        add: {
            name: "add"
            file: "add.svg"
            content: "<path stroke="currentColor" d="M12 5v14"></path><path stroke="currentColor" d="M19 12H5"></path>"
        }
        ...
    },
    attributes: {
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
}`}
                />
            </section>
            <section className="desc">
                <h2>
                    <code>Figicons.icons</code>
                </h2>
                <p>Returns an object containing all available icons.</p>
                <Snippet
                    title="Icons in the config"
                    language="json"
                    code={`{
    add: {
        name: "add"
        file: "add.svg"
        content: "<path stroke="currentColor" d="M12 5v14"></path><path stroke="currentColor" d="M19 12H5"></path>"
    }
    ...
}`}
                />
            </section>
            <section className="desc">
                <h2>
                    <code>Figicons.attributes</code>
                </h2>
                <p>Returns an object with all attributes icons are using.</p>
                <Snippet
                    title="Attributes in the config"
                    language="json"
                    code={`{
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "height": 24,
    "width": 24,
    "stroke": "currentColor",
    "stroke-width": 2,
    "stroke-linejoin": "round",
    "stroke-linecap": "round"
}`}
                />
            </section>
            <section className="desc">
                <h2>
                    <code>Figicons.setDefaultConfig()</code>
                </h2>
                <p>
                    Resets the config to its default, including attributes and icons. This doesn't need to be used when initializing
                    Figicons.
                </p>
            </section>
            <section className="desc">
                <h2>
                    <code>Figicons.setCustomConfig(config)</code>
                </h2>
                <p>
                    Replaces the existing config. The passed parameter should have the shape of <code>Figicons.config</code>.
                </p>
            </section>
            <section className="desc">
                <h2>
                    <code>Figicons.setIcons(icons)</code>
                </h2>
                <p>Sets the current icons of Figicons to those passed as a parameter.</p>
                <Snippet
                    title="Set a new icon set"
                    language="json"
                    code={`Figicons.setIcons({
    'custom-icon': {
        name: "custom-icon"
        file: "custom-icon.svg"
        content: "<path stroke="currentColor" d="M6 6v20"></path><path stroke="currentColor" d="M24 12H6"></path>"
    }
    ...
})`}
                />
            </section>
            <section className="desc">
                <h2>
                    <code>Figicons.setAttributes(attributes)</code>
                </h2>
                <p>Sets the current attributes of Figicons to those passed as a parameter.</p>
                <Snippet
                    title="Custom icon attributes"
                    language="json"
                    code={`Figicons.setAttributes({
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 32 32",
    "fill": "none",
    "height": 32,
    "width": 32,
    "stroke": "currentColor",
    "stroke-width": 3,
    "stroke-linejoin": "miter",
    "stroke-linecap": "round"
})`}
                />
            </section>
        </div>
    </React.Fragment>
);

export default Api;
