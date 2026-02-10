import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HomePage = lazy(() => import('@/pages/HomePage'));
const CompanyPage = lazy(() => import('@/pages/CompanyPage'));
const CategoryPage = lazy(() => import('@/pages/CategoryPage'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const BlogIndex = lazy(() => import('@/pages/Blog').then(m => ({ default: m.BlogIndex })));
const BlogPostPage = lazy(() => import('@/pages/Blog').then(m => ({ default: m.BlogPostPage })));
const AdminLayout = lazy(() => import('@/layouts/AdminLayout'));
const Dashboard = lazy(() => import('@/pages/admin/Dashboard'));
const CompaniesAdmin = lazy(() => import('@/pages/admin/CompaniesAdmin'));
const CategoriesAdmin = lazy(() => import('@/pages/admin/CategoriesAdmin'));
const PostsAdmin = lazy(() => import('@/pages/admin/PostsAdmin'));
const UsersAdmin = lazy(() => import('@/pages/admin/UsersAdmin'));
const SettingsAdmin = lazy(() => import('@/pages/admin/SettingsAdmin'));

function Loading() {
  return <div className="flex items-center justify-center py-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
          <Route path="/company/:slug" element={<><Header /><CompanyPage /><Footer /></>} />
          <Route path="/category/:slug" element={<><Header /><CategoryPage /><Footer /></>} />
          <Route path="/search" element={<><Header /><SearchPage /><Footer /></>} />
          <Route path="/blog" element={<><Header /><BlogIndex /><Footer /></>} />
          <Route path="/blog/:slug" element={<><Header /><BlogPostPage /><Footer /></>} />
          <Route path="/about" element={<><Header /><About /><Footer /></>} />
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="companies" element={<CompaniesAdmin />} />
            <Route path="categories" element={<CategoriesAdmin />} />
            <Route path="posts" element={<PostsAdmin />} />
            <Route path="users" element={<UsersAdmin />} />
            <Route path="settings" element={<SettingsAdmin />} />
          </Route>
          <Route path="*" element={<><Header /><NotFound /><Footer /></>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
