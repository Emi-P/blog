import React from 'react';
import Layout from '../components/layout';
import Welcomer from '../components/welcomer';
import SectionList from '../components/section-list';

export default function Home() {
  return (
    <Layout>
      <Welcomer />
      <SectionList />
    </Layout>
  );
}