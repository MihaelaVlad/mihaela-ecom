import { useContext } from 'react';
import { baseUrl } from '../..';
import { AppContext } from '../../pages/_app';

export const AddToCart = ({ product }) => {
  const { cart, alterProduct } = useContext(AppContext);

  if (cart === null) {
    return;
  }

  const { id: cartId } = cart;
  const { id: productId, title } = product;

  const newCart = {};

  const onClick = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCart),
    })
      .then((response) => {
        return response.json();
      })
      .then((_) => {
        alterProduct(productId);
      });
  };
  const cartProducts = cart.products.map(({ productId }) => {
    return productId;
  });
  const productCart = cart.products.find((product) => {
    return product;
  });

  return cartProducts.includes(productId) ? (
    <button
      className="bg-black text-white uppercase font-medium text-sm my-1 py-3 px-6 hover:bg-amber-600 transition-colors"
      type="button"
      title="Remove item"
      onClick={() => alterProduct(productId, -productCart.quantity)}
    >
      Remove from cart
    </button>
  ) : (
    <button
      className="bg-black text-white uppercase font-medium text-sm my-1 py-3 px-6 hover:bg-amber-600 transition-colors"
      title={`Add ${title} to cart`}
      type="button"
      onClick={onClick}
    >
      Add to Cart
    </button>
  );
};
