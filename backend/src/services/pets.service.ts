/* Business logic for pet operations.
   Called by pets.controller.ts — no Express types here. */

export const findAllPets = async (): Promise<unknown[]> => {
  return [];
};

export const findPetById = async (_petId: string): Promise<unknown | null> => {
  return null;
};

export const createNewPet = async (_petData: unknown): Promise<unknown> => {
  return {};
};

export const removePet = async (_petId: string): Promise<void> => {
  /* empty */
};
