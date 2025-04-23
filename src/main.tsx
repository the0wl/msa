import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource-variable/inter';
import '@fontsource/jetbrains-mono/400.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts';
import { AuthGate } from './components/auth-gate';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AuthGate>
          <App />
        </AuthGate>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
