import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logotype from '../assets/logotype.svg';
import * as pkg from '../../package.json';
import { Icon } from '../../Figicons/src';

const version = (pkg as any).version;

const Nav = () => (
    <nav>
        <div className="container center">
            <Link to={'/'} className="logo">
                <img src={logotype} height="22" />
                <code className="release">{version}</code>
            </Link>
            <div className="options">
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/start'}>Getting Started</NavLink>
                <NavLink to={'/custom-icons'}>Custom Icons</NavLink>
                <NavLink to={'/api'}>API</NavLink>
                <a
                    className="button small outlined"
                    href={require('../DesignerPack.zip')}
                    download={`Figicons-DesignerPack_${version}.zip`}
                >
                    <Icon name="download" width={14} height={14} style={{ marginRight: '6px' }} />
                    Designer Pack
                </a>
            </div>
        </div>
    </nav>
);

export default Nav;
