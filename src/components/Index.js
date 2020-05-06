import React from 'react';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import Button from './Button';
import Card from './Card';
import CustomerCard from './CustomerCard';
import LabelText from './LabelText';
import Layout from './layout/Layout';
import SplitSection from './SplitSection';
import StatsBox from './StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import t from '../data/languages';

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
    top: '255px',
    [`@media (min-width: 1024px)`]: {
      width: '50%',
      top: '75px'
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

  const classes = useStyles(isRtl);
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

      <section className="pt-8 md:pt-24">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-normal leading-none rtl:text-right">
              {t.headline[lang]}
            </h1>
            <p
              className="text-xl lg:text-2xl mt-6 font-light rtl:text-right"
              style={{
                boxShadow: '0px 0px 60px 11px rgba(255,255,255,1)',
                backgroundColor: '#ffffffa6'
              }}
            >
              {t.secondaryHeadline[lang]}
            </p>
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
              <img src="/s1.png" className="rounded-lg abso" alt="img" />
            </div>
            {/* <HeroImage
              
            /> */}
          </div>
        </div>
        <div className="flex justify-center px-8 mt-12 md:hidden ">
          <Button className="text-sm rtl:text-right">Download</Button>
        </div>
      </section>

      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">{t.features[lang]}</h2>
          <div className="flex flex-wrap flex-col sm:flex-row sm:-mx-3 mt-12">
            {featureList.map(feature => {
              return (
                <div key={feature[lang]} className="px-3" style={{ flex: '1 1 33%' }}>
                  <Card className="mb-4">
                    <p className="font-semibold text-xl">{feature.title[lang]}</p>
                    <p className="mt-4">{feature.description[lang]}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our team of enthusiastic marketers will analyse and evaluate how your company stacks
              against the closest competitors
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Design And Plan Your Business Growth Steps
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once the market analysis process is completed our staff will search for opportunities
              that are in reach
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">
              Search For Performance Optimization
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With all the information in place you will be presented with an action plan that your
              company needs to follow
            </p>
          </div>
        }
        secondarySlot={<SvgCharts />}
      />
      <section id="stats" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600">Our customers get results</LabelText>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center">
            What customers are saying
          </LabelText>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {customerData.map(customer => (
              <div key={customer.customerName} className="flex-1 px-3">
                <CustomerCard customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
        <p className="mt-8 text-xl font-light">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus
          in.
        </p>
        <p className="mt-8">
          <Button size="xl">Get Started Now</Button>
        </p>
      </section>
    </Layout>
  );
};
