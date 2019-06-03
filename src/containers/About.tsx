import * as React from 'react';
import faqs from '../faqs.json';
import { Icon } from '../../Figicons/src';

const About = () => (
    <React.Fragment>
        <div className="info container center">
            <h1 className="mb4">About Figicons</h1>
            <p>
                Figicons initially started as a project to support developers in exporting and converting icons into code. Currently it's
                quite a lengthy and fairly tedious process, just ask any web developer.
            </p>

            <p className="mt4">
                Fast forward to today, Figicons ships with a ready set of over 150+ icons and support for custom Figma designed icons, with
                just a few minutes of setting up. Supporting only lined icons is just the first step, with plans to handle more complex
                illustrations and an automated web platform.
            </p>

            <br />

            <a className="alert dark" href="https://github.com/Figicons" target="_blank" rel="noopener noreferrer">
                <span>
                    <Icon name="lightbulb" className="mr3" /> Did you know all of Figicons is open source? Check it out on Github.
                </span>
                <Icon name="arrow-right" />
            </a>
        </div>
        <section className="container center">
            <h2 className="mb5">FAQs</h2>
            {faqs.map((faq: { q: string; a: string }) => (
                <div className="faq" key={faq.q}>
                    <h3 className="mb3">{faq.q}</h3>
                    <p>{faq.a}</p>
                </div>
            ))}
        </section>
    </React.Fragment>
);

export default About;
