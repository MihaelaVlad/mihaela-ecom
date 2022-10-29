import Head from 'next/head';
import { AboutUs } from '../components/about/AboutUs';
import { Layout } from '../layouts';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <AboutUs></AboutUs>
        </main>
      </Layout>
    </>
  );
};

export default ContactPage;
