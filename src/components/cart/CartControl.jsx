import Link from 'next/link';
import { RiShoppingCartFill } from 'react-icons/ri';

export const CartControl = () => {
  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            className="w-20 h-20 flex justify-center items-center hover:text-amber-600"
            title="Cart"
          >
            <RiShoppingCartFill size="32"></RiShoppingCartFill>
          </a>
        </Link>
      </li>
    </ul>
  );
};
