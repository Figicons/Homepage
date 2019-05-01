import * as React from 'react';
import icons from '../../Figicons/icons/*.svg';
import { Icon } from '../../../Figicons/src';

interface IProps {
    name: string;
}

export default function DisplayIcon({ name }: IProps) {
    return (
        <a className="displayicon" key={name} href={`${icons[name]}`} download={`${name}.svg`} title={`Download ${name}.svg`}>
            <div className="icon">
                <Icon name={name} />
            </div>
            <div className="desc">
                <small>Download</small>
                <div className="name">{name}</div>
            </div>
        </a>
    );
}
