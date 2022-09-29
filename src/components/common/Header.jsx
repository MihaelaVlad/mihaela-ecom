import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';
import { VscTwitter } from 'react-icons/vsc';
import { CgGoogle } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex lg:flex-col justify-between items-center h-full z-10 relative lg:py-8">
        <Link href="/">
          <a title="Home">
            <FaApple size="32"></FaApple>
          </a>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <CgClose size="32"></CgClose>
          ) : (
            <CgMenu size="32"></CgMenu>
          )}
        </button>

        <ul className="hidden lg:flex flex-col justify-between items-center gap-6">
          <li className="hover:text-amber-600">
            <Link href="https://www.facebook.com/">
              <a title="Facebook">
                <CgFacebook size="20"></CgFacebook>
              </a>
            </Link>
          </li>

          <li className="hover:text-amber-600">
            <Link href="https://www.twitter.com/">
              <a title="Twitter">
                <VscTwitter size="20"></VscTwitter>
              </a>
            </Link>
          </li>

          <li className="hover:text-amber-600">
            <Link href="https://www.google.com/">
              <a title="Google">
                <CgGoogle size="20"></CgGoogle>
              </a>
            </Link>
          </li>
        </ul>
      </section>

      <nav
        className={`absolute left-0 ${
          menuOpen ? 'top-0' : '-top-full'
        } h-screen w-screen lg:w-1/2 text-white bg-neutral-900 ease-in-out duration-500`}
      >
        <ul className="flex flex-col items-center justify-center gap-y-5 h-screen text-2xl uppercase">
          <li className="hover:text-amber-600">
            <Link href="/">
              <a title="Home">Home</a>
            </Link>
          </li>

          <li className="hover:text-amber-600">
            <Link href="/contact">
              <a title="Contact us">Contact us</a>
            </Link>
          </li>

          <li className="hover:text-amber-600">
            <Link href="/about">
              <a title="About us">About us</a>
            </Link>
          </li>
        </ul>
        {/*
        <button className="text-white" title="Close" type="button">
          <CgClose size="32"></CgClose>
        </button> */}
      </nav>
    </>
  );
};
