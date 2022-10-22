import Link from 'next/link';
import { useContext } from 'react';
import { RiShoppingBag2Line } from 'react-icons/ri';
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
            className="w-20 h-20 flex justify-center items-center transition-colors hover:text-amber-600 relative"
            title="Cart"
          >
            <RiShoppingBag2Line size="32"></RiShoppingBag2Line>
            <span className="bg-black text-white px-1 absolute top-3 right-3 transition hover:bg-zinc-400">
              {cartQty}
            </span>
          </a>
        </Link>
      </li>
    </ul>
  );
};
