import "dotenv/config";
import { db } from "./db";
import { blogPosts } from "@shared/schema";
import { eq } from "drizzle-orm";

async function seedBlogPosts() {
  if (!db) {
    console.error("Database not configured. Please set DATABASE_URL in .env");
    process.exit(1);
  }

  const posts = [
    {
      slug: "commerce-to-code",
      title: "My Journey from Commerce to Full-Stack Development",
      excerpt: "How I transitioned from a commerce background to becoming a MERN stack developer, and the lessons I learned along the way.",
      content: `
      <h2>The Beginning: An Unexpected Turn</h2>
      <p>
        My journey into software development wasn't the traditional path. With a Bachelor's degree in Commerce, I was expected to pursue a career in finance, accounting, or business management. But life had different plans for me.
      </p>
      
      <p>
        During my final year of college, I discovered a fascination with how technology was transforming businesses. I started exploring basic web development tutorials out of curiosity, and what began as a hobby quickly turned into a passion. The logical thinking required in programming resonated with the analytical skills I had developed in commerce.
      </p>

      <h2>The Decision to Transition</h2>
      <p>
        Making the decision to transition wasn't easy. There were doubts, questions from family and friends, and the uncertainty of starting fresh in a completely new field. But I was driven by the excitement of creating something from nothing, of solving problems through code.
      </p>

      <p>
        I enrolled at InfoBeans Foundation for comprehensive training in Java and MERN stack development. The learning curve was steep. Concepts like data structures, algorithms, and object-oriented programming were entirely new to me. But my commerce background gave me an unexpected advantage—I understood the business logic behind applications, which helped me build more practical, user-focused solutions.
      </p>

      <h2>The Learning Phase</h2>
      <p>
        The training period was intense but rewarding. I spent countless hours coding, debugging, and rebuilding projects. Each error message was a learning opportunity, each successful deployment a small victory. The instructors emphasized not just coding, but understanding the 'why' behind every decision—a principle that has stayed with me.
      </p>

      <h2>Landing My First Role</h2>
      <p>
        After months of dedicated learning and building projects, I joined Web N Soft Solutions as a MERN Stack Developer. The initial days were challenging—working with production code, collaborating with experienced developers, and understanding existing codebases. But the supportive team environment and hands-on experience accelerated my growth exponentially.
      </p>

      <p>
        In my 9 months there, I contributed to building robust web applications, optimized UI performance by 25%, and learned the importance of clean code and best practices. Every sprint, every code review, and every deployment taught me something new.
      </p>

      <h2>Key Lessons Learned</h2>
      <ul>
        <li><strong>Embrace the Learning Curve:</strong> Coming from a non-technical background means you'll face challenges others might not, but it also gives you unique perspectives that can be valuable in problem-solving.</li>
        <li><strong>Build, Build, Build:</strong> Theory is important, but nothing beats hands-on experience. Every project you build strengthens your understanding and confidence.</li>
        <li><strong>Leverage Your Background:</strong> My commerce education helped me understand business requirements better, communicate effectively with stakeholders, and build user-centric applications.</li>
        <li><strong>Stay Curious:</strong> Technology evolves rapidly. The willingness to learn continuously is more important than knowing everything upfront.</li>
        <li><strong>Community Matters:</strong> Connecting with other developers, seeking mentorship, and participating in code reviews accelerated my learning significantly.</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>
        My journey from commerce to code has been transformative. It taught me that it's never too late to pursue what excites you, and that diverse backgrounds bring valuable perspectives to the tech industry. Today, I'm confident in my abilities as a full-stack developer, but I'm still learning, still growing, and still excited about the possibilities ahead.
      </p>

      <p>
        If you're considering a career transition into tech, my advice is simple: start now. The path won't be easy, but if you're passionate and persistent, it will be worth it.
      </p>
      `,
      readingTime: 5,
      featuredImage: null,
    },
    {
      slug: "building-cricklink",
      title: "Building CrickLink: Connecting Cricket Communities",
      excerpt: "The story behind creating a platform that brings together cricket players, teams, and tournament organizers.",
      content: `
      <h2>The Birth of an Idea</h2>
      <p>
        CrickLink was born from a real-world problem. In our local community, organizing cricket matches was chaotic—players couldn't find teams, teams couldn't find tournaments, and tournament organizers struggled with coordination. We saw an opportunity to build a platform that could bring everyone together.
      </p>

      <p>
        This project holds a special place in my journey because it was my first major application—a collaborative effort by a team of five aspiring developers, each bringing their unique skills and perspectives. Looking back, it was a wow moment that transformed how I understood software development.
      </p>

      <h2>The Challenge</h2>
      <p>
        Building CrickLink wasn't just about coding; it was about understanding user needs, designing a scalable architecture, and creating an intuitive experience. We needed to handle complex relationships between players, teams, tournaments, and organizers while keeping the interface simple and accessible.
      </p>

      <h2>Technical Architecture</h2>
      <p>
        We chose the MERN stack for its flexibility and our team's familiarity with JavaScript. Here's how we structured the application:
      </p>

      <h3>Backend Design</h3>
      <ul>
        <li><strong>MongoDB:</strong> We designed a flexible schema that could handle the relationships between users, teams, tournaments, and matches. The document-based structure allowed us to evolve our data model as requirements changed.</li>
        <li><strong>Express.js & Node.js:</strong> We built RESTful APIs to handle all operations—user authentication, team management, tournament registration, and match scheduling.</li>
        <li><strong>JWT Authentication:</strong> Security was paramount. We implemented role-based access control to ensure players, team captains, and tournament organizers had appropriate permissions.</li>
      </ul>

      <h3>Frontend Development</h3>
      <ul>
        <li><strong>React.js:</strong> We created a responsive, dynamic interface with reusable components. Each team member contributed different sections, learning the importance of consistent coding patterns.</li>
        <li><strong>Bootstrap:</strong> For rapid development and responsive design, we leveraged Bootstrap, customizing it to match our branding.</li>
        <li><strong>Real-time Updates:</strong> We implemented real-time notifications for match updates and tournament announcements, enhancing user engagement.</li>
      </ul>

      <h2>Key Features We Built</h2>
      
      <h3>1. Player Profiles and Team Discovery</h3>
      <p>
        Players could create detailed profiles showcasing their skills, experience, and availability. Our smart search algorithm helped teams find players matching their requirements—batting style, bowling type, fielding position, and location.
      </p>

      <h3>2. Team Management Dashboard</h3>
      <p>
        Team captains got a comprehensive dashboard to manage rosters, track player availability, and coordinate match schedules. This feature alone saved countless hours of manual coordination.
      </p>

      <h3>3. Tournament Organization</h3>
      <p>
        Tournament organizers could create events, set registration criteria, manage fixtures, and publish results—all from a single interface. The automated fixture generation was particularly challenging but incredibly rewarding to build.
      </p>

      <h2>Challenges We Overcame</h2>
      
      <h3>Team Collaboration</h3>
      <p>
        Working in a team of five taught us invaluable lessons. We had to establish coding standards, conduct regular code reviews, and learn to resolve merge conflicts. Git became our best friend and occasionally our worst enemy!
      </p>

      <h3>Complex Data Relationships</h3>
      <p>
        Modeling the relationships between players, teams, and tournaments was challenging. A player could be in multiple teams, a team could participate in multiple tournaments, and tournaments had complex bracket structures. We spent considerable time designing the database schema and API contracts.
      </p>

      <h3>Performance Optimization</h3>
      <p>
        As we added features, we noticed performance degradation. We learned to implement pagination, optimize database queries, and use React's performance optimization techniques like memoization and lazy loading.
      </p>

      <h2>The Learning Experience</h2>
      <p>
        Building CrickLink was transformative. It was where theoretical knowledge met practical application. We made mistakes, debugged for hours, celebrated small victories, and grew as developers. The project taught us:
      </p>

      <ul>
        <li>How to break down complex features into manageable tasks</li>
        <li>The importance of planning before coding</li>
        <li>How to write maintainable, scalable code</li>
        <li>The value of user feedback in shaping features</li>
        <li>How to work effectively in a team</li>
      </ul>

      <h2>Impact and Future</h2>
      <p>
        Seeing our platform being used by real cricket enthusiasts was incredibly fulfilling. We received feedback, fixed bugs, and added features based on user requests. CrickLink proved that with the right idea, dedication, and teamwork, even first-time developers could build something meaningful.
      </p>

      <p>
        This project set the foundation for my career as a full-stack developer. It showed me that development is not just about writing code—it's about solving real problems, understanding users, and continuously improving.
      </p>
      `,
      readingTime: 8,
      featuredImage: null,
    },
    {
      slug: "react-performance",
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt: "Practical techniques I used to reduce load times by 25% in production applications.",
      content: `
      <h2>Introduction</h2>
      <p>
        During my time at Web N Soft Solutions, I was tasked with improving the performance of a React application that was experiencing significant slowdowns. Through systematic analysis and optimization, we managed to reduce load times by 25%. Here are the practical techniques that made the biggest impact.
      </p>

      <h2>1. Component Rendering Optimization</h2>
      
      <h3>React.memo for Expensive Components</h3>
      <p>
        One of the first optimizations was identifying components that were re-rendering unnecessarily. By wrapping expensive components with React.memo, we prevented re-renders when props hadn't changed.
      </p>

      <pre><code>// Before
export function UserCard({ user, onUpdate }) {
  return (
    &lt;div&gt;
      {/* Complex rendering logic */}
    &lt;/div&gt;
  );
}

// After
export const UserCard = React.memo(({ user, onUpdate }) => {
  return (
    &lt;div&gt;
      {/* Complex rendering logic */}
    &lt;/div&gt;
  );
}, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
});</code></pre>

      <h3>useMemo for Expensive Calculations</h3>
      <p>
        We identified several components performing expensive calculations on every render. Using useMemo cached these calculations until dependencies changed.
      </p>

      <pre><code>// Before
const filteredUsers = users.filter(user => 
  user.name.toLowerCase().includes(searchTerm.toLowerCase())
);

// After
const filteredUsers = useMemo(() => 
  users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), [users, searchTerm]);</code></pre>

      <h2>2. Code Splitting and Lazy Loading</h2>
      <p>
        Our initial bundle size was massive. Implementing code splitting dramatically reduced the initial load time.
      </p>

      <pre><code>// Before
import Dashboard from './Dashboard';
import Reports from './Reports';
import Settings from './Settings';

// After
const Dashboard = lazy(() => import('./Dashboard'));
const Reports = lazy(() => import('./Reports'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    &lt;Suspense fallback={&lt;LoadingSpinner /&gt;}&gt;
      &lt;Routes&gt;
        &lt;Route path="/dashboard" element={&lt;Dashboard /&gt;} /&gt;
        &lt;Route path="/reports" element={&lt;Reports /&gt;} /&gt;
        &lt;Route path="/settings" element={&lt;Settings /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>

      <h2>3. Optimizing List Rendering</h2>
      <p>
        We had several components rendering large lists inefficiently. Implementing virtualization using react-window made a huge difference.
      </p>

      <h3>Before: Rendering All Items</h3>
      <pre><code>function UserList({ users }) {
  return (
    &lt;div&gt;
      {users.map(user => (
        &lt;UserCard key={user.id} user={user} /&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

      <h3>After: Virtual Scrolling</h3>
      <pre><code>import { FixedSizeList } from 'react-window';

function UserList({ users }) {
  const Row = ({ index, style }) => (
    &lt;div style={style}&gt;
      &lt;UserCard user={users[index]} /&gt;
    &lt;/div&gt;
  );

  return (
    &lt;FixedSizeList
      height={600}
      itemCount={users.length}
      itemSize={80}
      width="100%"
    &gt;
      {Row}
    &lt;/FixedSizeList&gt;
  );
}</code></pre>

      <h2>4. Image Optimization</h2>
      <p>
        Images were a major bottleneck. We implemented several strategies:
      </p>

      <ul>
        <li><strong>Lazy Loading:</strong> Images only load when they're about to enter the viewport</li>
        <li><strong>WebP Format:</strong> Modern image format with superior compression</li>
        <li><strong>Responsive Images:</strong> Serve appropriately sized images based on device</li>
        <li><strong>CDN Delivery:</strong> Faster delivery through geographically distributed servers</li>
      </ul>

      <pre><code>&lt;img 
  src={user.avatar} 
  alt={user.name}
  loading="lazy"
  srcSet="avatar-small.jpg 400w, avatar-medium.jpg 800w, avatar-large.jpg 1200w"
  sizes="(max-width: 400px) 100vw, 800px"
/&gt;</code></pre>

      <h2>5. State Management Optimization</h2>
      <p>
        We discovered that global state updates were causing unnecessary re-renders throughout the app. By restructuring our state management:
      </p>

      <ul>
        <li>Moved local state closer to where it's used</li>
        <li>Used context selectively to avoid prop drilling</li>
        <li>Implemented proper memoization in context providers</li>
      </ul>

      <h2>6. Bundle Size Optimization</h2>
      <p>
        We analyzed our bundle using webpack-bundle-analyzer and found several opportunities:
      </p>

      <ul>
        <li><strong>Tree Shaking:</strong> Ensured unused code was eliminated</li>
        <li><strong>Dependency Audit:</strong> Replaced heavy libraries with lighter alternatives</li>
        <li><strong>Dynamic Imports:</strong> Loaded heavy dependencies only when needed</li>
      </ul>

      <h2>7. Network Request Optimization</h2>
      <p>
        API calls were another performance bottleneck:
      </p>

      <ul>
        <li><strong>Request Batching:</strong> Combined multiple API calls into single requests</li>
        <li><strong>Caching:</strong> Implemented intelligent caching with React Query</li>
        <li><strong>Debouncing:</strong> Prevented excessive API calls on user input</li>
        <li><strong>Prefetching:</strong> Loaded data for likely next user actions</li>
      </ul>

      <h2>Measuring the Impact</h2>
      <p>
        We used Chrome DevTools and Lighthouse to measure improvements:
      </p>

      <ul>
        <li>First Contentful Paint: Reduced from 3.2s to 1.8s</li>
        <li>Time to Interactive: Reduced from 5.8s to 3.9s</li>
        <li>Bundle Size: Reduced from 850KB to 520KB</li>
        <li>Lighthouse Score: Improved from 62 to 89</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Always measure before optimizing—use profiling tools to identify real bottlenecks</li>
        <li>Start with the biggest wins—often these are bundle size and rendering optimizations</li>
        <li>Consider the user experience—a loading state is better than a frozen interface</li>
        <li>Optimization is ongoing—monitor performance and address regressions quickly</li>
        <li>Document your optimizations—help future developers understand why code is structured a certain way</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Performance optimization is not a one-time task but an ongoing process. By systematically identifying bottlenecks and applying appropriate techniques, we achieved significant improvements. The 25% reduction in load times translated to better user experience, higher engagement, and improved business metrics.
      </p>

      <p>
        Remember: premature optimization is the root of all evil, but informed optimization based on real data is the path to excellent user experiences.
      </p>
      `,
      readingTime: 6,
      featuredImage: null,
    },
    {
      slug: "mastering-restful-apis",
      title: "Mastering RESTful APIs: Best Practices for Node.js and Express",
      excerpt: "A comprehensive guide to building scalable, maintainable REST APIs using Node.js and Express.js with real-world examples.",
      content: `
      <h2>Introduction</h2>
      <p>
        Building RESTful APIs is a fundamental skill for any backend developer. During my professional journey, I've learned that following best practices from the start saves countless hours of refactoring later. This article shares practical insights on designing and implementing robust REST APIs using Node.js and Express.js.
      </p>

      <h2>Understanding REST Principles</h2>
      <p>
        REST (Representational State Transfer) is an architectural style that defines a set of constraints for creating web services. The core principles include:
      </p>

      <ul>
        <li><strong>Stateless:</strong> Each request contains all information needed to process it</li>
        <li><strong>Resource-Based:</strong> URLs represent resources, not actions</li>
        <li><strong>HTTP Methods:</strong> Use GET, POST, PUT, PATCH, DELETE appropriately</li>
        <li><strong>Uniform Interface:</strong> Consistent structure across all endpoints</li>
      </ul>

      <h2>1. Designing Resource-Based URLs</h2>
      <p>
        Good URL design makes your API intuitive. Resources should be nouns, and actions should be HTTP methods.
      </p>

      <h3>Good Examples:</h3>
      <pre><code>GET    /api/users              // Get all users
GET    /api/users/123          // Get user by ID
POST   /api/users              // Create new user
PUT    /api/users/123          // Replace entire user
PATCH  /api/users/123          // Update partial user
DELETE /api/users/123          // Delete user

GET    /api/users/123/posts    // Get posts by user
POST   /api/users/123/posts    // Create post for user</code></pre>

      <h3>Avoid These:</h3>
      <pre><code>GET    /api/getUsers           // Action in URL
POST   /api/users/123/delete   // Action in URL
GET    /api/user-detail        // Unclear naming</code></pre>

      <h2>2. HTTP Status Codes</h2>
      <p>
        Using appropriate status codes helps clients understand the result of their requests. Here's a practical guide:
      </p>

      <ul>
        <li><strong>200 OK:</strong> Successful GET, PUT, or PATCH</li>
        <li><strong>201 Created:</strong> Successful POST that created a resource</li>
        <li><strong>204 No Content:</strong> Successful DELETE</li>
        <li><strong>400 Bad Request:</strong> Invalid request syntax</li>
        <li><strong>401 Unauthorized:</strong> Authentication required</li>
        <li><strong>403 Forbidden:</strong> Authenticated but not authorized</li>
        <li><strong>404 Not Found:</strong> Resource doesn't exist</li>
        <li><strong>422 Unprocessable Entity:</strong> Valid syntax but semantic errors</li>
        <li><strong>500 Internal Server Error:</strong> Server-side error</li>
      </ul>

      <h2>3. Request and Response Format</h2>
      <p>
        Consistency in request and response formats improves API usability.
      </p>

      <h3>Response Structure:</h3>
      <pre><code>// Single Resource
{
  "data": {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}

// Collection
{
  "data": [
    { "id": "123", "name": "John" },
    { "id": "456", "name": "Jane" }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "limit": 10
  }
}

// Error Response
{
  "error": {
    "message": "Validation failed",
    "code": "VALIDATION_ERROR",
    "details": [
      { "field": "email", "message": "Invalid email format" }
    ]
  }
}</code></pre>

      <h2>4. Input Validation and Sanitization</h2>
      <p>
        Never trust user input. Always validate and sanitize data before processing.
      </p>

      <pre><code>import { body, validationResult } from 'express-validator';

// Validation middleware
const validateUser = [
  body('email').isEmail().normalizeEmail(),
  body('name').trim().isLength({ min: 2, max: 50 }),
  body('age').optional().isInt({ min: 0, max: 120 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: {
          message: 'Validation failed',
          details: errors.array()
        }
      });
    }
    next();
  }
];

// Usage
app.post('/api/users', validateUser, async (req, res) => {
  // Process validated data
});</code></pre>

      <h2>5. Error Handling</h2>
      <p>
        Centralized error handling makes debugging easier and provides consistent error responses.
      </p>

      <pre><code>// Error handler middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  // Handle specific error types
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      error: {
        message: 'Validation failed',
        details: err.details
      }
    });
  }
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      error: {
        message: 'Unauthorized',
        code: 'UNAUTHORIZED'
      }
    });
  }
  
  // Default error
  res.status(err.status || 500).json({
    error: {
      message: process.env.NODE_ENV === 'production' 
        ? 'Internal server error' 
        : err.message,
      code: err.code || 'INTERNAL_ERROR'
    }
  });
});</code></pre>

      <h2>6. Pagination and Filtering</h2>
      <p>
        For endpoints that return collections, implement pagination and filtering to improve performance and user experience.
      </p>

      <pre><code>app.get('/api/users', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  const search = req.query.search || '';
  
  // Build query
  let query = db.select().from(users);
  
  if (search) {
    query = query.where(
      or(
        like(users.name, '%' + search + '%'),
        like(users.email, '%' + search + '%')
      )
    );
  }
  
  // Get total count
  const total = await query.count();
  
  // Get paginated results
  const data = await query.limit(limit).offset(offset);
  
  res.json({
    data,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  });
});</code></pre>

      <h2>7. Authentication and Authorization</h2>
      <p>
        Securing your API is crucial. Implement JWT-based authentication with proper middleware.
      </p>

      <pre><code>import jwt from 'jsonwebtoken';

// Generate token
function generateToken(userId) {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}

// Verify middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: { message: 'Token required' } });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: { message: 'Invalid token' } });
    }
    req.user = user;
    next();
  });
}

// Usage
app.get('/api/users/me', authenticateToken, async (req, res) => {
  const user = await getUserById(req.user.userId);
  res.json({ data: user });
});</code></pre>

      <h2>8. API Versioning</h2>
      <p>
        Version your API to allow evolution without breaking existing clients.
      </p>

      <pre><code>// URL-based versioning
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

// Header-based versioning (alternative)
app.use('/api', (req, res, next) => {
  const version = req.headers['api-version'] || 'v1';
  req.apiVersion = version;
  next();
});</code></pre>

      <h2>9. Rate Limiting</h2>
      <p>
        Protect your API from abuse by implementing rate limiting.
      </p>

      <pre><code>import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: {
      message: 'Too many requests, please try again later'
    }
  }
});

app.use('/api/', limiter);</code></pre>

      <h2>10. Documentation</h2>
      <p>
        Good documentation is essential. Consider using tools like Swagger/OpenAPI.
      </p>

      <pre><code>/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *     responses:
 *       200:
 *         description: List of users
 */</code></pre>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Follow REST principles consistently</li>
        <li>Use appropriate HTTP methods and status codes</li>
        <li>Always validate and sanitize input</li>
        <li>Implement proper error handling</li>
        <li>Add pagination for collection endpoints</li>
        <li>Secure your API with authentication</li>
        <li>Version your API for future flexibility</li>
        <li>Document everything</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Building well-designed REST APIs requires attention to detail and following established best practices. By implementing these patterns from the start, you'll create APIs that are maintainable, scalable, and developer-friendly. Remember, good API design is not just about functionality—it's about creating an intuitive and reliable interface for your users.
      </p>
      `,
      readingTime: 7,
      featuredImage: null,
    },
    {
      slug: "modern-css-techniques",
      title: "Modern CSS Techniques: Flexbox, Grid, and Beyond",
      excerpt: "Exploring advanced CSS layout techniques and modern features that make responsive design easier and more powerful.",
      content: `
      <h2>Introduction</h2>
      <p>
        CSS has evolved tremendously over the years. Gone are the days of relying solely on floats and positioning hacks. Modern CSS provides powerful layout systems and features that make responsive design more intuitive and maintainable. In this article, I'll share practical techniques I use daily to build modern, responsive interfaces.
      </p>

      <h2>1. Flexbox: The Flexible Box Model</h2>
      <p>
        Flexbox revolutionized CSS layouts by providing a one-dimensional layout system that's perfect for aligning items and distributing space.
      </p>

      <h3>Common Flexbox Patterns</h3>

      <h4>Centering Content</h4>
      <pre><code>.container {
  display: flex;
  justify-content: center;  /* Horizontal centering */
  align-items: center;      /* Vertical centering */
  min-height: 100vh;
}</code></pre>

      <h4>Space Between Items</h4>
      <pre><code>.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Pushes last item to the right */
.navbar-item:last-child {
  margin-left: auto;
}</code></pre>

      <h4>Responsive Flexbox</h4>
      <pre><code>.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* grow, shrink, basis */
  min-width: 0;     /* Prevents overflow issues */
}</code></pre>

      <h2>2. CSS Grid: Two-Dimensional Layouts</h2>
      <p>
        CSS Grid excels at two-dimensional layouts, making complex designs straightforward.
      </p>

      <h3>Basic Grid Layout</h3>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Responsive without media queries! */</code></pre>

      <h3>Complex Grid Layouts</h3>
      <pre><code>.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
  .sidebar { display: none; }
}</code></pre>

      <h3>Grid with Named Lines</h3>
      <pre><code>.layout {
  display: grid;
  grid-template-columns: 
    [sidebar-start] 200px 
    [sidebar-end main-start] 1fr 
    [main-end];
  grid-template-rows: 
    [header-start] auto 
    [header-end content-start] 1fr 
    [content-end];
}</code></pre>

      <h2>3. Combining Flexbox and Grid</h2>
      <p>
        Flexbox and Grid complement each other perfectly. Use Grid for page layout and Flexbox for component layouts.
      </p>

      <pre><code>.page {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code></pre>

      <h2>4. Modern CSS Custom Properties</h2>
      <p>
        CSS variables (custom properties) enable powerful theming and dynamic styling.
      </p>

      <pre><code>:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --spacing-unit: 1rem;
  --border-radius: 0.5rem;
}

.button {
  background-color: var(--primary-color);
  padding: calc(var(--spacing-unit) * 1.5);
  border-radius: var(--border-radius);
}

/* Dynamic theming */
[data-theme="dark"] {
  --primary-color: #60a5fa;
  --bg-color: #1f2937;
}</code></pre>

      <h2>5. Container Queries</h2>
      <p>
        Container queries allow styling based on container size, not just viewport size. This is game-changing for component-based design.
      </p>

      <pre><code>.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  
  .card-image {
    width: 100%;
  }
}</code></pre>

      <h2>6. CSS Subgrid</h2>
      <p>
        Subgrid allows grid items to participate in their parent's grid, enabling complex nested layouts.
      </p>

      <pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.grid-item {
  display: grid;
  grid-template-columns: subgrid; /* Inherits parent columns */
  grid-column: span 3;
}</code></pre>

      <h2>7. Logical Properties</h2>
      <p>
        Logical properties make CSS work regardless of text direction, essential for internationalization.
      </p>

      <pre><code>/* Instead of */
.element {
  margin-top: 1rem;
  margin-right: 2rem;
  padding-left: 1rem;
}

/* Use logical properties */
.element {
  margin-block-start: 1rem;  /* top in LTR, bottom in RTL */
  margin-inline-end: 2rem;    /* right in LTR, left in RTL */
  padding-inline-start: 1rem; /* left in LTR, right in RTL */
}</code></pre>

      <h2>8. Modern Pseudo-Classes</h2>
      <p>
        New pseudo-classes like :is(), :where(), and :has() simplify selectors and enable powerful features.
      </p>

      <pre><code>/* :is() - groups selectors */
:is(h1, h2, h3) {
  font-weight: 700;
}

/* :where() - zero specificity */
:where(h1, h2, h3) {
  margin: 0; /* Can be easily overridden */
}

/* :has() - parent selector */
.card:has(.highlight) {
  border: 2px solid var(--primary-color);
}

/* Select previous sibling */
.input:focus + .label {
  color: var(--primary-color);
}</code></pre>

      <h2>9. CSS Functions and Calculations</h2>
      <p>
        Modern CSS functions enable dynamic and responsive values.
      </p>

      <pre><code>/* clamp() for fluid typography */
.title {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* min() and max() */
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: max(1rem, 5vw);
}

/* calc() with custom properties */
.spacing {
  padding: calc(var(--base-spacing) * 2);
}</code></pre>

      <h2>10. Modern Animation Techniques</h2>
      <p>
        CSS animations have become more powerful with new features.
      </p>

      <pre><code>/* Scroll-triggered animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

/* Using CSS custom properties for animations */
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.rotating {
  --angle: 360deg;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  to { --angle: calc(var(--angle) + 360deg); }
}</code></pre>

      <h2>11. Responsive Design Patterns</h2>
      <p>
        Modern CSS makes responsive design easier with techniques like intrinsic sizing.
      </p>

      <pre><code>/* Intrinsic responsive images */
.responsive-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* Responsive grid without breakpoints */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: clamp(1rem, 4vw, 2rem);
}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Use Grid for two-dimensional layouts, Flexbox for one-dimensional</li>
        <li>Leverage custom properties for theming and maintainability</li>
        <li>Prefer logical properties for better internationalization support</li>
        <li>Use container queries for component-level responsiveness</li>
        <li>Take advantage of modern functions like clamp() for fluid designs</li>
        <li>Keep selectors simple with :is() and :where()</li>
        <li>Use aspect-ratio for consistent image sizing</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Modern CSS provides tools that make responsive, maintainable layouts easier than ever. By mastering Flexbox, Grid, and newer features like container queries and logical properties, you can build interfaces that are both beautiful and functional across all devices. The key is to understand when to use each tool and how they complement each other.
      </p>

      <p>
        As CSS continues to evolve, staying updated with new features ensures your development workflow remains efficient and your designs remain cutting-edge.
      </p>
      `,
      readingTime: 6,
      featuredImage: null,
    },
  ];

  try {
    console.log("Seeding blog posts...");
    
    for (const post of posts) {
      // Check if post already exists
      const existing = await db
        .select()
        .from(blogPosts)
        .where(eq(blogPosts.slug, post.slug))
        .limit(1);

      if (existing.length > 0) {
        console.log(`Post with slug "${post.slug}" already exists. Skipping...`);
        continue;
      }

      await db.insert(blogPosts).values({
        ...post,
        likes: 0,
        shares: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      console.log(`✓ Created blog post: "${post.title}"`);
    }

    console.log("\n✅ Blog posts seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding blog posts:", error);
    process.exit(1);
  }
}

seedBlogPosts();

