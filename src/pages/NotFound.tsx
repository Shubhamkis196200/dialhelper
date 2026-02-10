import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-primary font-medium hover:underline">← Back to Home</Link>
    </div>
  );
}
