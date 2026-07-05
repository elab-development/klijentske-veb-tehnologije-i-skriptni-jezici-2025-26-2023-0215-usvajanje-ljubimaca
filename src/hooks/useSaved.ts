import { useContext } from 'react';

import { SavedContext } from '../context/SavedContext';

interface UseSavedReturn {
  savedPetIdentifiers: string[];
  toggleSave: (petIdentifier: string) => void;
  isPetSaved: (petIdentifier: string) => boolean;
  savedCount: number;
}

export const useSaved = (): UseSavedReturn => {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSaved must be used inside a SavedProvider');
  }
  return context;
};
