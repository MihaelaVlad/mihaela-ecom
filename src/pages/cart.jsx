import Head from 'next/head';
import { CartControl, ContinueShopping } from '../components/cart';
import { Layout } from '../layouts';

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto h-screen">
          <header className="flex justify-between text-zinc-400">
            <div></div>

            <CartControl></CartControl>
          </header>

          <div className="flex flex-col items-center justify-center">
            <section className="my-16">cart goes here</section>

            <ContinueShopping></ContinueShopping>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
