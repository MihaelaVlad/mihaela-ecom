import Link from 'next/link';

export const FooterInfo = () => {
  return (
    <>
      <section className="grid justify-items-center lg:justify-items-start gap-x-3 gap-y-10 grid-cols-2 grid-rows-auto lg:grid-cols-4">
        <div>
          <h1 className="uppercase mb-6 font-bold text-center lg:text-left">
            Los Angeles
          </h1>

          <ul className="flex flex-col items-start justify-center lg:justify-start gap-3 lg:gap-5">
            <li>
              145 Oliveshka Street,
              <span className="block">Los Angeles, LA 90003</span>
            </li>

            <li className="hover:text-amber-600">
              <Link href="tel:+44 987 065 901">
                <a title="+44 987 065 901">+44 987 065 901</a>
              </Link>
            </li>

            <li className="hover:text-amber-600">
              <Link href="mailto:info@Example.com">
                <a title="info@Example.com">info@Example.com</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase mb-6 font-bold text-center lg:text-left">
            San Francisco
          </h1>

          <ul className="flex flex-col items-start justify-center lg:justify-start gap-3 lg:gap-5">
            <li>
              210 Pier Street,
              <span className="block">San Francisco, CA 94111</span>
            </li>

            <li className="hover:text-amber-600">
              <Link href="tel:+44 987 065 902">
                <a title="+44 987 065 902">+44 987 065 902</a>
              </Link>
            </li>

            <li className="hover:text-amber-600">
              <Link href="mailto:info@Example.com">
                <a title="info@Example.com">info@Example.com</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase mb-6 font-bold text-center lg:text-left">
            New York
          </h1>

          <ul className="flex flex-col items-start justify-center lg:justify-start gap-3 lg:gap-5">
            <li>
              711 Snow Street,
              <span className="block">New York, NY 10014</span>
            </li>

            <li className="hover:text-amber-600">
              <Link href="tel:+44 987 065 903">
                <a title="+44 987 065 903">+44 987 065 903</a>
              </Link>
            </li>

            <li className="hover:text-amber-600">
              <Link href="mailto:info@Example.com">
                <a title="info@Example.com">info@Example.com</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase mb-6 font-bold text-center lg:text-left">
            Follow us
          </h1>

          <ul className="grid gap-x-3 lg:gap-x-10 gap-y-2 grid-cols-2 grid-rows-auto">
            <li className="hover:text-amber-600">
              <Link href="https://www.facebook.com/">
                <a title="Facebook" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </Link>
            </li>

            <li className="hover:text-amber-600">
              <Link href="https://www.twitter.com/">
                <a title="Twitter" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </Link>
            </li>

            <li className="hover:text-amber-600">
              <Link href="https://www.instagram.com/">
                <a title="Instagram" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </Link>
            </li>

            <li className="hover:text-amber-600">
              <Link href="https://www.linkedin.com/">
                <a title="Linkedin" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </a>
              </Link>
            </li>

            <li className="hover:text-amber-600">
              <Link href="https://www.dribbble.com/">
                <a title="Dribbble" target="_blank" rel="noopener noreferrer">
                  Dribbble
                </a>
              </Link>
            </li>

            <li className="hover:text-amber-600">
              <Link href="https://www.behance.com/">
                <a title="Behance" target="_blank" rel="noopener noreferrer">
                  Behance
                </a>
              </Link>
            </li>

            <li className="hover:text-amber-600">
              <Link href="https://www.pinterest.com/">
                <a title="Pinterest" target="_blank" rel="noopener noreferrer">
                  Pinterest
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
