import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionHowItWorks.css';

import searchImage from './images/Search.png';
import bookImage from './images/Book.png';
import enjoyImage from './images/Enjoy.png';

const SectionHowItWorks = props => {
  const { rootClassName, className, listings } = props;
  

  class LocationImage extends Component {
    render() {
      const { alt, ...rest } = this.props;
      return <img alt={alt} {...rest} />;
    }
  }
  const LazyImage = lazyLoadWithDimensions(LocationImage);
  

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div>-{listings}-</div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
