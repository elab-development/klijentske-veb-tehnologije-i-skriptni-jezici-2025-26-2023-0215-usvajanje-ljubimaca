import { createContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

import type { User } from '../types';

interface AuthContextValue {
  user: User | null;
  login: (email: string, name: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((email: string, name: string): void => {
    setUser({ email, name });
  }, []);

  const logout = useCallback((): void => {
    setUser(null);
  }, []);

  const contextValue: AuthContextValue = {
    user,
    login,
    logout,
    isAuthenticated: user !== null,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
