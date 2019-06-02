import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.css';

const SectionRulesMaybe = props => {
  const { className, rootClassName, publicData, intl } = props;
  const classes = classNames(rootClassName || css.root, className);
  const { hostPresence } = publicData;
  let hostPresenceText
  switch(hostPresence) {
    case 'yes': {
      hostPresenceText = intl.formatMessage({ id: 'ListingPage.hostPresenceYesLabel' });
      break;
    }
    case 'no': {
      hostPresenceText = intl.formatMessage({ id: 'ListingPage.hostPresenceNoLabel' })
      break;
    }
    case 'occasionally': {
      hostPresenceText = intl.formatMessage({ id: 'ListingPage.hostPresenceOcassionallyLabel' })
      break;
    }
    default: {
      hostPresenceText = intl.formatMessage({ id: 'ListingPage.hostPresenceYesLabel' });
      break;
    }
  }

  return (
    <div>
      { publicData && publicData.rules ? <div className={classes}>
        <h2 className={css.title}>
          <FormattedMessage id="ListingPage.rulesTitle" />
        </h2>
        <p className={css.rules}>{publicData.rules}</p>
      </div>: null}
      { publicData && publicData.hostPresence ? <div className={classes}>
        <p className={css.rules}>{hostPresenceText}</p>
      </div>: null}
    </div>
  )

};

SectionRulesMaybe.defaultProps = { className: null, rootClassName: null };

SectionRulesMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    rules: string,
  }),
};

export default SectionRulesMaybe;
