import { Link, useNavigate } from 'react-router-dom';
import { useSignInContext } from '../../contexts/SignInContext';

export const LoginButton = () => {
  const { jwtToken, setJwtToken } = useSignInContext();
  const navigate = useNavigate();
  const onSignOut = () => {
    setJwtToken('');
    navigate('/log-in');
  };
  return jwtToken === '' ? (
    <Link to="/log-in">
      <span className="badge bg-success">Sign In</span>
    </Link>
  ) : (
    <span className="badge bg-success" onClick={onSignOut}>
      Sign Out
    </span>
  );
};
