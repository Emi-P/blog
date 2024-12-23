// src/pages/Blog.tsx
import React from 'react';
import BlogPost from '../components/blog/BlogPost';
import Layout from '../components/layout/layout';

const Blog: React.FC = () => {
    // Aquí puedes definir la lógica para seleccionar qué post mostrar
    const postPath = '/posts/post1.md';

    return (
        <Layout>
        <div className="blog-page">
            <BlogPost postPath={'/blog/posts/post1.md'} />
        </div>
        </Layout>
    );
};

export default Blog;