import Head from 'next/head';
import Map from '../components/about/Map';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { Layout } from '../layouts';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <div>
            <Map></Map>
          </div>

          <div className="flex flex-col lg:flex-row justify-between lg:w-full">
            <ContactInfo></ContactInfo>

            <ContactForm></ContactForm>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default ContactPage;
