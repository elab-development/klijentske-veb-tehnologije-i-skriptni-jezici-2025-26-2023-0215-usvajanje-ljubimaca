import type { PetType, PetSize, PetAge, PetGender, PetTemperament, Language } from '../types';

/* Label maps used by components to display human-readable names.
   Each map provides translations for both supported languages. */

export const petTypeLabels: Record<PetType, Record<Language, string>> = {
  dog: { en: 'Dog', sr: 'Pas' },
  cat: { en: 'Cat', sr: 'Mačka' },
  bird: { en: 'Bird', sr: 'Ptica' },
  rabbit: { en: 'Rabbit', sr: 'Kunić' },
  other: { en: 'Other', sr: 'Ostalo' },
};

export const petAgeLabels: Record<PetAge, Record<Language, string>> = {
  puppy: { en: 'Puppy / Kitten', sr: 'Štene / Mače' },
  young: { en: 'Young', sr: 'Mlad' },
  adult: { en: 'Adult', sr: 'Odrastao' },
  senior: { en: 'Senior', sr: 'Stariji' },
};

export const petSizeLabels: Record<PetSize, Record<Language, string>> = {
  small: { en: 'Small', sr: 'Mali' },
  medium: { en: 'Medium', sr: 'Srednji' },
  large: { en: 'Large', sr: 'Veliki' },
};

export const petGenderLabels: Record<PetGender, Record<Language, string>> = {
  male: { en: 'Male', sr: 'Muški' },
  female: { en: 'Female', sr: 'Ženski' },
};

export const petTemperamentLabels: Record<PetTemperament, Record<Language, string>> = {
  calm: { en: 'Calm', sr: 'Miran' },
  playful: { en: 'Playful', sr: 'Razigran' },
  energetic: { en: 'Energetic', sr: 'Energičan' },
  shy: { en: 'Shy', sr: 'Plašljiv' },
  friendly: { en: 'Friendly', sr: 'Prijateljski' },
};

export const getPetTypeLabel = (type: PetType, language: Language): string =>
  petTypeLabels[type][language];

export const getPetAgeLabel = (age: PetAge, language: Language): string =>
  petAgeLabels[age][language];

export const getPetSizeLabel = (size: PetSize, language: Language): string =>
  petSizeLabels[size][language];

export const getPetGenderLabel = (gender: PetGender, language: Language): string =>
  petGenderLabels[gender][language];

export const getPetTemperamentLabel = (temperament: PetTemperament, language: Language): string =>
  petTemperamentLabels[temperament][language];
