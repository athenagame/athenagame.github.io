import React from 'react';
import t from '../../data/languages';

const Footer = ({ lang }) => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">{t.aboutUs[lang]}</h2>
        <p className="mt-5">{t.aboutText[lang]}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
