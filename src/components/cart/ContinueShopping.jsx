import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export const ContinueShopping = () => {
  return (
    <>
      <div>
        <Link href="/">
          <a
            title="Continue Shopping"
            className="flex items-center justify-center border border-black text-black text-center lg:text-xl p-2 lg:p-7 transition-colors hover:bg-amber-600 cursor-pointer hover:text-white hover:border-amber-600"
          >
            <HiOutlineArrowNarrowLeft size="30"></HiOutlineArrowNarrowLeft>
            <span className="pl-1 lg:pl-8 uppercase">Continue shopping</span>
          </a>
        </Link>
      </div>
    </>
  );
};
