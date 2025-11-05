import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with Next.js 14 and the App Router. Explore server components, streaming, and more.",
    date: "2025-01-15",
    author: "Sarah Johnson",
    category: "Web Development",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Art of Minimalist Design",
    excerpt: "Discover the principles of minimalist design and how to apply them to create beautiful, functional interfaces.",
    date: "2025-01-10",
    author: "Michael Chen",
    category: "Design",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "TypeScript Best Practices in 2025",
    excerpt: "Explore the latest TypeScript best practices and patterns to write more maintainable and type-safe code.",
    date: "2025-01-05",
    author: "Emma Wilson",
    category: "Programming",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Building Scalable APIs with Node.js",
    excerpt: "A comprehensive guide to building scalable, performant APIs using Node.js and modern best practices.",
    date: "2024-12-28",
    author: "David Martinez",
    category: "Backend",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "The Future of Web Development",
    excerpt: "What trends and technologies will shape web development in the coming years? Let's explore the possibilities.",
    date: "2024-12-20",
    author: "Lisa Anderson",
    category: "Technology",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "Learn when to use CSS Grid versus Flexbox and how to combine them for powerful layout solutions.",
    date: "2024-12-15",
    author: "Alex Thompson",
    category: "CSS",
    readTime: "6 min read"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-5xl font-bold mb-4">Welcome to NapBlog</h1>
          <p className="text-xl mb-8 text-indigo-100">
            Discover insightful articles about web development, design, and technology
          </p>
          <div className="flex gap-4">
            <a
              href="#posts"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              Read Articles
            </a>
            <a
              href="/about"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div id="posts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
          <p className="text-gray-600">Stay updated with our latest thoughts and tutorials</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <span className="ml-2 text-sm text-gray-700">{post.author}</span>
                  </div>
                  <time className="text-sm text-gray-500">{post.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-indigo-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest articles delivered directly to your inbox
            </p>
            <form className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
