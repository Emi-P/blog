import Layout from '../components/layout/layout';
import Welcomer from '../components/home/welcomer';
import SectionList from '../components/home/section-list';

export default function Home() {
  return (
    <Layout>
      <Welcomer />
      <SectionList />
    </Layout>
  );
}