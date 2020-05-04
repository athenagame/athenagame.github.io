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
    '0%': { opacity: 0, transform: 'scale(0.95) translate3d(-40px, 10px, 0)' }
  },
  '@keyframes fadeInLeftMedia': {
    '0%': { opacity: 0, transform: 'scale(0.8) translate3d(-40px, 10px, 0)' },
    '30%': { opacity: 1 }
  },
  '@keyframes rotatieMedia': {
    '100%': {
      opacity: 1
      // transform:
      //   'perspective(1000px) rotateY(10deg) rotateX(0deg) rotateZ(-3deg) scaleY(1) translatex(2%)'
    }
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
    left: '0%',
    width: '50%',
    top: '75px'
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
    animation: '$fadeInLeftMedia 1s 0.2s both cubic-bezier(0.3, 0, 0.2, 1)'
  },
  mainImage: {
    // transition: 'box-shadow 2s ease',
    transition: 'transform .5s cubic-bezier(0.3, 0, 0.2, 1)',
    transform:
      'perspective(1000px) rotateY(16deg) rotateX(2deg) rotateZ(-7deg) scaleY(0.95) translatex(2%)',
    // opacity: 0.2,
    '&:hover': {
      // animation: '$fadeIn 1s 0.2s cubic-bezier(0.3, 0, 0.2, 1)'
      transform:
        'perspective(1000px) rotateY(10deg) rotateX(0deg) rotateZ(-3deg) scaleY(1) translatex(2%)'
    }
  }
});

export default ({ lang }) => {
  const classes = useStyles();
  return (
    <Layout lang={lang}>
      <section>
        <div className={`container mx-auto px-8 lg:flex ${classes.imageHolder}`}>
          <div className={classes.image1Container}>
            <img src="/header.svg" alt="Logo" style={{ transform: 'scaleX(-1)' }} />
          </div>
          <div className={classes.image2Container}>
            <img src="/hero.svg" alt="Logo" style={{ transform: 'scaleX(-1)' }} />
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-right">
              {t.headline[lang]}
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light text-right">
              Free landing page template to promote your business startup and generate leads for the
              offered services
            </p>
            <p className="mt-8 md:mt-12">
              <Button size="lg">Get Started</Button>
            </p>
            <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
          </div>
          <div className={cx(classes.mainImageAnimation, 'lg:w-1/2')}>
            <div
              className={cx(classes.mainImage)}
              style={{
                width: '450px',
                // height: '230px',
                backgroundColor: 'white',
                boxShadow: '48px 16px 48px rgba(24,37,56,0.12)'
              }}
            >
              <img src="/s1.png" alt="img" />
            </div>
            {/* <HeroImage
              
            /> */}
          </div>
        </div>
      </section>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-right">
              {t.headline[lang]}
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light text-right">
              Free landing page template to promote your business startup and generate leads for the
              offered services
            </p>
            <p className="mt-8 md:mt-12">
              <Button size="lg">Get Started</Button>
            </p>
            <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">{t.features[lang]}</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Service One</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Service Two</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Service Three</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
                </p>
              </Card>
            </div>
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
