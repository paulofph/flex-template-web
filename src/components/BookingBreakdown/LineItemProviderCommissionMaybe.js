import React from 'react';
import { bool } from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';
import { formatMoney } from '../../util/currency';
import { types as sdkTypes } from '../../util/sdkLoader';
import { LINE_ITEM_PROVIDER_COMMISSION, propTypes } from '../../util/types';
import config from '../../config';
import { marketPlaceCommission } from '../../marketplace-custom-config'

import css from './BookingBreakdown.css';

const { Money } = sdkTypes;

// Validate the assumption that the commission exists and the amount
// is zero or negative.
const isValidCommission = commissionLineItem => {
  return (
    commissionLineItem &&
    commissionLineItem.lineTotal instanceof Money &&
    commissionLineItem.lineTotal.amount <= 0
  );
};

const calculateCommission = (transaction) => {
  let amount = 0
  transaction.attributes.lineItems.map(item => {
    if(item.code.includes('adults') || item.code.includes('children')) {
      amount = amount + item.lineTotal.amount;
    }
  })
  return new Money(amount * marketPlaceCommission, config.currency)
}

const LineItemProviderCommissionMaybe = props => {
  const { transaction, isProvider, intl } = props;
  const providerCommissionLineItem = transaction.attributes.lineItems.find(
    item => item.code === LINE_ITEM_PROVIDER_COMMISSION && !item.reversal
  );

  // If commission is passed it will be shown as a fee already reduces from the total price
  let commissionItem = null;

  if (isProvider) {
    // if (!isValidCommission(providerCommissionLineItem)) {
    //   // eslint-disable-next-line no-console
    //   console.error('invalid commission line item:', providerCommissionLineItem);
    //   throw new Error('Commission should be present and the value should be zero or negative');
    // }

    // console
    const commission = providerCommissionLineItem ? providerCommissionLineItem.lineTotal: null;
    const formattedCommission = formatMoney(intl, calculateCommission(transaction));

    commissionItem = (
      <div className={css.lineItem}>
        <span className={css.itemLabel}>
          <FormattedMessage id="BookingBreakdown.commission" />
        </span>
        <span className={css.itemValue}>{formattedCommission}</span>
      </div>
    );
  }

  return commissionItem;
};

LineItemProviderCommissionMaybe.propTypes = {
  transaction: propTypes.transaction.isRequired,
  isProvider: bool.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemProviderCommissionMaybe;
