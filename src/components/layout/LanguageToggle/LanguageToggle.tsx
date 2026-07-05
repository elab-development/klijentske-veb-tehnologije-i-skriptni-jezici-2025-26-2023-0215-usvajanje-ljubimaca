import { useLanguage } from '../../../hooks/useLanguage';
import styles from './LanguageToggle.module.css';

export const LanguageToggle = (): JSX.Element => {
  const { t, toggleLanguage } = useLanguage();

  return (
    <button className={styles.toggle} onClick={toggleLanguage} aria-label="Toggle language">
      {t('lang.toggle')}
    </button>
  );
};
