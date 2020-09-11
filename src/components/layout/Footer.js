import React from 'react';
import t from '../../data/languages';

const Footer = ({ lang }) => (
  <footer className="container mx-auto py-16 px-3 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">{t.aboutUs[lang]}</h2>
        <a href="https://github.com/raffidil/">Raffi Dilanchian</a>
        <br />
        <a href="https://github.com/psamim/">Samim Pezeshki</a>
      </div>
    </div>
  </footer>
);

export default Footer;
