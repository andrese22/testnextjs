import React from 'react';
import PropTypes from 'prop-types';

import Button from '@/components/Button';

const propTypes = {
  isBottom: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function ButtonContainer(props) {
  const { isBottom, title, onClick } = props;

  return <Button isBottom={isBottom} title={title} onClick={onClick} />;
}

ButtonContainer.propTypes = propTypes;

ButtonContainer.defaultProps = {
  isBottom: false,
};

export default ButtonContainer;
