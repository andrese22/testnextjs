import React from 'react';
import PropTypes from 'prop-types';

import NavLinks from '@/app/nav';

import '@/assets/styles/styles.scss';

const propTypes = {
  children: PropTypes.object.isRequired,
};

function RootLayout(props) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <main>
          <NavLinks />
          {children}
        </main>
      </body>
    </html>
  );
}

RootLayout.propTypes = propTypes;

export default RootLayout;
