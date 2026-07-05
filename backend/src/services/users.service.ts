/* Business logic for user profile operations.
   Called by users.controller.ts — no Express types here. */

export const getUserProfile = async (_userId: string): Promise<unknown> => {
  return {};
};

export const getUserSavedPets = async (_userId: string): Promise<unknown[]> => {
  return [];
};

export const toggleUserSavedPet = async (_userId: string, _petId: string): Promise<void> => {
  /* empty */
};
