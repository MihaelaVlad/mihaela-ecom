import Image from 'next/image';
import { ContinueShopping } from '../cart';
import { CompanyDescription } from './CompanyDescription';

export const AboutUs = () => {
  return (
    <section>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          width={1536}
          height={650}
          objectFit="cover"
          alt="About us"
        ></Image>
      </div>

      <section className="flex flex-col gap-8 items-center lg:items-start justify-center lg:justify-start px-7 lg:px-72">
        <div>
          <CompanyDescription></CompanyDescription>
        </div>

        <div>
          <ContinueShopping></ContinueShopping>
        </div>
      </section>
    </section>
  );
};
