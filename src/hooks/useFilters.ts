import { useState, useCallback } from 'react';

import type { PetFilters, PetType, PetSize, PetAge, PetGender } from '../types';

const emptyFilters: PetFilters = {
  type: null,
  size: null,
  age: null,
  gender: null,
};

interface UseFiltersReturn {
  filters: PetFilters;
  setTypeFilter: (value: PetType | null) => void;
  setSizeFilter: (value: PetSize | null) => void;
  setAgeFilter: (value: PetAge | null) => void;
  setGenderFilter: (value: PetGender | null) => void;
  clearAllFilters: () => void;
  hasActiveFilters: boolean;
}

export const useFilters = (): UseFiltersReturn => {
  const [filters, setFilters] = useState<PetFilters>(emptyFilters);

  const setTypeFilter = useCallback((value: PetType | null): void => {
    setFilters((previous) => ({ ...previous, type: value }));
  }, []);

  const setSizeFilter = useCallback((value: PetSize | null): void => {
    setFilters((previous) => ({ ...previous, size: value }));
  }, []);

  const setAgeFilter = useCallback((value: PetAge | null): void => {
    setFilters((previous) => ({ ...previous, age: value }));
  }, []);

  const setGenderFilter = useCallback((value: PetGender | null): void => {
    setFilters((previous) => ({ ...previous, gender: value }));
  }, []);

  const clearAllFilters = useCallback((): void => {
    setFilters(emptyFilters);
  }, []);

  const hasActiveFilters =
    filters.type !== null ||
    filters.size !== null ||
    filters.age !== null ||
    filters.gender !== null;

  return {
    filters,
    setTypeFilter,
    setSizeFilter,
    setAgeFilter,
    setGenderFilter,
    clearAllFilters,
    hasActiveFilters,
  };
};
