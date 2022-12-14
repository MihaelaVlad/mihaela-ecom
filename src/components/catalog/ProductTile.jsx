import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AddToCart } from './AddToCart';

export const ProductTile = ({ product }) => {
  const { title, price, image, id } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <motion.article
      className="w-full flex flex-col items-center justify-between gap-4"
      layout="position"
    >
      <header>
        <div className="w-full text-center">
          <Link href={`/products/${id}`}>
            <a title={title}>
              <Image
                alt={`Image for product ${title}`}
                src={image}
                width={200}
                height={200}
                objectFit="contain"
                className="inline"
              ></Image>
            </a>
          </Link>
        </div>
      </header>

      <section className="mt-8 text-center text-sm flex flex-col items-center justify-between gap-4">
        <h1 className="uppercase text-zinc-400 mb-2">{title}</h1>

        <div className="text-zinc-900 font-light">{formattedPrice}</div>

        <div>
          <AddToCart product={product}></AddToCart>
        </div>
      </section>
    </motion.article>
  );
};
