import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, lang }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/shabnam-font/dist/font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <Header lang={lang} />

      <main className="text-gray-900 rtl">{children}</main>
      <Footer lang={lang} />
    </>
  );
};

export default Layout;
