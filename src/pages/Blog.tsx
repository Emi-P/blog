// src/pages/Blog.tsx
import React from 'react';
import BlogPost from '../components/blog/BlogPost';
import Layout from '../components/layout/layout';
import WriteupList from '../components/blog/WriteupList';

import { useParams } from 'react-router-dom';

const Blog = () => {
    const { postName } = useParams<{ postName: string }>();

    if (!postName) {
        return (
            <Layout>
                <div className='WriteupsIntro'>
                    <h1 className='text-5xl text-center pt-6'>Writeups</h1>
                    <div className='w-10/12 md:w-8/12 lg:w-5/12 mx-auto'>
                    <p className='pt-4 text-2xl mb-10'>Many of these writeups are about CTF and cybersecurity.
                         I'll post whatever I find interesting.</p>
                    </div>
                </div>
                <hr className='WriteupListSeparator'/>
                <WriteupList/>
            </Layout>
        );
    }
    
    return (
        <Layout>
        <div className="blog-page">
            <BlogPost postPath={"/blog/posts/"+postName+".md"} />
        </div>
        </Layout>
    );
};

export default Blog;