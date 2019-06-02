import React from 'react';
import { FormattedMessage } from 'react-intl';
import css from './ListingPage.css';

const SectionDescriptionMaybe = props => {
  const { capacity, intl } = props;
  const peopleLabel = intl.formatMessage({
    id: 'ListingPage.capacityPeople',
  });
  return capacity ? (
    <div className={css.sectionDescription}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="ListingPage.capacityTitle" />
      </h2>
      <p className={css.description}>
        {capacity} {peopleLabel}
      </p>
    </div>
  ) : null;
};

export default SectionDescriptionMaybe;
