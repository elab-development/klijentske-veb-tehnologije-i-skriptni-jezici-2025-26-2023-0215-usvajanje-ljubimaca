import { IconSearch } from '@tabler/icons-react';

import { useLanguage } from '../../../hooks/useLanguage';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      <IconSearch size={18} className={styles.icon} />
      <input
        type="search"
        className={styles.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={t('browse.searchPlaceholder')}
        aria-label={t('browse.searchPlaceholder')}
      />
    </div>
  );
};
