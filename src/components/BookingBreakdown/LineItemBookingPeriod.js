import React from 'react';
import { FormattedMessage, FormattedHTMLMessage, FormattedDate } from 'react-intl';
import moment from 'moment';
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY, propTypes } from '../../util/types';
import { daysBetween, dateFromAPIToLocalNoon } from '../../util/dates';

import css from './BookingBreakdown.css';

const BookingPeriod = props => {
  const { startDate, endDate } = props;

  const isSingleDay = true

  const dateFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };

  return <FormattedDate value={startDate} {...dateFormatOptions} />;
};



const LineItemBookingPeriod = props => {
  const { transaction, booking, unitType } = props;
  // Attributes: displayStart and displayEnd can be used to differentiate shown time range
  // from actual start and end times used for availability reservation. It can help in situations
  // where there are preparation time needed between bookings.
  // Read more: https://www.sharetribe.com/api-reference/#bookings
  const { start, end, displayStart, displayEnd } = booking.attributes;
  
  const localStartDate = dateFromAPIToLocalNoon(displayStart || start);
  const localEndDateRaw = dateFromAPIToLocalNoon(displayEnd || end);
  
  console.log(0, start)
  console.log(1, end)
  // console.log(1, localStartDate.getHours(), localStartDate.getMinutes())

  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const dayCount = daysBetween(localStartDate, localEndDateRaw);
  const isSingleDay = !isNightly && dayCount === 1;
  const endDay = isNightly ? localEndDateRaw : moment(localEndDateRaw).subtract(1, 'days');

  const unitPurchase = transaction.attributes.lineItems.find(
    item => item.code === unitType && !item.reversal
  );

  const useQuantityForDayCount = isNightly || isDaily;
  const count = useQuantityForDayCount && unitPurchase ? unitPurchase.quantity.toFixed() : dayCount;

  const unitCountMessage = (
    <FormattedHTMLMessage
      id={isNightly ? 'BookingBreakdown.nightCount' : 'BookingBreakdown.dayCount'}
      values={{ count }}
    />
  );

  const dateFormatOptions = {
    hour:"numeric",
    minute:"2-digit",
    hour12: false
  }

  return (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>
        <BookingPeriod isSingleDay={isSingleDay} startDate={localStartDate} endDate={endDay} />
      </span>
      <span className={css.itemValue}>
        <FormattedDate value={start} {...dateFormatOptions} /> - <FormattedDate value={end} {...dateFormatOptions} /> 
      </span>
    </div>
  );
};

LineItemBookingPeriod.propTypes = {
  transaction: propTypes.transaction.isRequired,
  booking: propTypes.booking.isRequired,
};

export default LineItemBookingPeriod;
