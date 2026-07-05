import { createContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

interface SavedContextValue {
  savedPetIdentifiers: string[];
  toggleSave: (petIdentifier: string) => void;
  isPetSaved: (petIdentifier: string) => boolean;
  savedCount: number;
}

export const SavedContext = createContext<SavedContextValue | null>(null);

interface SavedProviderProps {
  children: ReactNode;
}

export const SavedProvider = ({ children }: SavedProviderProps): JSX.Element => {
  const [savedPetIdentifiers, setSavedPetIdentifiers] = useState<string[]>([]);

  const toggleSave = useCallback((petIdentifier: string): void => {
    setSavedPetIdentifiers((previous) => {
      const isAlreadySaved = previous.includes(petIdentifier);
      return isAlreadySaved
        ? previous.filter((id) => id !== petIdentifier)
        : [...previous, petIdentifier];
    });
  }, []);

  const isPetSaved = useCallback(
    (petIdentifier: string): boolean => savedPetIdentifiers.includes(petIdentifier),
    [savedPetIdentifiers]
  );

  const contextValue: SavedContextValue = {
    savedPetIdentifiers,
    toggleSave,
    isPetSaved,
    savedCount: savedPetIdentifiers.length,
  };

  return <SavedContext.Provider value={contextValue}>{children}</SavedContext.Provider>;
};
