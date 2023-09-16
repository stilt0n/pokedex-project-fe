import { useContext } from 'react';
import { SignInContext } from './SignInProvider';

export const useSignInContext = () => {
  const signInContext = useContext(SignInContext);
  return signInContext;
};
