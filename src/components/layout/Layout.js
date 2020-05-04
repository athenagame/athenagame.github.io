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
        <body dir={lang === 'fa' ? 'rtl' : 'ltr'} />
      </Helmet>
      <Header lang={lang} />

      <main className={`text-gray-900 ${lang === 'fa' ? 'rtl' : 'ltr'}`}>{children}</main>
      <Footer lang={lang} />
    </>
  );
};

export default Layout;
