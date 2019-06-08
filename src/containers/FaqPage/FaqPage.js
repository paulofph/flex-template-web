import React from 'react';
import { FormattedMessage } from 'react-intl';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink
} from '../../components';

import css from './FaqPage.css';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);
  const signupLink = (
    <NamedLink name="SignupPage" className={css.recoveryLink}>
      <FormattedMessage id="FAQPage.howCreateAccountLink" />
    </NamedLink>
  );

  const newPoolLink = (
    <NamedLink name="NewListingPage" className={css.recoveryLink}>
      <FormattedMessage id="FAQPage.howToHostLink" />
    </NamedLink>
  );

  const inboxLink = (
    <NamedLink name="InboxBasePage" className={css.recoveryLink}>
      <FormattedMessage id="FAQPage.howToHostLink" />
    </NamedLink>
  );

  // prettier-ignore
  return (
    <StaticPage
      title="FAQ"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FaqPage',
        description: 'About Saunatime',
        name: 'Faq page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1>
            <FormattedMessage id="FAQPage.title" />
          </h1>

          <div className={css.questionContainer}>
            <h2 className={css.questionTitle}>
              <FormattedMessage id="FAQPage.whatIsBpoolQuestion" />
            </h2>
            <p>
              <FormattedMessage id="FAQPage.whatIsBpoolAnswer" />
            </p>
          </div>
          <div className={css.questionContainer}>
            <h2 className={css.questionTitle}>
              <FormattedMessage id="FAQPage.payedQuestion" />
            </h2>
            <p>
              <FormattedMessage id="FAQPage.payedAnswer" />
            </p>
          </div>
          <div className={css.questionContainer}>
            <h2 className={css.questionTitle}>
              <FormattedMessage id="FAQPage.howCreateAccountQuestion" />
            </h2>
            <p>
              <FormattedMessage
                  id="FAQPage.howCreateAccountAnswer"
                  values={{ signupLink }}
                />
            </p>
          </div>
          <div className={css.questionContainer}>
            <h2 className={css.questionTitle}>
              <FormattedMessage id="FAQPage.howToBookQuestion" />
            </h2>
            <p>
              <FormattedMessage id="FAQPage.howToBookAnswerStep1" />
            </p>
            <p>
              <FormattedMessage id="FAQPage.howToBookAnswerStep2" />
            </p>
            <p>
              <FormattedMessage id="FAQPage.howToBookAnswerStep3" />
            </p>
          </div>
          <div className={css.questionContainer}>
            <h2 className={css.questionTitle}>
              <FormattedMessage id="FAQPage.howToHostQuestion" />
            </h2>
            <p>
              <FormattedMessage id="FAQPage.howToHostAnswerStep1" />
            </p>
            <p>
              <FormattedMessage 
                id="FAQPage.howToHostAnswerStep2" 
                values={{ newPoolLink }}
              />
            </p>
          </div>
          <div className={css.questionContainer}>
            <h2 className={css.questionTitle}>
              <FormattedMessage id="FAQPage.poolTypeQuestion" />
            </h2>
            <p>
              <FormattedMessage id="FAQPage.poolTypeAnswer" />
            </p>
          </div>
          <div className={css.questionContainer}>
            <h2 className={css.questionTitle}>
              <FormattedMessage id="FAQPage.cancelQuestion" />
            </h2>
            <p>
              <FormattedMessage id="FAQPage.cancelAnswer" />
            </p>
          </div>
          <div className={css.questionContainer}>
            <h2 className={css.questionTitle}>
              <FormattedMessage id="FAQPage.cancelHostQuestion" />
            </h2>
            <p>
              <FormattedMessage id="FAQPage.cancelHostAnswer" />
            </p>
          </div>
          <div className={css.questionContainer}>
            <h2 className={css.questionTitle}>
              <FormattedMessage id="FAQPage.checkBookingsQuestion" />
            </h2>
            <p>
              <FormattedMessage 
                id="FAQPage.checkBookingsAnswer" 
                values={{inboxLink}}  
              />
            </p>
          </div>
          <div className={css.questionContainer}>
            <h2 className={css.questionTitle}>
              <FormattedMessage id="FAQPage.invoiceQuestion" />
            </h2>
            <p>
              <FormattedMessage id="FAQPage.invoiceAnswer" />
            </p>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
