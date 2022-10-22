import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { Checkout } from './Checkout';

export const CartTotals = () => {
  const { cart } = useContext(AppContext);

  return (
    <>
      <header className=" bg-zinc-400 text-white uppercase font-medium p-3">
        <h1>Cart Totals</h1>
      </header>

      <section>
        <div>
          <div className="border-b py-3">Subtotal:</div>

          <div className="border-b py-3">
            <form className="flex gap-4">
              <label>Shipping:</label>

              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex gap-1">
                  <input
                    type="radio"
                    id="standard"
                    value="standard"
                    name="shipping"
                    className=" accent-amber-600 focus:accent-amber-600"
                  ></input>
                  <label htmlFor="standard">Standard (Free)</label>
                </div>

                <div className="flex gap-1">
                  <input
                    type="radio"
                    id="express"
                    value="express"
                    name="shipping"
                    className="accent-amber-600 focus:accent-amber-600"
                  ></input>
                  <label htmlFor="express">Express ($49.00)</label>
                </div>
              </div>
            </form>
          </div>

          <div className="border-b py-3">Total: $2,578.7</div>

          <div className=" mt-8">
            <Checkout></Checkout>
          </div>
        </div>
      </section>

      <footer></footer>
    </>
  );
};
