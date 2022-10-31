import Head from 'next/head';
import {
  CartControl,
  CartTotals,
  CartItems,
  CartVoucher,
  ContinueShopping,
  UpdateCArt,
} from '../components/cart';
import { useCart, useIsMobile } from '../hooks';
import { Layout } from '../layouts';

const Cart = () => {
  const cart = useCart(2);
  const isMobile = useIsMobile();

  if (isMobile) {
    return <></>;
  }

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
        <main className="container px-4 lg:px-0 mx-auto mb-12">
          <header className="flex justify-between text-zinc-400">
            <div>
              <ContinueShopping></ContinueShopping>
            </div>

            <CartControl cart={cart}></CartControl>
          </header>

          <section className="mt-16 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 grid gap-y-12">
              <CartItems></CartItems>

              <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
                <CartVoucher></CartVoucher>
                <UpdateCArt></UpdateCArt>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <CartTotals></CartTotals>
            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
