'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cx from 'classnames';

function NavLinks() {
  const pathname = usePathname();

  const homeBtnClassname = cx('navLinks__item', {
    'navLinks__item--active': pathname === '/' ? 'active' : '',
  });
  const pressReleasesBtnClassname = cx('navLinks__item', {
    'navLinks__item--active': pathname === '/pressReleases' ? 'active' : '',
  });

  return (
    <nav className="navLinks">
      <Link className={homeBtnClassname} href="/">
        Home
      </Link>

      <Link className={pressReleasesBtnClassname} href="/pressReleases">
        Press releases
      </Link>
    </nav>
  );
}

export default NavLinks;
