import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '..';

import css from './SectionHowItWorksHost.css';

import addImage from './images/add.png';
import acceptImage from './images/approve.png';
import moneyImage from './images/money.png';

const SectionHowItWorksHost = props => {
  const { rootClassName, className } = props;
  

  class LocationImage extends Component {
    render() {
      const { alt, ...rest } = this.props;
      return <img alt={alt} {...rest} />;
    }
  }
  const LazyImage = lazyLoadWithDimensions(LocationImage);
  

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.subTitle}>
        <FormattedMessage id="SectionHowItWorksHost.titleLineTwo" />
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.iconContainer}>
            <img src={addImage} className={css.icon} />
          </div>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorksHost.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorksHost.part1Text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.iconContainer}>
            <img src={acceptImage} className={css.icon} />
          </div>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorksHost.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorksHost.part2Text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.iconContainer}>
            <img src={moneyImage} className={css.icon} />
          </div>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionHowItWorksHost.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorksHost.part3Text" />
          </p>
        </div>
      </div>
    </div>
  );
};

SectionHowItWorksHost.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorksHost.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorksHost;
