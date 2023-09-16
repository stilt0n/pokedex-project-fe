import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export interface ISignInContext {
  jwtToken: string;
  setJwtToken: Dispatch<SetStateAction<string>>;
}

export const SignInContext = createContext<ISignInContext>({
  jwtToken: '',
  setJwtToken: () => {},
});

export const SignInProvider = ({ children }: { children?: ReactNode }) => {
  const [jwtToken, setJwtToken] = useState('');
  return (
    <SignInContext.Provider value={{ jwtToken, setJwtToken }}>
      {children}
    </SignInContext.Provider>
  );
};
