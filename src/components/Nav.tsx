import * as React from 'react';
import { Link } from 'react-router-dom';
import logotype from '../assets/logotype.svg';
import * as pkg from '../../package.json';
import Figicon from '../../Figicons/components/FigiconReact';

const version = (pkg as any).version;

const Nav = () => (
    <nav>
        <div className="mw8 center">
            <Link to={'/'} className="logo">
                <img src={logotype} height="22" />
                <code className="tiny">{version}</code>
            </Link>
            <div className="options">
                <Link to={'/building-icons'}>Building custom icons</Link>
                <Link to={'/usage'}>Usage</Link>
                <Link to={'/faq'}>FAQ</Link>
                <a className="button small grey" href={require('../DesignerPack.zip')} download={`Figicons-DesignerPack_${version}.zip`}>
                    <Figicon name="download" width={14} height={14} style={{ marginRight: '6px' }} />
                    Designer Pack
                </a>
            </div>
        </div>
    </nav>
);

export default Nav;
