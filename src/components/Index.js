import React, { useState, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import Button from './Button';
import Card from './Card';
import Layout from './layout/Layout';
import SplitSection from './SplitSection';
import t from '../data/languages';

const useDeviceDetect = () => {
  const [isWinSeven, setWinSeven] = React.useState(false);

  React.useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const winSeven = Boolean(userAgent.toLowerCase().includes('windows nt 6.1'));
    setWinSeven(winSeven);
  }, []);

  return { isWinSeven };
};

const useStyles = createUseStyles({
  '@keyframes fadeIn': {
    from: { opacity: 0, visibility: 'hidden' },
    to: { opacity: 1, visibility: 'visible' }
  },
  '@keyframes fadeInLeftIllustration': {
    '0%': { opacity: 0, transform: 'scale(0.95) translate3d(-40px, 10px, 0)' },
    '100%': { opacity: 1 }
  },
  '@keyframes fadeInLeftMedia': {
    '0%': { opacity: 0, transform: 'scale(0.8) translate3d(-40px, 10px, 0)' },
    '30%': { opacity: 1 }
  },
  '@keyframes screenshotZoomIn': {
    '0%': { transform: 'scale(0.5)' },
    '100%': { transform: 'scale(1)' }
  },
  headerImage: {
    animation: '$fadeIn 1s both cubic-bezier(0.3, 0, 0.2, 1)'
    // transition: 'box-shadow 2s ease',
    // visibility: 'visible',
    // opacity: 1
  },
  image1Container: {
    animation: '$fadeIn 1s both cubic-bezier(0.3, 0, 0.2, 1)',

    zIndex: -200,
    position: 'absolute',
    left: '0%'
  },
  image2Container: {
    animation: '$fadeInLeftIllustration 1s 0.2s both cubic-bezier(0.3, 0, 0.2, 1)',

    zIndex: -200,
    position: 'absolute',
    left: isRtl => isRtl && '0%',
    right: isRtl => !isRtl && '0%',
    width: '80%',
    top: '470px',
    [`@media (min-width: 1024px)`]: {
      width: '50%',
      top: '75px'
    }
  },
  screenshotAnimation: {
    // margin: '35px',
    // marginTop: '80px',
    animation: '$screenshotZoomIn 1s 0.2s both cubic-bezier(0.3, 0, 0.2, 1)'
  },
  screenshot: {
    transition: 'transform .4s cubic-bezier(0.3, 0, 0.2, 1)',
    '&:hover': {
      // animation: '$fadeIn 1s 0.2s cubic-bezier(0.3, 0, 0.2, 1)',
      transform: 'scale(1.2)'
      // transform:
      //   'perspective(1000px) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scaleY(1) translatex(2%)'
    }
  },
  imageHolder: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'

    // zIndex: 0
    // visibility: 'hidden',
    // opacity: 0
  },
  mainImageAnimation: {
    margin: '35px',
    marginTop: '80px',
    animation: '$fadeInLeftMedia 1s 0.2s both cubic-bezier(0.3, 0, 0.2, 1)'
  },
  mainImage: {
    // transition: 'box-shadow 2s ease',

    transition: 'transform .5s cubic-bezier(0.3, 0, 0.2, 1)',
    transform: isRtl =>
      `perspective(1000px) rotateY(${isRtl ? '' : '-'}16deg) rotateX(2deg) rotateZ(${
        isRtl ? '-' : ''
      }7deg) scaleY(0.95) translatex(2%)`,
    // opacity: 0.2,
    '&:hover': {
      // animation: '$fadeIn 1s 0.2s cubic-bezier(0.3, 0, 0.2, 1)'
      transform:
        'perspective(1000px) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scaleY(1) translatex(2%)'
    }
  }
});

export default ({ lang }) => {
  const isRtl = lang === 'fa';
  const { featureList } = t;
  const featureIcons = [
    '/question.svg',
    '/team.svg',
    '/palette.svg',
    '/projector.svg',
    '/loader.svg',
    '/tools.svg'
  ];
  const { questionList } = t;
  const questionScreenshots = ['/flip.mp4', '/custom2.mp4', '/music.mp4'];
  const [isEmailSent, setIsEmailSent] = useState(false);

  const classes = useStyles(isRtl);

  const formRef = useRef();

  const { isWinSeven } = useDeviceDetect();

  return (
    <Layout lang={lang}>
      <section>
        <div className={`container mx-auto px-8 lg:flex ${classes.imageHolder}`}>
          <div className={classes.image1Container}>
            <img src="/header.svg" alt="Logo" style={{ transform: isRtl && 'scaleX(-1)' }} />
          </div>
          <div className={`${classes.image2Container} `}>
            <img src="/hero.svg" alt="Logo" style={{ transform: isRtl && 'scaleX(-1)' }} />
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-24 md:mb-10">
        <div className="container px-8 mx-auto lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl font-normal leading-none leading-tight lg:text-5xl xl:text-6xl rtl:text-right balsamiq">
              {t.headline[lang]}
            </h1>
            <p
              className="mt-6 text-xl font-light lg:text-2xl rtl:text-right"
              style={{
                boxShadow: '0px 0px 60px 11px rgba(255,255,255,1)',
                backgroundColor: '#ffffffa6'
              }}
            >
              {t.secondaryHeadline[lang]}
            </p>
            <a href="https://github.com/athenagame/athenagame.github.io/releases/download/0.9.12/Athena.exe">
              <Button
                size="xl"
                className="flex mt-10 text-3xl font-extrabold tracking-wider uppercase rtl:mt-16 ltr:tracking-tighter"
                type="submit"
                onClick={() => {
                  setIsEmailSent(true);
                  formRef.current.submit();
                }}
              >
                {t.download[lang]}
              </Button>
            </a>
            <div className="p-1 rtl:text-right">{t.downloadDescription[lang]}</div>
            {isWinSeven && (
              <div className="p-1 rtl:text-right flex-row flex items-center ">
                <img
                  src="/info.svg"
                  alt="i"
                  style={{ width: '25px', height: '25px', margin: '0 8px', opacity: 0.7 }}
                />
                <div className="p-1 rtl:text-right" style={{ color: '#888888' }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.catalog.update.microsoft.com/Search.aspx?q=KB4457144"
                  >
                    {t.win7helper[lang]}
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className={cx(classes.mainImageAnimation, 'lg:w-1/2')}>
            <div
              className={cx(classes.mainImage, 'rounded-lg')}
              style={{
                width: '100%',
                // height: '230px',
                margin: 'auto',
                backgroundColor: 'white',
                boxShadow: '10px 18px 56px -19px rgba(51,51,51,0.85)'
              }}
            >
              <video autoPlay loop muted playsInline className="rounded-lg">
                <source src="/peek2.mp4" />
              </video>
            </div>
            {/* <HeroImage
              
            /> */}
          </div>
        </div>
        {/* <div className="flex justify-center px-8 mt-12 md:hidden ">
          <Button className="text-sm rtl:text-right">
            <AnchorLink href="#download" className="text-white hover:text-white">
              Download
            </AnchorLink>
          </Button>
        </div> */}
      </section>

      <section id="features" className="pt-32 lg:pb-0 md:pt-20 md:mb-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl balsamiq rtl:font-semibold">{t.features[lang]}</h2>
          <div className="flex flex-col flex-wrap mt-12 md:flex-row md:-mx-3">
            {featureList.map((feature, i) => {
              return (
                <div
                  key={`${feature[lang]}${i}`}
                  className="px-3"
                  style={{ flex: '1 1 33%', background: 'white' }}
                >
                  <Card className="flex flex-row items-center p-4 mb-4 md:p-6 md:flex-col md:justify-between">
                    <img
                      src={featureIcons[i]}
                      alt="icon"
                      style={{ height: '130px' }}
                      className="md:mb-6"
                    />
                    <div className="px-6 md:px-0">
                      <p className="text-2xl text-left rtl:font-semibold rtl:text-right md:rtl:text-center md:text-center balsamiq">
                        {feature.title[lang]}
                      </p>
                      <p className="mt-4 mb-3 text-left rtl:text-right md:rtl:text-center md:text-center">
                        {feature.description[lang]}
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="questions" className="pt-32 md:pt-20 md:mb-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl rtl:font-semibold balsamiq">{t.questions[lang]}</h2>
        </div>
        {questionList.map((question, i) => {
          return (
            <SplitSection
              key={`${question[lang]}${i}`}
              reverseOrder={i % 2}
              primarySlot={
                <div className="lg:pl-32 xl:pl-48">
                  <h3 className="text-3xl leading-tight rtl:font-semibold balsamiq">
                    {question.title[lang]}
                  </h3>
                  <p className="mt-8 text-xl font-light leading-relaxed">
                    {question.description[lang]}
                  </p>
                </div>
              }
              secondarySlot={
                <div className={cx(classes.screenshotAnimation, 'md:p-10')}>
                  <div
                    className={cx(classes.screenshot, 'rounded-lg')}
                    style={{
                      width: '100%',
                      // height: '230px',
                      margin: 'auto',
                      backgroundColor: 'white',
                      boxShadow: 'rgba(51, 51, 51, 0.85) 0px 0px 16px -2px'
                    }}
                  >
                    <video className="rounded-lg" autoPlay loop muted playsInline>
                      <source src={questionScreenshots[i]} />
                    </video>
                  </div>
                  {/* <HeroImage
              
            /> */}
                </div>
              }
            />
          );
        })}
      </section>

      {/* 

      <section className="container py-24 mx-auto my-20 text-center bg-gray-200 rounded-lg">
        <p className="mt-8 text-xl font-light">{t.buyline[lang]}</p>
        <p className="mt-8">
          <Button size="xl">{t.getStarted[lang]}</Button>
        </p>
      </section>

      */}

      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} />
    </Layout>
  );
};
