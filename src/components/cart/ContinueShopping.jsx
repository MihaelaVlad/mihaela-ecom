import Link from 'next/link';
import { motion } from 'framer-motion';

export const ContinueShopping = () => {
  return (
    <>
      <div>
        <Link href="/">
          <motion.a
            title="Continue Shopping"
            className="flex items-center justify-center bg-gray-900 text-white text-center font-bold text-xl p-4 hover:bg-amber-600 cursor-pointer"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Continue shopping
          </motion.a>
        </Link>
      </div>
    </>
  );
};
