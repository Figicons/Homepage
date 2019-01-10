import * as React from 'react';
import faqs from '../faqs.json';

const Faq = () => (
    <React.Fragment>
        <div className="info mw7 center">
            <h1 className="mb3">F.A.Q</h1>
        </div>
        <div className="mw7 center">
            {faqs.map((faq: { q: string; a: string }) => (
                <div className="faq">
                    <h3>{faq.q}</h3>
                    <p>{faq.a}</p>
                </div>
            ))}
        </div>
    </React.Fragment>
);

export default Faq;
