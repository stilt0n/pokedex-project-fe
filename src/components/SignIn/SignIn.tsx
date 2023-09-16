import { useState, FormEventHandler } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { AlertContext } from './types';
import { Input } from '../Form/Input';
import { useSignInContext } from '../../contexts/SignInContext';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAlertClassName, setAlertMessage } =
    useOutletContext<AlertContext>();
  const { setJwtToken } = useSignInContext();
  const navigate = useNavigate();
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // Mock sign-in
    if (email === 'admin@example.com') {
      setJwtToken('admin');
      setAlertClassName('d-none');
      setAlertMessage('');
      navigate('/');
    } else {
      setAlertClassName('alert-danger');
      setAlertMessage('Invalid Credentials');
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Sign In</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autoComplete="password-new"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <hr />
        <input type="submit" className="btn btn-primary" value="Sign In" />
      </form>
    </div>
  );
};
