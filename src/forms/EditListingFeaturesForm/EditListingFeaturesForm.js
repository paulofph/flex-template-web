import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage } from 'react-intl';
import { amenities } from './../../marketplace-custom-config'
import { propTypes } from '../../util/types';
import config from '../../config';
import { Button, FieldCheckboxGroup, FieldTextInput, Form } from '../../components';
import { injectIntl, intlShape } from 'react-intl';
import css from './EditListingFeaturesForm.css';
import marketPlaceCss from './../../marketplace.css';

const EditListingFeaturesFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={fieldRenderProps => {
      const {
        disabled,
        rootClassName,
        className,
        name,
        handleSubmit,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        intl
      } = fieldRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;

      config.custom.amenities.map(option => {
        const amenity = amenities.find(c => c.key === option.key)
        option.label = intl.formatMessage({ id: amenity.label })
      })

      const otherServicesLabel = intl.formatMessage({ id: 'EditListingFeaturesPanel.otherServicesLabel' });
      const otherServicesPlaceholder = intl.formatMessage({ id: 'EditListingFeaturesPanel.otherServicesPlaceholder' });

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <FieldCheckboxGroup
            className={css.features}
            id={name}
            name={name}
            options={config.custom.amenities}
          />

          <FieldTextInput
            id="otherServices"
            name="otherServices"
            className={css.description}
            type="textarea"
            label={otherServicesLabel}
            placeholder={otherServicesPlaceholder}
          />

          <div className={marketPlaceCss.alignRight}>
            <Button
              className={css.submitButton}
              type="submit"
              inProgress={submitInProgress}
              disabled={submitDisabled}
              ready={submitReady}
            >
              {saveActionMsg}
            </Button>
          </div>
        </Form>
      );
    }}
  />
);

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

const EditListingFeaturesForm = EditListingFeaturesFormComponent;
// const EditListingFeaturesForm = injectIntl(EditListingFeaturesForm);
export default EditListingFeaturesForm;
