import { IoIosArrowDropup } from 'react-icons/io';

export const BackToTop = () => {
  const scrollSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        className="flex items-center justify-center after:content-[''] after:h-px after:bg-gray-300
            after:w-1/2 before:content-[''] before:h-px before:bg-gray-300
            before:w-1/2"
      >
        <button
          title="Back to top"
          className="flex items-center justify-center transition-colors hover:text-amber-600"
          onClick={scrollSmooth}
        >
          <IoIosArrowDropup size="44" color="gray"></IoIosArrowDropup>
        </button>
      </div>
    </>
  );
};
