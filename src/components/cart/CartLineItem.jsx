import Link from 'next/link';
import Image from 'next/image';
import { useProduct } from '../../hooks';
import { ProductReviews } from '../catalog';
import { GrTrash } from 'react-icons/gr';
import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { CgClose } from 'react-icons/cg';
import { baseUrl } from '../..';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  const { cart, alterProduct } = useContext(AppContext);
  const { id: cartId } = cart;

  if (!isLoaded) {
    return <></>;
  }

  const onClickRemove = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((_) => {
        alterProduct(productId, -quantity);
      });
  };

  const { image, price, id, title, rating } = cartItem;
  const formattedTotalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price * quantity);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const { rate, count } = rating;

  return (
    <tr className="border-b">
      <td>
        <button
          title={`Remove ${title} from cart`}
          type="button"
          onClick={onClickRemove}
        >
          <CgClose size="22"></CgClose>
        </button>
      </td>

      <td className="py-4 px-2 flex">
        <Link href={`/products/${id}`}>
          <a title={title}>
            <Image
              src={image}
              width={100}
              height={100}
              objectFit="contain"
              className="inline"
              alt={`product ${id}`}
            ></Image>
          </a>
        </Link>

        <div className="flex flex-col items-start justify-start gap-3">
          <Link href={`/products/${id}`}>
            <a className="font-medium" title={title}>
              {title}
            </a>
          </Link>

          <ProductReviews rate={rate} count={count}></ProductReviews>
        </div>
      </td>
      <td className="text-center px-2">{formattedPrice}</td>
      <td className="text-center px-2">
        <div className="border border-black flex items-center justify-center gap-1">
          {quantity === 1 ? (
            <span className="cursor-pointer">
              <GrTrash
                onClick={() => {
                  alterProduct(id, -1);
                }}
              ></GrTrash>{' '}
            </span>
          ) : (
            <button
              type="button"
              title="Decrease"
              className="p-2"
              onClick={() => {
                alterProduct(id, -1);
              }}
            >
              -
            </button>
          )}
          {quantity}
          <button
            type="button"
            title="Increase"
            className="p-2"
            onClick={() => {
              alterProduct(id, 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td className="text-center px-2">{formattedTotalPrice}</td>
    </tr>
  );
};
