// src/components/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const dark = {
  "code[class*=\"language-\"]": {
    "color": "#cdd6f4",
    "background": "none",
    "textShadow": "0 -.1em .2em #1e1e2e",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#cdd6f4",
    "background": "#181825",
    "textShadow": "0 -.1em .2em #1e1e2e",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "border": ".12em solid #cba6f7",
    "borderRadius": ".5em",
    "boxShadow": "1px 1px .5em #1e1e2e inset"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#1e1e2e",
    "padding": ".15em .2em .05em",
    "borderRadius": ".3em",
    "border": ".13em solid #313244",
    "boxShadow": "1px 1px .3em -.1em #1e1e2e inset",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "#6c7086"
  },
  "prolog": {
    "color": "#6c7086"
  },
  "doctype": {
    "color": "#6c7086"
  },
  "cdata": {
    "color": "#6c7086"
  },
  "punctuation": {
    "Opacity": ".7"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#f38ba8"
  },
  "tag": {
    "color": "#f38ba8"
  },
  "boolean": {
    "color": "#f38ba8"
  },
  "number": {
    "color": "#f38ba8"
  },
  "constant": {
    "color": "#f38ba8"
  },
  "symbol": {
    "color": "#f38ba8"
  },
  "selector": {
    "color": "#a6e3a1"
  },
  "attr-name": {
    "color": "#a6e3a1"
  },
  "string": {
    "color": "#a6e3a1"
  },
  "char": {
    "color": "#a6e3a1"
  },
  "builtin": {
    "color": "#a6e3a1"
  },
  "inserted": {
    "color": "#a6e3a1"
  },
  "operator": {
    "color": "#fab387"
  },
  "entity": {
    "color": "#fab387",
    "cursor": "help"
  },
  "url": {
    "color": "#fab387"
  },
  ".language-css .token.string": {
    "color": "#fab387"
  },
  ".style .token.string": {
    "color": "#fab387"
  },
  "variable": {
    "color": "#fab387"
  },
  "atrule": {
    "color": "#f38ba8"
  },
  "attr-value": {
    "color": "#f38ba8"
  },
  "keyword": {
    "color": "#f38ba8"
  },
  "regex": {
    "color": "#f9e2af"
  },
  "important": {
    "color": "#f9e2af",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "deleted": {
    "color": "#f38ba8"
  }
};

interface BlogPostProps {
  postPath: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ postPath }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(postPath)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      })
  }, [postPath]);

  return (
    <div className="blog-post w-10/12 md:w-8/12 lg:w-5/12 mx-auto">
      <ReactMarkdown
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                language={match[1]}
                style={dark as any}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className}>
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