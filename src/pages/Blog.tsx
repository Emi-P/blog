// src/pages/Blog.tsx
import React from 'react';
import BlogPost from '../components/blog/BlogPost';
import Layout from '../components/layout/layout';

import { useParams } from 'react-router-dom';

const Blog = () => {
    const { postName } = useParams<{ postName: string }>();

    // Aquí puedes definir la lógica para seleccionar qué post mostrar
    console.log("/blog/posts/"+postName);
    return (
        <Layout>
        <div className="blog-page">
            <BlogPost postPath={"/blog/posts/"+postName+".md"} />
        </div>
        </Layout>
    );
};

export default Blog;