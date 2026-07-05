import { useState, useMemo } from 'react';

import { PetCard } from '../../components/ui/PetCard/PetCard';
import { FilterPanel } from '../../components/filters/FilterPanel/FilterPanel';
import { SearchBar } from '../../components/filters/SearchBar/SearchBar';
import { useFilters } from '../../hooks/useFilters';
import { useLanguage } from '../../hooks/useLanguage';
import { mockPets } from '../../data/pets';
import type { Pet } from '../../types';
import styles from './Browse.module.css';

const filterPets = (pets: Pet[], query: string, filters: ReturnType<typeof useFilters>['filters']): Pet[] =>
  pets.filter((pet) => {
    const matchesSearch =
      query === '' ||
      pet.name.toLowerCase().includes(query.toLowerCase()) ||
      pet.breed.toLowerCase().includes(query.toLowerCase());

    const matchesType = filters.type === null || pet.type === filters.type;
    const matchesSize = filters.size === null || pet.size === filters.size;
    const matchesAge = filters.age === null || pet.age === filters.age;
    const matchesGender = filters.gender === null || pet.gender === filters.gender;

    return matchesSearch && matchesType && matchesSize && matchesAge && matchesGender;
  });

export const Browse = (): JSX.Element => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const { filters, setTypeFilter, setSizeFilter, setAgeFilter, setGenderFilter, clearAllFilters, hasActiveFilters } =
    useFilters();

  const filteredPets = useMemo(
    () => filterPets(mockPets, searchQuery, filters),
    [searchQuery, filters]
  );

  const resultLabel =
    filteredPets.length === 1 ? t('browse.results') : t('browse.results_plural');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{t('browse.title')}</h1>

      <div className={styles.layout}>
        <FilterPanel
          filters={filters}
          onTypeChange={setTypeFilter}
          onSizeChange={setSizeFilter}
          onAgeChange={setAgeFilter}
          onGenderChange={setGenderFilter}
          onClearAll={clearAllFilters}
          hasActiveFilters={hasActiveFilters}
        />

        <div className={styles.main}>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <p className={styles.resultsCount}>
            {filteredPets.length} {resultLabel}
          </p>

          {filteredPets.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🐾</div>
              <p>{t('browse.noResults')}</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {filteredPets.map((pet) => (
                <PetCard key={pet.identifier} pet={pet} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
