import styles from './TagBadge.module.css';

type TagVariant = 'primary' | 'muted' | 'accent';

interface TagBadgeProps {
  label: string;
  variant?: TagVariant;
}

export const TagBadge = ({ label, variant = 'muted' }: TagBadgeProps): JSX.Element => {
  return <span className={`${styles.badge} ${styles[variant]}`}>{label}</span>;
};
