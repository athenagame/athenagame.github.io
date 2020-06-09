import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import t from '../../data/languages';

const useStyles = createUseStyles({
  title: {
    padding: '0px 30px',
    // fontSize: '2rem',
    fontWeight: 500,
    color: '#3d4b52'
  }
});

const Header = ({ lang }) => {
  const classes = useStyles();

  return (
    <header className={`sticky top-0 bg-white shadow ${lang === 'fa' ? 'rtl' : 'ltr'} z-50`}>
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className={cx(classes.title, 'lg:text-3xl')}>{t.headerTitle[lang]}</div>
        </div>
        <div className="flex mt-4 sm:mt-0">
          <AnchorLink className="px-4" href="#features">
            {t.features[lang]}
          </AnchorLink>
          <AnchorLink className="px-4" href="#questions">
            {t.questions[lang]}
          </AnchorLink>
        </div>

        <div className="hidden md:block">
          {/* <button type="button" className="text-primary rounded" style={{ margin: '0px 25px' }}>
            {lang}
          </button> */}
          <Button className="text-sm">Download</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
