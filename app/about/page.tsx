export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About NapBlog</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Welcome to NapBlog, your go-to resource for insightful articles about web development,
          design, and modern technology.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We believe in sharing knowledge and helping developers at all skill levels grow
            their expertise. Our mission is to provide high-quality, practical content that
            developers can apply immediately to their projects.
          </p>
          <p className="text-gray-700">
            Whether you're just starting your journey in web development or you're a seasoned
            professional looking to stay updated with the latest trends, NapBlog has something
            for you.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Cover</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Web Development</h3>
              <p className="text-gray-600">
                From React and Next.js to Node.js and modern JavaScript, we cover the full
                spectrum of web development technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Design</h3>
              <p className="text-gray-600">
                Learn about UI/UX principles, CSS techniques, and creating beautiful,
                functional interfaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Best Practices</h3>
              <p className="text-gray-600">
                Discover coding standards, architectural patterns, and techniques to write
                maintainable, scalable code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Technology Trends</h3>
              <p className="text-gray-600">
                Stay up-to-date with the latest trends and emerging technologies shaping
                the future of web development.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-700 mb-6">
            Our content is created by experienced developers and designers who are passionate
            about sharing their knowledge with the community.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3">
                S
              </div>
              <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-gray-600 text-sm">Web Development Expert</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3">
                M
              </div>
              <h3 className="font-semibold text-gray-900">Michael Chen</h3>
              <p className="text-gray-600 text-sm">UI/UX Designer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3">
                E
              </div>
              <h3 className="font-semibold text-gray-900">Emma Wilson</h3>
              <p className="text-gray-600 text-sm">TypeScript Specialist</p>
            </div>
          </div>
        </section>

        <section className="bg-indigo-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-4">
            We're more than just a blog—we're a community of developers helping each other
            grow and succeed.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  )
}
