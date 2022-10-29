import { BackToTop } from './footer/BackToTop';
import { Copyright } from './footer/Copyright';
import { FooterInfo } from './footer/FooterInfo';

export const Footer = () => {
  return (
    <>
      <div className="container px-4 lg:px-0 mx-auto flex flex-col gap-y-10 pt-24 pb-10">
        <FooterInfo></FooterInfo>
      </div>

      <BackToTop></BackToTop>

      <div className="container px-4 lg:px-0 mx-auto flex flex-col gap-y-10 pt-8 pb-10">
        <Copyright></Copyright>
      </div>
    </>
  );
};
