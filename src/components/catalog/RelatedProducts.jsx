import { useEffect, useState } from 'react';
import { baseUrl } from '../..';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const RelatedProducts = ({ productCategory, productId }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/products/category/${productCategory}?limit=4`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      });
  });

  if (products === null) {
    return (
      <div className="flex items-center justify-center bg-amber-600 text-white text-center font-bold text-xl p-6">
        There are no products
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-5 mb-16">
      <h1 className="text-center uppercase font-medium text-lg">
        Related Products
      </h1>

      <ul className="flex flex-col lg:flex-row gap-12 justify-between">
        {products.map((product) => {
          const { title, price, image, id } = product;
          const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(price);

          if (id === productId) {
            return;
          }

          return (
            <motion.li className="w-full" layout="position" key={id}>
              <article>
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

                  <div className="text-zinc-900 font-light">
                    {formattedPrice}
                  </div>

                  <div>
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
                </section>
              </article>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};
