import Head from 'next/head';
import { useRouter } from 'next/router';
import { CartControl, ContinueShopping } from '../../components/cart';
import { Layout } from '../../layouts';
import { BiLoaderCircle } from 'react-icons/bi';
import Image from 'next/image';
import {
  AddToCart,
  ProductReviews,
  RelatedProducts,
} from '../../components/catalog';
import { useProduct } from '../../hooks';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);

  if (product === null && status !== '404') {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle size="48" className="animate-spin"></BiLoaderCircle>
      </div>
    );
  }

  if (status === '404') {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-7">
        <span className="font-bold text-9xl text-amber-600">404</span>

        <span className="font-medium text-2xl">Product not found</span>

        <p>The product you are looking for does not exist!</p>

        <ContinueShopping></ContinueShopping>
      </div>
    );
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

            <div className="lg:col-start-7 lg:col-span-6 pt-12 flex flex-col items-center justify-center lg:items-start lg:justify-start">
              <header className=" flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <h1 className="text-2xl uppercase font-medium">{title}</h1>

                <ProductReviews rate={rate} count={count}></ProductReviews>
              </header>

              <div className="mt-12">{description}</div>

              <span className="text-3xl leading-9 font-bold mt-12">
                {formattedPrice}
              </span>

              <div className="mt-12">
                <AddToCart product={product}></AddToCart>
              </div>
            </div>
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
