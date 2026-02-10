import { Link, useParams } from 'react-router-dom';
import { blogPosts, BlogPost } from '@/data/companies';
import SEO from '@/components/SEO';

export function BlogIndex() {
  return (
    <>
      <SEO title="Customer Service Tips & Guides - DialHelper Blog" description="Expert tips on reaching customer service faster." />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog — Tips & Guides</h1>
        <div className="space-y-4">
          {blogPosts.map((p: BlogPost) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-medium uppercase">{p.category}</span>
              <h2 className="font-semibold text-gray-900 text-lg mt-1">{p.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{p.excerpt}</p>
              <span className="text-xs text-gray-400 mt-2 block">{p.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p: BlogPost) => p.slug === slug);
  if (!post) return <div className="max-w-3xl mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Post not found</h1></div>;
  return (
    <>
      <SEO title={`${post.title} - DialHelper`} description={post.excerpt} />
      <article className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6"><Link to="/" className="hover:text-primary">Home</Link> / <Link to="/blog" className="hover:text-primary">Blog</Link> / <span className="text-gray-900">{post.title}</span></nav>
        <span className="text-xs text-accent font-medium uppercase">{post.category}</span>
        <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{post.date}</p>
        <p className="text-lg text-gray-600 mb-4">{post.excerpt}</p>
        <p className="text-gray-700">{post.content}</p>
      </article>
    </>
  );
}
