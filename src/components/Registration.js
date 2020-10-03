import React, { useState, useRef } from 'react';
import Button from './Button';
import Layout from './layout/Layout';
import t from '../data/languages';

export default ({ lang }) => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const formRef = useRef();

  return (
    <Layout lang={lang}>
      <iframe title="email" name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} />

      <section
        id="download"
        className="container py-10 mx-auto my-20 text-center bg-gray-200 rounded-lg "
      >
        <form
          ref={formRef}
          target="hidden_iframe"
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdbwoJ8-KaDsIk3xSlSjW29lWxrDGA6UAwiriGLTuBLypgWPw/formResponse"
          method="post"
          style={{ display: isEmailSent ? 'none' : 'block' }}
        >
          <p className="m-8 text-xl font-light">{t.email[lang]}</p>
          <div className="flex px-2 md:px-24">
            <svg
              className="w-10 h-10 text-orange-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512.002"
              viewBox="0 0 512 512.002"
            >
              <g transform="translate(0 0.002)">
                <path
                  d="M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L448,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z"
                  opacity="0.4"
                />
                <path d="M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a79.989,79.989,0,0,1-46.888-15.192L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z" />
              </g>
            </svg>
            <input
              type="email"
              name="entry.1055300465"
              className="w-full px-3 py-2 mx-2 text-base border-t border-b border-l border-gray-200 rounded md:text-lg"
              style={{ marginLeft: 16 }}
              placeholder={t.yourEmail[lang]}
            />
          </div>
          <p className="mt-8">
            <Button
              size="xl"
              type="submit"
              onClick={() => {
                setIsEmailSent(true);
                formRef.current.submit();
              }}
            >
              {t.emailText[lang]}
            </Button>
          </p>
        </form>
        {isEmailSent && <p className="text-xl font-light">{t.emailSent[lang]}</p>}
      </section>
    </Layout>
  );
};
