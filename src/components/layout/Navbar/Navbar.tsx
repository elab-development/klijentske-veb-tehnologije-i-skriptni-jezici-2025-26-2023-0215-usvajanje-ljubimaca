import { Link, useLocation } from 'react-router-dom';
import { IconPaw } from '@tabler/icons-react';

import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import { useAuth } from '../../../hooks/useAuth';
import { useLanguage } from '../../../hooks/useLanguage';
import styles from './Navbar.module.css';

export const Navbar = (): JSX.Element => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  const { t } = useLanguage();

  const isActivePath = (path: string): boolean => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <IconPaw size={24} className={styles.logoIcon} />
          PetAdopt
        </Link>

        <div className={styles.links}>
          <Link
            to="/"
            className={`${styles.link} ${isActivePath('/') ? styles.linkActive : ''}`}
          >
            {t('nav.home')}
          </Link>
          <Link
            to="/browse"
            className={`${styles.link} ${isActivePath('/browse') ? styles.linkActive : ''}`}
          >
            {t('nav.browse')}
          </Link>

          {isAuthenticated ? (
            <Link
              to="/profile"
              className={`${styles.link} ${isActivePath('/profile') ? styles.linkActive : ''}`}
            >
              {user?.name}
            </Link>
          ) : (
            <Link to="/login" className={`${styles.link} ${styles.linkPrimary}`}>
              {t('nav.login')}
            </Link>
          )}

          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};
