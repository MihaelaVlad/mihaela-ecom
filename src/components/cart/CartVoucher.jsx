export const CartVoucher = () => {
  return (
    <>
      <form className="flex gap-3">
        <input
          type="text"
          name="voucher"
          id="voucher"
          placeholder="Coupon Code"
          className="border border-zinc-400 py-2 px-3 focus:outline-amber-600 focus:outline-double"
        ></input>

        <button
          type="submit"
          name="submitVoucher"
          id="submitVoucher"
          title="Apply Coupon"
          className="border-2 border-black bg-transparent transition-colors hover:bg-amber-600 hover:border-amber-600 hover:text-white py-2 px-2 lg:px-8"
        >
          Apply Coupon
        </button>
      </form>
    </>
  );
};
