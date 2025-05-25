import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-semibold mt-4 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;