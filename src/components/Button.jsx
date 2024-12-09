import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  isBottom: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Button(props) {
  const { isBottom, title, onClick } = props;

  const className = cx('button', {
    'button--bottom': isBottom,
  });

  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
