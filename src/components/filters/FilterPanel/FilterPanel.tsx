import { useLanguage } from '../../../hooks/useLanguage';
import type { PetFilters, PetType, PetSize, PetAge, PetGender } from '../../../types';
import styles from './FilterPanel.module.css';

interface FilterOption<T> {
  value: T;
  labelKey: string;
}

const typeOptions: FilterOption<PetType>[] = [
  { value: 'dog', labelKey: 'pet.type.dog' },
  { value: 'cat', labelKey: 'pet.type.cat' },
  { value: 'bird', labelKey: 'pet.type.bird' },
  { value: 'rabbit', labelKey: 'pet.type.rabbit' },
];

const sizeOptions: FilterOption<PetSize>[] = [
  { value: 'small', labelKey: 'pet.size.small' },
  { value: 'medium', labelKey: 'pet.size.medium' },
  { value: 'large', labelKey: 'pet.size.large' },
];

const ageOptions: FilterOption<PetAge>[] = [
  { value: 'puppy', labelKey: 'pet.age.puppy' },
  { value: 'young', labelKey: 'pet.age.young' },
  { value: 'adult', labelKey: 'pet.age.adult' },
  { value: 'senior', labelKey: 'pet.age.senior' },
];

const genderOptions: FilterOption<PetGender>[] = [
  { value: 'male', labelKey: 'pet.gender.male' },
  { value: 'female', labelKey: 'pet.gender.female' },
];

interface FilterPanelProps {
  filters: PetFilters;
  onTypeChange: (value: PetType | null) => void;
  onSizeChange: (value: PetSize | null) => void;
  onAgeChange: (value: PetAge | null) => void;
  onGenderChange: (value: PetGender | null) => void;
  onClearAll: () => void;
  hasActiveFilters: boolean;
}

export const FilterPanel = ({
  filters,
  onTypeChange,
  onSizeChange,
  onAgeChange,
  onGenderChange,
  onClearAll,
  hasActiveFilters,
}: FilterPanelProps): JSX.Element => {
  const { t } = useLanguage();

  const toggleTypeFilter = (value: PetType): void => {
    onTypeChange(filters.type === value ? null : value);
  };

  const toggleSizeFilter = (value: PetSize): void => {
    onSizeChange(filters.size === value ? null : value);
  };

  const toggleAgeFilter = (value: PetAge): void => {
    onAgeChange(filters.age === value ? null : value);
  };

  const toggleGenderFilter = (value: PetGender): void => {
    onGenderChange(filters.gender === value ? null : value);
  };

  return (
    <aside className={styles.panel}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t('filter.title')}</h2>
        {hasActiveFilters && (
          <button className={styles.clearButton} onClick={onClearAll}>
            {t('filter.clear')}
          </button>
        )}
      </div>

      <div className={styles.group}>
        <p className={styles.groupTitle}>{t('filter.type')}</p>
        <div className={styles.options}>
          {typeOptions.map(({ value, labelKey }) => (
            <button
              key={value}
              className={`${styles.chip} ${filters.type === value ? styles.chipActive : ''}`}
              onClick={() => toggleTypeFilter(value)}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupTitle}>{t('filter.size')}</p>
        <div className={styles.options}>
          {sizeOptions.map(({ value, labelKey }) => (
            <button
              key={value}
              className={`${styles.chip} ${filters.size === value ? styles.chipActive : ''}`}
              onClick={() => toggleSizeFilter(value)}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupTitle}>{t('filter.age')}</p>
        <div className={styles.options}>
          {ageOptions.map(({ value, labelKey }) => (
            <button
              key={value}
              className={`${styles.chip} ${filters.age === value ? styles.chipActive : ''}`}
              onClick={() => toggleAgeFilter(value)}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupTitle}>{t('filter.gender')}</p>
        <div className={styles.options}>
          {genderOptions.map(({ value, labelKey }) => (
            <button
              key={value}
              className={`${styles.chip} ${filters.gender === value ? styles.chipActive : ''}`}
              onClick={() => toggleGenderFilter(value)}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
