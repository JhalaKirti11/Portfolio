import { useParams, useLocation } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Heart, Share2, Calendar } from "lucide-react";
import { useState } from "react";
import blogImage1 from "@assets/stock_images/sdlc.jpg";
import blogImage2 from "@assets/stock_images/22.png";
import blogImage3 from "@assets/stock_images/web_application_dash_aee29e23.jpg";

const blogData = {
  "commerce-to-code": {
    id: "commerce-to-code",
    category: "Career",
    title: "My Journey from Commerce to Full-Stack Development",
    excerpt: "How I transitioned from a commerce background to becoming a MERN stack developer, and the lessons I learned along the way.",
    image: blogImage1,
    readingTime: 5,
    date: "2025-09-02",
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
    `
  },
  "building-cricklink": {
    id: "building-cricklink",
    category: "Projects",
    title: "Building CrickLink: Connecting Cricket Communities",
    excerpt: "The story behind creating a platform that brings together cricket players, teams, and tournament organizers.",
    image: blogImage2,
    readingTime: 8,
    date: "2025-09-10",
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
    `
  },
  "react-performance": {
    id: "react-performance",
    category: "Tech",
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt: "Practical techniques I used to reduce load times by 25% in production applications.",
    image: blogImage3,
    readingTime: 6,
    date: "2025-09-24",
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
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [likes, setLikes] = useState(42);
  const [shares, setShares] = useState(15);
  
  const post = id ? blogData[id as keyof typeof blogData] : null;

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => setLocation("/")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16 px-6">
        <article className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => setLocation("/#blog")}
            className="mb-8"
            data-testid="button-back-to-blog"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>

          <Badge variant="outline" className="mb-4" data-testid="badge-category">
            {post.category}
          </Badge>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-blog-title">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span data-testid="text-blog-date">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span data-testid="text-reading-time">{post.readingTime} min read</span>
            </div>
          </div>

          <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="object-cover"
              data-testid="img-blog-featured"
            />
          </div>

          <div className="flex items-center gap-4 mb-12 pb-8 border-b">
            <button
              onClick={() => setLikes(prev => prev + 1)}
              className="flex items-center gap-2 hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-colors"
              data-testid="button-like-post"
            >
              <Heart className="h-5 w-5" />
              <span data-testid="text-post-likes">{likes}</span>
            </button>
            <button
              onClick={() => setShares(prev => prev + 1)}
              className="flex items-center gap-2 hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-colors"
              data-testid="button-share-post"
            >
              <Share2 className="h-5 w-5" />
              <span data-testid="text-post-shares">{shares}</span>
            </button>
          </div>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            data-testid="content-blog-post"
          />

          <div className="mt-16 pt-8 border-t">
            <Button 
              variant="outline" 
              onClick={() => setLocation("/#blog")}
              data-testid="button-back-to-blog-bottom"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Posts
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
