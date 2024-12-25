// src/components/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from './dark'

interface BlogPostProps {
    postPath: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ postPath }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(postPath)
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, [postPath]);

    return (
        <div className="blog-post w-10/12 md:w-8/12 lg:w-5/12 mx-auto">
            <ReactMarkdown
        components={{
          code({ className, children, ...rest }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                language={match[1]}
                style={dark}
                {...rest}
              >
                {children}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
        </div>
    );
};

export default BlogPost;