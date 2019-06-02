import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { maxLength, required, composeValidators } from '../../util/validators';
import { Form, Button, FieldTextInput, FieldNumberInput, FieldCurrencyInput } from '../../components';
import CategoriesSelect from './CategoriesSelect';

import css from './EditListingDescriptionForm.css';
import marketPlaceCss from './../../marketplace.css';

const TITLE_MAX_LENGTH = 60;

const EditListingDescriptionFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        categories,
        traderCategories,
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
      } = fieldRenderProps;
      
      const titleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.title' });
      const titlePlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titlePlaceholder',
      });
      const titleRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.titleRequired',
      });
      const maxLengthMessage = intl.formatMessage(
        { id: 'EditListingDescriptionForm.maxLength' },
        {
          maxLength: TITLE_MAX_LENGTH,
        }
      );

      const categoryLabel = intl.formatMessage({ id: 'EditListingDescriptionForm.categoryLabel' });
      const categoryPlaceholder = intl.formatMessage({ id: 'EditListingDescriptionForm.categoryPlaceholder' });
      const categoryRequired = required( intl.formatMessage({ id: 'EditListingDescriptionForm.categoryRequired' }));
      categories.map(c => {
        return c.label = intl.formatMessage({ id: c.label })
      })
  
      const traderCategoryLabel = intl.formatMessage({ id: 'EditListingDescriptionForm.traderCategoryLabel' });
      const traderCategoryPlaceholder = intl.formatMessage({ id: 'EditListingDescriptionForm.traderCategoryPlaceholder' });
      const traderCategoryRequired = required( intl.formatMessage({ id: 'EditListingDescriptionForm.traderCategoryRequired' }));
      traderCategories.map(c => {
        return c.label = intl.formatMessage({ id: c.label })
      })

      const descriptionMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.description' });
      const descriptionPlaceholderMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.descriptionPlaceholder' });
      const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH);
      const descriptionRequiredMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.descriptionRequired' });

      const widthLabel = intl.formatMessage({ id: 'Pool.width' }) + ' (m)';
      const widthPlaceholder = '4...';

      const lengthLabel = intl.formatMessage({ id: 'Pool.length' }) + ' (m)';
      const lengthPlaceholder = '8...';

      const minimumDepthLabel = intl.formatMessage({ id: 'Pool.minimumDepth' }) + ' (m)';
      const minimumDepthPlaceholder = '1...';

      const maximumDepthLabel = intl.formatMessage({ id: 'Pool.maximumDepth' }) + ' (m)';
      const maximumDepthPlaceholder = '3...';

      const capacityLabel = intl.formatMessage({ id: 'EditListingDescriptionForm.capacityLabel' });
      const capacityPlaceholder = intl.formatMessage({ id: 'EditListingDescriptionForm.capacityPlaceholder' });
      const capacityRequiredMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.capacityRequired' });

      const minimumNumberToCompleteLabel = intl.formatMessage({ id: 'EditListingDescriptionForm.minimumNumberToCompleteLabel' });
      const minimumNumberToCompletePlaceholder = intl.formatMessage({ id: 'EditListingDescriptionForm.minimumNumberToCompletePlaceholder' });

      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {};
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
        </p>
      ) : null;

      // This error happens only on first tab (of EditListingWizard)
      const errorMessageCreateListingDraft = createListingDraftError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.createListingDraftError" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessageCreateListingDraft}
          {errorMessageUpdateListing}
          {errorMessageShowListing}
          <FieldTextInput
            id="title"
            name="title"
            className={css.title}
            type="text"
            label={titleMessage}
            placeholder={titlePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
            autoFocus
          />

          <FieldTextInput
            id="description"
            name="description"
            className={css.description}
            type="textarea"
            label={descriptionMessage}
            placeholder={descriptionPlaceholderMessage}
            validate={composeValidators(required(descriptionRequiredMessage))}
          />

          <CategoriesSelect
            id="category"
            name="category"
            label={categoryLabel}
            placeholder={categoryPlaceholder}
            categories={categories}
            errorMessage={categoryRequired}
          />
          
          <CategoriesSelect
            id="traderCategory"
            name="traderCategory"
            label={traderCategoryLabel}
            placeholder={traderCategoryPlaceholder}
            categories={traderCategories}
            errorMessage={traderCategoryRequired}
          />

          
            <FieldNumberInput 
              id="capacity"
              name="capacity"
              label={capacityLabel}
              placeholder={capacityPlaceholder}
              validate={composeValidators(required(capacityRequiredMessage))}
            />

            <FieldNumberInput 
              id="minimumNumberToComplete"
              name="minimumNumberToComplete"
              label={minimumNumberToCompleteLabel}
              placeholder={minimumNumberToCompletePlaceholder}
            />
          

          <div className={css.inputRow}>
            <FieldNumberInput 
              id="width"
              name="width"
              className={css.leftField}
              label={widthLabel}
              placeholder={widthPlaceholder}
            />
  
            <FieldNumberInput 
              id="length"
              name="length"
              className={css.rightField}
              label={lengthLabel}
              placeholder={lengthPlaceholder}
            />
          </div>



          <div className={css.inputRow}>
            <FieldNumberInput 
              id="minimumDepth"
              name="minimumDepth"
              className={css.leftField}
              label={minimumDepthLabel}
              placeholder={minimumDepthPlaceholder}
            />
  
            <FieldNumberInput 
              id="maximumDepth"
              name="maximumDepth"
              className={css.rightField}
              label={maximumDepthLabel}
              placeholder={maximumDepthPlaceholder}
            />
          </div>
          <div className={marketPlaceCss.alignRight}>
            <Button
              className={css.submitButton}
              type="submit"
              inProgress={submitInProgress}
              disabled={submitDisabled}
              ready={submitReady}>
              {saveActionMsg}
            </Button>
          </div>
        </Form>
      );
    }}
  />
);

EditListingDescriptionFormComponent.defaultProps = { className: null, fetchErrors: null };

EditListingDescriptionFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
};

export default compose(injectIntl)(EditListingDescriptionFormComponent);
