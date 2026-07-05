/* =========================================
   Shared TypeScript interfaces for PetAdopt
   ========================================= */

export type Language = 'en' | 'sr';

export type PetType = 'dog' | 'cat' | 'bird' | 'rabbit' | 'other';
export type PetSize = 'small' | 'medium' | 'large';
export type PetAge = 'puppy' | 'young' | 'adult' | 'senior';
export type PetGender = 'male' | 'female';
export type PetTemperament = 'calm' | 'playful' | 'energetic' | 'shy' | 'friendly';

export interface Pet {
  identifier: string;
  name: string;
  type: PetType;
  breed: string;
  location: string;
  age: PetAge;
  size: PetSize;
  gender: PetGender;
  temperament: PetTemperament[];
  description: string;
  isVaccinated: boolean;
  imageUrl: string;
  ownerName: string;
  createdAt: string;
}

export interface User {
  name: string;
  email: string;
}

export interface PetFilters {
  type: PetType | null;
  size: PetSize | null;
  age: PetAge | null;
  gender: PetGender | null;
}

export interface Translation {
  [key: string]: string;
}
