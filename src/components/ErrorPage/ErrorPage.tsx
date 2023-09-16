import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  const message =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((error as any).statusText as string | undefined) ||
    (error as Error).message ||
    String(error);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-3">Looks like you're lost!</h1>
          <p>
            <em>{message}</em>
          </p>
        </div>
      </div>
    </div>
  );
};
