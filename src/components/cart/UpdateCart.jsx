import Link from 'next/link';

export const UpdateCArt = () => {
  return (
    <>
      <div className="flex items-end justify-end ">
        <Link href="">
          <a
            title="Update Cart"
            className="border bg-zinc-400 text-white text-center lg:text-xl p-4 transition-colors hover:bg-amber-600 cursor-pointer"
          >
            Update Cart
          </a>
        </Link>
      </div>
    </>
  );
};
