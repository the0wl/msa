import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../contexts';
import { useLocation, Navigate } from 'react-router-dom';

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useContext(UserContext);
  const location = useLocation();

  if (isLoading) {
    return <div>Carregando autenticação...</div>;
  }

  const isOnLogin = location.pathname === '/login';

  if (!isAuthenticated && !isOnLogin) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && isOnLogin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
