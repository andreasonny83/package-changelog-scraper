import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Something went wrong 😢</p>
      <p>{isRouteErrorResponse(error) && <i>{error?.data}</i>}</p>
      <button onClick={() => navigate('/', { replace: true })}>Go To Homepage</button>
    </div>
  );
};
