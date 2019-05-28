import * as React from 'react';
import Highlight from 'react-highlight';
import useCopy from 'use-copy';
import { Icon } from '../../Figicons/src';

interface IProps {
    title?: string;
    language: string;
    code: React.ReactText | React.ReactNode;
}

export default function Snippet({ title, language, code }: IProps) {
    const [copied, copy, setCopied] = useCopy(typeof code === 'string' ? code : code!.toString());

    const copyCode = () => {
        copy();

        window.setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <div className="snippet">
            <small>
                {title}{' '}
                {copied ? (
                    <strong>
                        <Icon className="mr2" name="check" width="16" height="16" /> Copied to clipboard
                    </strong>
                ) : (
                    <a onClick={copyCode}>
                        <Icon className="mr2" name="copy" width="16" height="16" /> Copy
                    </a>
                )}
            </small>
            {typeof code === 'string' ? (
                <Highlight className={language}>{code}</Highlight>
            ) : (
                <pre>
                    <code>{code}</code>
                </pre>
            )}
        </div>
    );
}
