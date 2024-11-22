import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownPageProps {
    content: string;
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ content }) => {
    return (
        <div className="">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownPage;