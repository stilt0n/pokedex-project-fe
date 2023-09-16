import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { LoginButton } from './components/LoginButton';
import { Alert } from './components/Alert';
import { useSignInContext } from './contexts/SignInContext';
import { AlertContext } from './components/SignIn';

const NavBar = ({ jwtToken }: { jwtToken: string }) => (
  <nav>
    <div className="list-group">
      <Link to="/" className="list-group-item list-group-item-action">
        Home
      </Link>
      <Link to="/pokemon" className="list-group-item list-group-item-action">
        Pokemon
      </Link>
      <Link to="/types" className="list-group-item list-group-item-action">
        Types
      </Link>
      {jwtToken === '' ? null : (
        <>
          <Link
            to="/admin/pokemon/0"
            className="list-group-item list-group-item-action"
          >
            Add pokemon
          </Link>
          <Link to="/admin" className="list-group-item list-group-item-action">
            Manage pokedex
          </Link>
          <Link
            to="/graphql"
            className="list-group-item list-group-item-action"
          >
            GraphQL
          </Link>
        </>
      )}
    </div>
  </nav>
);

const App = () => {
  const { jwtToken } = useSignInContext();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertClassName, setAlertClassName] = useState('d-none');
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Pokedex</h1>
        </div>
        <div className="col text-end">
          <LoginButton />
        </div>
        <hr className="md-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <NavBar jwtToken={jwtToken} />
        </div>
        <div className="col-md-10">
          <Alert message={alertMessage} className={alertClassName} />
          <Outlet
            context={
              {
                setAlertMessage,
                setAlertClassName,
              } satisfies AlertContext
            }
          />
        </div>
      </div>
    </div>
  );
};

export default App;
