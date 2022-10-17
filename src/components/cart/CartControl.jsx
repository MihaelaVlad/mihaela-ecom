import Link from 'next/link';
import { useContext } from 'react';
import { RiShoppingCartFill } from 'react-icons/ri';
import { AppContext } from '../../pages/_app';

export const CartControl = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;

    cartQty += quantity;

    return cartQty;
  }, 0);

  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            className="w-20 h-20 flex justify-center items-center transition-colors hover:text-amber-600"
            title="Cart"
          >
            <RiShoppingCartFill size="32"></RiShoppingCartFill>
            {cartQty}
          </a>
        </Link>
      </li>
    </ul>
  );
};
