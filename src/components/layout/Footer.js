import React from 'react';
import t from '../../data/languages';

const Footer = ({ lang }) => (
  <footer className="container px-3 py-16 mx-auto mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">{t.aboutUs[lang]}</h2>
        <a href="mailto:contact@athenagameshow.com">
          <i className="fontello-icon icon-mail">&#x2709;</i> contact@athenagameshow.com
        </a>
        <br />
        <a href="https://www.instagram.com/athenagameshow/">
          <i className="fontello-icon icon-instagram">&#xf16d;</i> AthenaGameShow
        </a>
        <br />
        <a href="https://www.linkedin.com/showcase/athena-game-show-maker/">
          <i className="fontello-icon icon-linkedin">&#xf0e1;</i> Athena Game Show Maker
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
