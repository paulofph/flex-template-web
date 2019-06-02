import React from 'react';
import { FormattedMessage } from 'react-intl';
import { richText } from '../../util/richText';

import css from './ListingPage.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionDescriptionMaybe = props => {
  const { otherServices } = props;
  return otherServices ? (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="EditListingFeaturesPanel.otherServicesServiços" />
      </h2>
      <p className={css.description}>
        {richText(otherServices, {
          longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
          longWordClass: css.longWord,
        })}
      </p>
    </div>
  ) : null;
};

export default SectionDescriptionMaybe;
