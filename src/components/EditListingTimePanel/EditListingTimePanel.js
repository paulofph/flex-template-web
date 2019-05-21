import React from 'react';
import { bool, func, object, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '..';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { EditListingTimeForm } from '../../forms';
import config from '../../config';

import css from './EditListingTimePanel.css';

const EditListingTimePanel = props => {
  const {
    className,
    rootClassName,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingTimePanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingTimeForm.title" />
  );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingTimeForm
        className={css.form}
        initialValues={{ 
          morningStartHour: publicData.morningStartHour, 
          morningEndHour: publicData.morningEndHour, 
          afternoonStartHour: publicData.afternoonStartHour, 
          afternoonEndHour: publicData.afternoonEndHour
        }}
        saveActionMsg={submitButtonText}
        onSubmit={values => {
          const { morningStartHour, morningEndHour, afternoonStartHour, afternoonEndHour } = values;
          const updateValues = {
            publicData: {
              morningStartHour,
              morningEndHour,
              afternoonStartHour,
              afternoonEndHour
            }
          };
          onSubmit(updateValues);
        }}
        onChange={onChange}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        morningStartHour={config.custom.morningStartHour}
        morningEndHour={config.custom.morningEndHour}
        afternoonStartHour={config.custom.afternoonStartHour}
        afternoonEndtHour={config.custom.afternoonEndtHour}
      />
    </div>
  );
};

EditListingTimePanel.defaultProps = {
  className: null,
  rootClassName: null,
  errors: null,
  listing: null,
};

EditListingTimePanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingTimePanel;
