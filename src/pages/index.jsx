import Head from 'next/head';
import { useState } from 'react';
import { CartControl } from '../components/cart';
import { GridControls, Pagination, ProductGrid } from '../components/catalog';
import { useProducts } from '../hooks';
import { Layout } from '../layouts';

const Home = () => {
  const [perRow, setPerRow] = useState(4);
  const [products] = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  // fara dependinte in array
  // efectul ruleaza la prima executie a functiei Home

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-end text-zinc-400">
            <GridControls setPerRow={setPerRow}></GridControls>

            <CartControl></CartControl>
          </header>

          <section className="my-16">
            <ProductGrid
              products={paginatedProducts}
              perRow={perRow}
            ></ProductGrid>
          </section>

          <section>
            <Pagination
              products={products}
              setPaginatedProducts={setPaginatedProducts}
            ></Pagination>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
