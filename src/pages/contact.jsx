import Head from 'next/head';
import { Layout } from '../layouts';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>

      <Layout>
        <main>
          <p>Hello from Next!</p>
        </main>
      </Layout>
    </>
  );
};

export default ContactPage;
