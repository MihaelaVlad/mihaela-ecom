import { css } from '@emotion/css';
import { motion } from 'framer-motion';
import { ProductTile } from './ProductTile';

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
      {products.map((product) => {
        return (
          <motion.li
            animate={{ opacity: 1 }}
            layout="position"
            whileHover={{ scale: 1.1 }}
            key={product.id}
            className="flex"
          >
            <ProductTile product={product}></ProductTile>
          </motion.li>
        );
      })}
    </ul>
  );
};
