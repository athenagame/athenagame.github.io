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
        <link
          href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <script>
          {`
  !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
  arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
  d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
  insertBefore(d,q)}(window,document,'script','_gs');

  _gs('GSN-639569-C');
                `}
        </script>
        <body dir={lang === 'fa' ? 'rtl' : 'ltr'} />
      </Helmet>
      <Header lang={lang} />

      <main className={`text-gray-900 ${lang === 'fa' ? 'rtl' : 'ltr'}`}>{children}</main>
      <Footer lang={lang} />
    </>
  );
};

export default Layout;
