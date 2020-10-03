import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import Button from '../Button';
import t from '../../data/languages';

const useStyles = createUseStyles({
  title: {
    padding: '0px 30px',
    // fontSize: '2rem',
    // fontWeight: 500,
    color: '#3d4b52'
  }
});

const Header = ({ lang }) => {
  const classes = useStyles();

  return (
    <header className={`sticky top-0 bg-white shadow ${lang === 'fa' ? 'rtl' : 'ltr'} z-50`}>
      <div className="container flex flex-col items-center justify-between px-8 py-4 mx-auto sm:flex-row">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div
            className={cx(
              classes.title,
              'text-base rtl:text-3xl ltr:font-semibold rtl:font-medium lg:text-3xl'
            )}
          >
            {t.headerTitle[lang]}
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-4 sm:w-2/5 md:mt-0">
          <AnchorLink className="px-4" href="#features">
            {t.features[lang]}
          </AnchorLink>
          <AnchorLink className="px-4" href="#questions">
            {t.questions[lang]}
          </AnchorLink>
          <a
            href={lang === 'fa' ? '/en' : '/fa'}
            className="px-3 py-1 border border-teal-500 rounded text-teal rtl:mr-auto ltr:ml-auto md:p-2"
          >
            {t.changeLanguage[lang]}
          </a>
        </div>

        {/* <div className="block"> */}
        {/* <button type="button" className="rounded text-primary" style={{ margin: '0px 25px' }}>
            {lang}
          </button> */}
        {/* <a
            href={lang === 'fa' ? 'en' : 'fa'}
            className="p-2 border border-teal-500 rounded text-teal"
          >
            {t.changeLanguage[lang]}
          </a>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
