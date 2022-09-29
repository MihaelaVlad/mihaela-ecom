import Head from 'next/head';
import { Layout } from '../layouts';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>

      <Layout>
        <main>
          <h1>Contact us</h1>
        </main>
      </Layout>
    </>
  );
};

export default ContactPage;
