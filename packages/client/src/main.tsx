import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, ActionFunction, redirect, LoaderFunction } from 'react-router-dom';
import { ErrorPage } from './routes/ErrorPage';
import { Root } from './routes/Root';
import { Package } from './routes/Package';
import axios from 'axios';
import './index.css';

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const packageName = formData.get('packageName');

  return redirect(`/packages/${packageName}`);
};

const loader: LoaderFunction = async ({ params }) => {
  const res = await axios.post('http://localhost:3000', { packageId: params.packageId });
  return res.data;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    action,
    children: [
      {
        loader,
        path: 'packages/:packageId',
        element: <Package />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<div>App is loading...</div>} />
  </StrictMode>
);
