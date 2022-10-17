import { useEffect, useState } from 'react';
import { BsGrid } from 'react-icons/bs';
import { BiRectangle } from 'react-icons/bi';

const buttonClasses = `w-20 h-20 border-l border-zinc-400 flex justify-center items-center`;

export const GridControls = ({ setPerRow = () => {} }) => {
  const [itemsPerRow, setItemsPerRow] = useState('4/row');

  // de fiecare data cand itemsPerRow se schimba
  // ruleaza acest callback
  useEffect(() => {
    const perRow = parseInt(itemsPerRow);

    setPerRow(perRow);
  }, [itemsPerRow, setPerRow]);

  return (
    <ul className="flex border border-l-0 border-r-0 border-zinc-400">
      <li>
        <button
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1/row' ? 'bg-black text-white' : ''
          } transition-colors hover:text-amber-600`}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          <BiRectangle size="22"></BiRectangle>
        </button>
      </li>

      <li>
        <button
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2/row' ? 'bg-black text-white' : ''
          }transition-colors hover:text-amber-600`}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          <BiRectangle size="22"></BiRectangle>
          <BiRectangle size="22"></BiRectangle>
        </button>
      </li>

      <li>
        <button
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-black text-white' : ''
          }transition-colors hover:text-amber-600`}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          <BsGrid size="32"></BsGrid>
        </button>
      </li>
    </ul>
  );
};
