import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { CartLineItem } from './CartLineItem';

export const CartItems = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <>spinner</>;
  }

  const { products } = cart;

  if (products.length <= 0) {
    return <></>;
  }

  return (
    <>
      <table>
        <thead className="border-b p-3 h-12">
          <tr className="uppercase text-gray-400">
            <th className="font-normal px-2">Product</th>
            <th className="font-normal px-2">Price</th>
            <th className="font-normal px-2">Quantity</th>
            <th className="font-normal px-2">Total</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            return (
              <CartLineItem
                product={product}
                key={product.productId}
              ></CartLineItem>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
