import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <IntlProvider>
        <Helmet>
          <link
            href="https://cdn.jsdelivr.net/gh/rastikerdar/shabnam-font/dist/font-face.css"
            rel="stylesheet"
            type="text/css"
          />
        </Helmet>
        <Header />
        <main className="text-gray-900 rtl">{children}</main>
        <Footer />
      </IntlProvider>
    </>
  );
};

export default Layout;
