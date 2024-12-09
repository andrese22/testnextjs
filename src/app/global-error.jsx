'use client';

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.string.isRequired,
};

function Error(props) {
  const { message } = props;

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{message}</p>
      </body>
    </html>
  );
}

Error.propTypes = propTypes;

export default Error;
