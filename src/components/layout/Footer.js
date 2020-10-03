import React from 'react';
import t from '../../data/languages';

const Footer = ({ lang }) => (
  <footer className="container px-3 py-16 mx-auto mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">{t.aboutUs[lang]}</h2>
        <a href="https://www.instagram.com/athenagameshow/">
          <i className="fontello-icon icon-instagram">&#xf16d;</i> AthenaGameShow
        </a>
        <br />
        <a href="mailto:contact@athenagameshow.com">
          <i className="fontello-icon icon-mail">&#xe800;</i> contact@athenagameshow.com
        </a>
        <br />
        <a href="https://www.twitter.com/AthenaGameShow/">
          <i className="fontello-icon icon-twitter">&#xf099;</i> AthenaGameShow
        </a>
        <br />
        <a href="https://www.github.com/raffidil/">
          <i className="fontello-icon">&#xF09B;</i> Raffi Dilanchian
        </a>
        <br />
        <a href="https://www.github.com/psamim/">
          <i className="fontello-icon">&#xF09B;</i> Samim Pezeshki
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
