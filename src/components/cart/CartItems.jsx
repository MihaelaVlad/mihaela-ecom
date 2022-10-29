import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { CartLineItem } from './CartLineItem';
import { BiLoaderCircle } from 'react-icons/bi';

export const CartItems = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return (
      <div className="flex justify-center items-center">
        <BiLoaderCircle size="48" className="animate-spin"></BiLoaderCircle>
      </div>
    );
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
            <th></th>
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
