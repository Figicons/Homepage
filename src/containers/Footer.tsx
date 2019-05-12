import * as React from 'react';
import { Icon } from '../../Figicons/src';

const Footer = () => (
    <footer>
        <div className="container center">
            <p>
                Made with <Icon name="heart" height={18} color="red" style={{ position: 'relative', top: '4px' }} /> by{' '}
                <a href="https://twitter.com/_animify">@_animify</a>
            </p>
            <div className="options">
                <a href="https://twitter.com/figicons">@figicons</a>
                <a href="https://github.com/animify/figicons">Open source</a>
                <a>Download Designer Pack</a>
            </div>
        </div>
    </footer>
);

export default Footer;
