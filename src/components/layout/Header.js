import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useStaticQuery } from 'gatsby';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import t from '../../data/languages';

const query = graphql`
  query MyQuery {
    site {
      internal {
        description
      }
    }
  }
`;

const Header = () => {
  const data = useStaticQuery(query);
  const lang = 'fa';
  console.log(data);
  return (
    <header className="sticky top-0 bg-white shadow ltr">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <LogoIcon />
          </div>
          Athena Game Show
        </div>
        <div className="flex mt-4 sm:mt-0">
          <AnchorLink className="px-4" href="#features">
            {t.features[lang]}
          </AnchorLink>
          <AnchorLink className="px-4" href="#services">
            {t.services[lang]}
          </AnchorLink>
          <AnchorLink className="px-4" href="#testimonials">
            {t.usecases[lang]}
          </AnchorLink>
        </div>
        <div className="hidden md:block">
          <Button className="text-sm">Download</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
