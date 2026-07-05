import { useLanguage } from '../../../hooks/useLanguage';
import styles from './StatBar.module.css';

interface StatItem {
  count: number;
  translationKey: string;
}

interface StatBarProps {
  stats: StatItem[];
}

export const StatBar = ({ stats }: StatBarProps): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div className={styles.bar}>
      {stats.map((stat) => (
        <div key={stat.translationKey} className={styles.item}>
          <span className={styles.number}>{stat.count}</span>
          <span className={styles.label}>{t(stat.translationKey)}</span>
        </div>
      ))}
    </div>
  );
};
