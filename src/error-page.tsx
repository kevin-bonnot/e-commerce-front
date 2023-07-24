import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  console.error(error);

  return <div>
    <h1>Oops</h1>
    <p>Désolé, cette page n'existe pas</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>;
};

export default ErrorPage;
