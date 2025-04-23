import React from 'react'

type Data = {
  token: string
}

type SignInData = {
  username: string
  password: string
}

type UserContextType = {
  data: Data | null
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
  error: string
  isLoading: boolean
}

type UserProviderProps = { children: React.ReactNode }

export const UserContext = React.createContext({} as UserContextType);

function getCookie(name: string): string | undefined {
  const cookies = document.cookie
    .split('; ')
    .reduce((acc: Record<string, string>, cookie) => {
      const [key, value] = cookie.split('=')
      acc[key] = decodeURIComponent(value)
      return acc
    }, {})

  return cookies[name]
}

export function UserProvider({ children }: UserProviderProps) {
  const [data, setData] = React.useState<Data | null>(null)
  const [error, setError] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const isAuthenticated = !!data;

  React.useEffect(() => {
    setError('')
    const token = getCookie('my.super.app.access_token');

    if (!token) {
      setIsLoading(false);
    } else if (!isAuthenticated) {
      setTimeout(() => {
        setData({ token });
        setIsLoading(false);
      }, 500);
    }
  }, [])

  async function signIn({ username, password }: SignInData) {
    setError('')
    setData({ token: 'teste' })
  }

  return (
    <UserContext.Provider value={{ data, isAuthenticated, signIn, error, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}