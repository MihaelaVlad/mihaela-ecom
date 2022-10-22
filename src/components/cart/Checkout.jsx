export const Checkout = () => {
  return (
    <div className="flex">
      <button
        type="submit"
        className="bg-black text-white transition-colors hover:bg-amber-600 uppercase text-center font-semibold w-full py-4"
        title="Proceed to checkout"
        id="checkout"
        name="checkout"
      >
        Proceed to checkout
      </button>
    </div>
  );
};
