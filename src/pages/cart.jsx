import Head from 'next/head';
import { CartControl, ContinueShopping } from '../components/cart';
import { useCart } from '../hooks';
import { Layout } from '../layouts';

const Cart = () => {
  const cart = useCart(2);

  if (cart === null) {
    return (
      <>
        <Layout>
          <main className="container px-4 lg:px-0 mx-auto">
            <header className="flex justify-between text-zinc-400">
              <div>
                <ContinueShopping></ContinueShopping>
              </div>

              <CartControl cart={cart}></CartControl>
            </header>

            <section className="container flex items-center justify-center bg-amber-600 text-white text-center font-bold text-xl p-6">
              Your cart is empty
            </section>
          </main>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-between text-zinc-400">
            <div>
              <ContinueShopping></ContinueShopping>
            </div>

            <CartControl cart={cart}></CartControl>
          </header>

          <section className="mt-16">{cart.id}</section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
