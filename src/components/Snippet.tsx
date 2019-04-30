import * as React from 'react';
import Highlight from 'react-highlight';

interface IProps {
    title?: string;
    language: string;
    code: React.ReactText | React.ReactNode;
}

export default function Snippet({ title, language, code }: IProps) {
    return (
        <div className="snippet">
            <small>
                {title} <a>Copy</a>
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
