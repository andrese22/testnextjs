'use client';

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';

import ButtonContainer from '@/containers/ButtonContainer';

const propTypes = {
  children: PropTypes.object.isRequired,
};

function AppPage(props) {
  const { children } = props;
  const router = useRouter();

  const handleOnClick = useCallback(() => {
    router.push('pressReleases');
  }, []);

  return (
    <article className="page">
      <hgroup>
        <h1>Test assignemnt</h1>
        <p>
          A component that fetches press releases listings from a public API and displays them
          with a &#34;Load More&#34; functionality. When clicking on the title of the press
          release a new page has to open with detailed text information (description) about
          current press release.
        </p>
      </hgroup>
      <ButtonContainer title="Show list" onClick={handleOnClick} />
      {children}
    </article>
  );
}

AppPage.propTypes = propTypes;

export default AppPage;
