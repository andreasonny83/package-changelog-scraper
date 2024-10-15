import { useLoaderData } from 'react-router-dom';

export const Package = () => {
  const packageId = useLoaderData() as string;

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {packageId || 'No package name provided'}
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    </>
  );
};
