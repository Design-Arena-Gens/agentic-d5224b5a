interface BlogPostData {
  id: number
  title: string
  content: string
  date: string
  author: string
  category: string
  readTime: string
}

const blogPostsData: Record<number, BlogPostData> = {
  1: {
    id: 1,
    title: "Getting Started with Next.js 14",
    content: `
Next.js 14 represents a significant milestone in the evolution of React-based web development. With the introduction of the App Router, developers now have access to powerful features that make building modern web applications more efficient and enjoyable.

## What's New in Next.js 14

The latest version of Next.js brings several exciting features:

### Server Components by Default

Server Components are now the default in Next.js 14. This means better performance, smaller bundle sizes, and improved user experience out of the box. You can now fetch data directly in your components without the need for additional API routes.

### Improved Streaming

Streaming has been enhanced to provide even better loading experiences. With React Suspense boundaries, you can progressively render your UI and show loading states exactly where you need them.

### Partial Prerendering

One of the most exciting features is Partial Prerendering, which combines the benefits of static and dynamic rendering. Your pages can be partially static while still supporting dynamic content.

## Getting Started

To create a new Next.js 14 project, simply run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

Then navigate to your project and start the development server:

\`\`\`bash
cd my-app
npm run dev
\`\`\`

## Building Your First Component

Here's a simple server component example:

\`\`\`tsx
export default async function BlogPost() {
  const posts = await fetch('https://api.example.com/posts')
  const data = await posts.json()

  return (
    <div>
      {data.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
\`\`\`

## Conclusion

Next.js 14 makes it easier than ever to build fast, modern web applications. Whether you're building a simple blog or a complex web application, Next.js provides the tools you need to succeed.
    `,
    date: "2025-01-15",
    author: "Sarah Johnson",
    category: "Web Development",
    readTime: "5 min read"
  },
  2: {
    id: 2,
    title: "The Art of Minimalist Design",
    content: `
In a world of constant digital noise, minimalist design has emerged as a powerful approach to creating meaningful, user-friendly experiences. But what exactly makes design "minimalist," and how can we apply these principles effectively?

## Understanding Minimalism

Minimalism isn't about removing features or making things sparse for the sake of it. It's about intentionality—keeping only what serves a purpose and removing what doesn't.

### The Core Principles

1. **Simplicity**: Remove unnecessary elements that don't serve the user's goals
2. **Clarity**: Make it obvious what users should do and where they should focus
3. **Hierarchy**: Use visual weight to guide attention to the most important elements
4. **White Space**: Give elements room to breathe and create visual balance

## Applying Minimalism in Practice

### Color Palette

Start with a limited color palette. Often, you only need:
- One primary brand color
- One or two accent colors
- A grayscale palette for text and backgrounds

### Typography

Good typography is essential in minimalist design. With fewer visual elements, your text needs to work harder:
- Use no more than 2-3 typefaces
- Establish a clear type scale
- Pay attention to line height and letter spacing

### Layout

Clean layouts with clear structure help users navigate your content:
- Use a consistent grid system
- Align elements to create visual harmony
- Leave generous margins and padding

## Common Mistakes to Avoid

1. **Confusing minimalism with boring**: Minimalist doesn't mean lifeless
2. **Removing too much**: Don't sacrifice usability for aesthetics
3. **Ignoring accessibility**: Ensure sufficient contrast and text sizes

## Real-World Examples

Some of the best minimalist designs come from companies like Apple, Dropbox, and Medium. They prove that minimalism can be both beautiful and highly functional.

## Conclusion

Minimalist design is a powerful tool when applied thoughtfully. It's not about following trends, but about creating experiences that respect your users' time and attention.
    `,
    date: "2025-01-10",
    author: "Michael Chen",
    category: "Design",
    readTime: "7 min read"
  },
  3: {
    id: 3,
    title: "TypeScript Best Practices in 2025",
    content: `
TypeScript has become the de facto standard for building large-scale JavaScript applications. As the language evolves, so do the best practices for using it effectively.

## Type Safety First

The whole point of TypeScript is type safety. Embrace it fully:

### Avoid \`any\`

The \`any\` type defeats the purpose of TypeScript. Instead:

\`\`\`typescript
// Bad
function process(data: any) {
  return data.value
}

// Good
function process(data: { value: string }) {
  return data.value
}
\`\`\`

### Use \`unknown\` for Uncertain Types

When you truly don't know the type, use \`unknown\` instead of \`any\`:

\`\`\`typescript
function handleInput(input: unknown) {
  if (typeof input === 'string') {
    console.log(input.toUpperCase())
  }
}
\`\`\`

## Leverage Modern TypeScript Features

### Template Literal Types

Create more expressive types:

\`\`\`typescript
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type Endpoint = \`/api/\${string}\`

type ApiRequest = {
  method: HttpMethod
  endpoint: Endpoint
}
\`\`\`

### Satisfies Operator

Ensure objects match a type without widening:

\`\`\`typescript
type Colors = 'red' | 'green' | 'blue'

const palette = {
  primary: 'red',
  secondary: 'blue'
} satisfies Record<string, Colors>
\`\`\`

## Organize Your Types

### Create a Types Directory

Keep types organized and reusable:

\`\`\`
src/
  types/
    user.ts
    api.ts
    common.ts
\`\`\`

### Use Type vs Interface Appropriately

- Use \`type\` for unions, intersections, and utilities
- Use \`interface\` for object shapes that might be extended

## Error Handling

Use discriminated unions for error handling:

\`\`\`typescript
type Result<T, E> =
  | { success: true; data: T }
  | { success: false; error: E }

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return { success: false, error: 'Division by zero' }
  }
  return { success: true, data: a / b }
}
\`\`\`

## Conclusion

TypeScript is a powerful tool that becomes even more valuable when used with best practices. Keep learning and stay updated with the latest features!
    `,
    date: "2025-01-05",
    author: "Emma Wilson",
    category: "Programming",
    readTime: "6 min read"
  },
  4: {
    id: 4,
    title: "Building Scalable APIs with Node.js",
    content: `
Building APIs that can scale from a handful of users to millions requires careful planning and the right architectural decisions from the start.

## Architecture Patterns

### Layered Architecture

Organize your code into clear layers:

1. **Routes**: Handle HTTP requests and responses
2. **Controllers**: Business logic coordination
3. **Services**: Core business logic
4. **Models**: Data access layer

\`\`\`javascript
// routes/users.js
router.post('/users', userController.createUser)

// controllers/userController.js
async function createUser(req, res) {
  const user = await userService.create(req.body)
  res.json(user)
}

// services/userService.js
async function create(userData) {
  return await User.create(userData)
}
\`\`\`

## Performance Optimization

### Database Indexing

Proper indexing is crucial for performance:

\`\`\`javascript
// Create indexes on frequently queried fields
await db.collection('users').createIndex({ email: 1 }, { unique: true })
await db.collection('posts').createIndex({ userId: 1, createdAt: -1 })
\`\`\`

### Caching Strategy

Implement caching at multiple levels:

\`\`\`javascript
const redis = require('redis')
const client = redis.createClient()

async function getUser(id) {
  // Try cache first
  const cached = await client.get(\`user:\${id}\`)
  if (cached) return JSON.parse(cached)

  // Fetch from database
  const user = await User.findById(id)

  // Cache for 1 hour
  await client.setex(\`user:\${id}\`, 3600, JSON.stringify(user))

  return user
}
\`\`\`

## Error Handling

Implement centralized error handling:

\`\`\`javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true
  }
}

app.use((err, req, res, next) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      error: err.message
    })
  }

  // Log unexpected errors
  console.error(err)
  res.status(500).json({ error: 'Something went wrong' })
})
\`\`\`

## Security Best Practices

### Rate Limiting

Protect your API from abuse:

\`\`\`javascript
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

app.use('/api/', limiter)
\`\`\`

### Input Validation

Always validate user input:

\`\`\`javascript
const { body, validationResult } = require('express-validator')

app.post('/users',
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    // Process request
  }
)
\`\`\`

## Monitoring and Logging

Use structured logging:

\`\`\`javascript
const winston = require('winston')

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

logger.info('User created', { userId: user.id, email: user.email })
\`\`\`

## Conclusion

Building scalable APIs requires attention to architecture, performance, security, and monitoring. Start with solid foundations and iterate based on real-world usage patterns.
    `,
    date: "2024-12-28",
    author: "David Martinez",
    category: "Backend",
    readTime: "8 min read"
  },
  5: {
    id: 5,
    title: "The Future of Web Development",
    content: `
Web development is evolving at a rapid pace. Let's explore the trends and technologies that are shaping the future of how we build for the web.

## Edge Computing

Moving computation closer to users is becoming the new normal.

### Benefits of Edge Computing

- **Lower Latency**: Response times measured in milliseconds
- **Better Performance**: Content delivered from nearby servers
- **Improved Privacy**: Data processed closer to its source

Platforms like Vercel Edge Functions and Cloudflare Workers are making edge computing accessible to all developers.

## AI-Powered Development

AI is changing how we write code:

### Code Assistance

Tools like GitHub Copilot and ChatGPT are helping developers:
- Write boilerplate code faster
- Debug issues more quickly
- Learn new technologies

### AI in User Interfaces

- Personalized user experiences
- Smart search and recommendations
- Natural language interfaces

## WebAssembly Growth

WebAssembly (Wasm) is enabling new possibilities:

- Running high-performance code in browsers
- Porting existing applications to the web
- Using languages like Rust, Go, and C++ for web development

## The Rise of Meta-Frameworks

Frameworks built on top of React, Vue, and others are becoming the standard:

- **Next.js**: The React meta-framework
- **Nuxt**: The Vue equivalent
- **SvelteKit**: Built on Svelte

These frameworks handle routing, data fetching, and deployment, letting developers focus on building features.

## Improved Developer Experience

### Type Safety Everywhere

TypeScript adoption continues to grow. Even traditionally JavaScript-only tools are adding TypeScript support.

### Better Tooling

- Faster build tools (Vite, Turbopack)
- Improved debugging experiences
- Better IDE support

## Serverless Architecture

Serverless continues to mature:

- Pay only for what you use
- Automatic scaling
- Reduced operational overhead

## Web Platform Features

The web platform itself is getting more powerful:

- **Container Queries**: Responsive design based on container size
- **View Transitions API**: Smooth page transitions
- **Web Components**: Framework-agnostic components
- **Progressive Web Apps**: Near-native experiences

## Environmental Considerations

Sustainable web development is gaining attention:

- Optimizing for smaller bundle sizes
- Efficient image formats (WebP, AVIF)
- Green hosting solutions
- Performance budgets

## The Future is Bright

Web development is moving toward:
- Better performance by default
- Improved developer experience
- More powerful capabilities
- Greater accessibility

The tools we use will continue to evolve, but the fundamentals of building great web experiences remain the same: focus on users, write maintainable code, and never stop learning.

## Conclusion

The future of web development is exciting. By staying curious and embracing new technologies thoughtfully, we can build better experiences for users around the world.
    `,
    date: "2024-12-20",
    author: "Lisa Anderson",
    category: "Technology",
    readTime: "4 min read"
  },
  6: {
    id: 6,
    title: "Mastering CSS Grid and Flexbox",
    content: `
CSS Grid and Flexbox are two powerful layout systems in CSS. Understanding when to use each one—and how to combine them—is key to creating flexible, responsive layouts.

## Understanding the Basics

### Flexbox: One-Dimensional Layouts

Flexbox is designed for laying out items in a single dimension—either a row or a column.

\`\`\`css
.container {
  display: flex;
  gap: 1rem;
}

.item {
  flex: 1;
}
\`\`\`

**Best for:**
- Navigation bars
- Button groups
- Centering content
- Distributing space among items

### Grid: Two-Dimensional Layouts

CSS Grid handles both rows and columns simultaneously.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
\`\`\`

**Best for:**
- Page layouts
- Card grids
- Complex responsive designs
- Overlapping content

## When to Use What

### Use Flexbox When:

1. **Creating a navigation bar**
\`\`\`css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

2. **Centering content**
\`\`\`css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`

3. **Creating flexible button groups**
\`\`\`css
.button-group {
  display: flex;
  gap: 0.5rem;
}
\`\`\`

### Use Grid When:

1. **Creating a page layout**
\`\`\`css
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
}
\`\`\`

2. **Building a card grid**
\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

3. **Creating complex layouts**
\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.featured {
  grid-column: span 8;
  grid-row: span 2;
}
\`\`\`

## Combining Grid and Flexbox

The real power comes from using both together:

\`\`\`css
/* Grid for overall layout */
.page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Flexbox for card content */
.card {
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
\`\`\`

## Responsive Design Patterns

### Auto-fit Grid

Create responsive grids without media queries:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

### Flexible Flexbox

Wrap items automatically:

\`\`\`css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.flex-item {
  flex: 1 1 300px;
}
\`\`\`

## Common Pitfalls

### 1. Using Grid for Everything
Not every layout needs Grid. Flexbox is simpler for one-dimensional layouts.

### 2. Forgetting Gap
Use \`gap\` instead of margins for spacing between items—it's more predictable.

### 3. Overcomplicating
Start simple. You can always add complexity later.

## Advanced Techniques

### Subgrid

Allow nested grids to align with parent grid tracks:

\`\`\`css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}
\`\`\`

### Container Queries

Make components responsive to their container:

\`\`\`css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-content {
    display: flex;
  }
}
\`\`\`

## Conclusion

Both CSS Grid and Flexbox are essential tools in modern web development. Master both, understand their strengths, and know when to use each. The best layouts often use both together, each handling what it does best.
    `,
    date: "2024-12-15",
    author: "Alex Thompson",
    category: "CSS",
    readTime: "6 min read"
  }
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPostsData[parseInt(params.id)]

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Post not found</h1>
        <a href="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
          ← Back to home
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <a href="/" className="text-indigo-600 hover:text-indigo-800 mb-6 inline-block">
        ← Back to all posts
      </a>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <div className="mb-4">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 text-sm">
            <div className="flex items-center mr-6">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                {post.author.charAt(0)}
              </div>
              <span className="ml-2">{post.author}</span>
            </div>
            <time className="mr-6">{post.date}</time>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-indigo max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.slice(3)}</h2>
            } else if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.slice(4)}</h3>
            } else if (paragraph.startsWith('```')) {
              return null // Skip code fence markers
            } else if (paragraph.trim() === '') {
              return <br key={index} />
            } else if (paragraph.match(/^\d+\./)) {
              return <li key={index} className="ml-4">{paragraph}</li>
            } else if (paragraph.startsWith('- ')) {
              return <li key={index} className="ml-4">{paragraph.slice(2)}</li>
            } else {
              return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
            }
          })}
        </div>
      </article>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Share this article</h3>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Twitter
          </button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            Facebook
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(blogPostsData).map((id) => ({
    id: id,
  }))
}
