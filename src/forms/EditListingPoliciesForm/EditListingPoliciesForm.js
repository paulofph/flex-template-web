import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldTextInput } from '../../components';
import { required } from '../../util/validators';
import CategoriesSelect from './../EditListingDescriptionForm/CategoriesSelect';

import css from './EditListingPoliciesForm.css';
import marketPlaceCss from './../../marketplace.css';

export const EditListingPoliciesFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        className,
        disabled,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        hostPresenceOptions
      } = fieldRenderProps;

      const rulesLabelMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.rulesLabel',
      });
      const rulesPlaceholderMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.rulesPlaceholder',
      });

      const hostPresenceLabel = intl.formatMessage({ id: 'EditListingDescriptionForm.hostPresenceLabel' });
      const hostPresencePlaceholder = intl.formatMessage({ id: 'EditListingDescriptionForm.traderCategoryPlaceholder' });
      const hostPresenceRequired = required( intl.formatMessage({ id: 'EditListingDescriptionForm.hostPresenceRequired' }));
      hostPresenceOptions.map(c => {
        return c.label = intl.formatMessage({ id: c.label })
      })

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingPoliciesForm.updateFailed" />
        </p>
      ) : null;
      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingPoliciesForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <CategoriesSelect
            id="hostPresence"
            name="hostPresence"
            label={hostPresenceLabel}
            placeholder={hostPresencePlaceholder}
            categories={hostPresenceOptions}
            errorMessage={hostPresenceRequired}
          />

          <FieldTextInput
            id="rules"
            name="rules"
            className={css.policy}
            type="textarea"
            label={rulesLabelMessage}
            placeholder={rulesPlaceholderMessage}
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

EditListingPoliciesFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingPoliciesFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

export default compose(injectIntl)(EditListingPoliciesFormComponent);
