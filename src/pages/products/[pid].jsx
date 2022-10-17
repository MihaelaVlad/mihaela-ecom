import Head from 'next/head';
import { useRouter } from 'next/router';
import { CartControl, ContinueShopping } from '../../components/cart';
import { Layout } from '../../layouts';
import { BiLoaderCircle } from 'react-icons/bi';
import Image from 'next/image';
import { ProductReviews, RelatedProducts } from '../../components/catalog';
import { useProduct } from '../../hooks';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);

  if (product === null && status !== '404s') {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle size="48" className="animate-spin"></BiLoaderCircle>
      </div>
    );
  }

  if (status === '404') {
    return <span>Product not found</span>;
  }

  const { id, title, description, price, image, rating, category } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const { rate, count } = rating;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        <main>
          <header className="container px-4 lg:px-0 mx-auto flex justify-between">
            <div>
              <ContinueShopping></ContinueShopping>
            </div>

            <CartControl></CartControl>
          </header>

          <section className="mt-16 mb-32 container px-4 lg:px-0 mx-auto grid gap-8 lg:grid-cols-12">
            <div className="lg:col-start-1 lg:col-span-5">
              <Image
                src={image}
                width={700}
                height={700}
                objectFit="contain"
                alt={`Image for product ${title}`}
              ></Image>
            </div>

            <header className="lg:col-start-7 lg:col-span-6 pt-12 flex flex-col items-center justify-center lg:items-start lg:justify-start">
              <h1 className="text-2xl uppercase font-medium">{title}</h1>

              <ProductReviews rate={rate} count={count}></ProductReviews>

              <p className="mt-12">{description}</p>

              <div className="mt-12">
                <span className="text-3xl leading-9 font-bold">
                  {formattedPrice}
                </span>
              </div>

              <div className="mt-12">
                <button
                  className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-600 transition-colors"
                  title={`Add ${title} to cart`}
                  type="button"
                  onClick={() => {
                    alert(id);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </header>
          </section>
          <section className="border-t"></section>
          <section className="container px-4 lg:px-0 mx-auto">
            <RelatedProducts
              productCategory={category}
              productId={id}
            ></RelatedProducts>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
