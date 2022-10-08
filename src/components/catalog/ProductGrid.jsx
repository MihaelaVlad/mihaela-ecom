import { css } from '@emotion/css';
import { motion } from 'framer-motion';

export const ProductGrid = ({ products = [], perRow = 4 }) => {
  if (products.length <= 0) {
    return (
      <>
        <div className="flex items-center justify-center bg-amber-600 text-white text-center font-bold text-xl p-6">
          There are no products
        </div>
      </>
    );
  }

  const gridCss = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${perRow}, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {products.map((product, index) => {
        const { title, price, image } = product;

        return (
          <motion.li
            animate={{ opacity: 1 }}
            layout="position"
            whileHover={{ scale: 1.1 }}
            key={index}
          >
            <article className="w-full cursor-pointer">
              <header>
                <div className="w-full h-72 text-center">
                  <img src={image} className="h-full inline"></img>
                </div>
              </header>

              <section className="mt-8 text-center text-sm">
                <h1 className="uppercase text-zinc-400 mb-2">{title}</h1>

                <div className="text-zinc-900 font-light">{price}</div>
              </section>
            </article>
          </motion.li>
        );
      })}
    </ul>
  );
};
