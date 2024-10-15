import { Outlet, Form, useNavigation } from 'react-router-dom';

export const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Package Changelog Scraper</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">A simple package changelog scraper</p>
      </div>
      <Form method="POST" id="package-form" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="package-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Package name
            </label>
            <div className="mt-2.5">
              <input
                id="package-name"
                name="packageName"
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={navigation.state === 'loading'}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {navigation.state === 'loading' ? 'Loading...' : 'Search'}
          </button>
        </div>
      </Form>
      <div id="detail" className={`mt-16 text-center ${navigation.state === 'loading' ? 'loading' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};
