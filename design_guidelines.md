# Design Guidelines: Kirti Jhala Portfolio & Blog

## Design Approach
**Reference-Based Approach** drawing inspiration from Linear (clean minimalism, sharp typography), Notion (content organization), and modern developer portfolios like Vercel/Next.js showcase sites. The design balances professional credibility with approachable personality, emphasizing technical competence while maintaining visual sophistication.

## Core Design Elements

### A. Color Palette

**Dark Mode Primary** (Default):
- Background Base: 220 13% 9%
- Surface Elevated: 220 13% 12%
- Primary Accent: 217 91% 60% (vibrant blue for CTAs, links, active states)
- Text Primary: 220 9% 96%
- Text Secondary: 220 9% 70%
- Border Subtle: 220 13% 18%

**Light Mode:**
- Background: 0 0% 100%
- Surface: 220 13% 97%
- Primary Accent: 217 91% 55%
- Text Primary: 220 13% 13%
- Text Secondary: 220 9% 40%

**Accent Colors:**
- Success Green (for achievements): 142 71% 45%
- Blog Like Red: 0 84% 60%
- Warning (reading time): 38 92% 50%

### B. Typography

**Font Stack:**
- Primary: 'Inter' via Google Fonts (headers, body)
- Monospace: 'JetBrains Mono' (code snippets, tech stack labels)

**Scale:**
- Hero Headline: text-6xl (60px) lg:text-7xl (72px), font-bold, tracking-tight
- Section Headers: text-4xl (36px), font-semibold
- Subsection Titles: text-2xl (24px), font-medium
- Body Text: text-base (16px), leading-relaxed
- Small Text: text-sm (14px) for metadata, timestamps

### C. Layout System

**Spacing Primitives:** Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for margins and padding
- Section Vertical Spacing: py-20 (desktop), py-12 (mobile)
- Container Max Width: max-w-6xl with px-6
- Component Gaps: gap-6 for grids, gap-4 for inline elements

**Grid System:**
- Skills: 3 columns desktop (lg:grid-cols-3), 2 tablet (md:grid-cols-2), 1 mobile
- Projects: 2 columns desktop (lg:grid-cols-2), 1 mobile
- Blog Cards: 3 columns desktop (lg:grid-cols-3), 1 mobile

### D. Component Library

**Hero Section:**
- Full-width with subtle gradient overlay on background image (developer workspace/coding setup)
- Image: Professional workspace photo with laptop, multiple monitors, modern setup - conveys technical environment
- Centered content with name (text-6xl), animated tagline (text-xl with typing effect)
- Dual CTAs: "View Projects" (primary solid button) + "Download Resume" (outline with blur backdrop)
- Scroll indicator at bottom

**Navigation:**
- Fixed top nav with blur backdrop (backdrop-blur-md bg-surface/80)
- Logo/name on left, nav links center-right, theme toggle far right
- Smooth scroll anchors with active state indicators
- Mobile: Hamburger menu with slide-in drawer

**About Me Card:**
- Two-column layout: Professional headshot left (rounded-2xl, grayscale with color on hover), text content right
- Background: Elevated surface with subtle border
- Include journey timeline: Commerce → Java Training → MERN Stack Developer
- Statistics bar: Years Experience, Projects Completed, Technologies Mastered

**Skills Grid:**
- Tag-style pills organized by category (Languages, Frontend, Backend, Tools)
- Gradient backgrounds for each category
- Hover effect: slight lift with shadow increase

**Experience Timeline:**
- Vertical timeline with connecting line
- Cards alternate left/right (desktop), stack on mobile
- Company logo placeholders, role titles, achievement bullets
- Date badges positioned on timeline

**Project Cards:**
- Image placeholder at top (16:9 ratio, project screenshot mockups)
- Tech stack tags below image (small pills with monospace font)
- Project title, brief description, "View Details" link
- Hover: card lifts (translate-y-1), shadow deepens

**Blog Section (Homepage):**
- 3-column masonry-style grid of preview cards
- Each card: Featured image, title, excerpt (2 lines max), reading time, like count, date
- "Read More" button navigates to full post
- Floating "Write New Post" FAB (bottom right, primary color)

**Full Blog Post Page:**
- Hero image full-width at top
- Article content: max-w-prose centered, generous line-height (1.75)
- Sticky sidebar: Table of contents, share buttons (Twitter, LinkedIn, Copy Link)
- Like button (heart icon with count) - animated on click
- Social share bar fixed at bottom on mobile
- Related posts grid at end

**Contact Section:**
- Split layout: Contact form left (name, email, message), info panel right
- Info includes: Email (with copy button), GitHub link, social media icons
- Form has floating labels, subtle focus states
- Success message after submission

**Footer:**
- Three columns: Quick Links, Latest Blog Posts, Social Connect
- Copyright and "Built with React & Node.js" tagline
- Newsletter signup form

### E. Interactive Elements

**Animations (Minimal & Purposeful):**
- Hero tagline: Typing animation on load (once)
- Scroll-triggered fade-ins for sections (intersection observer)
- Button hovers: Slight scale (scale-105), shadow increase
- Blog like: Heart fill animation with scale bounce
- Navigation: Smooth scroll with easing

**Hover States:**
- Cards: Lift effect (shadow-lg to shadow-xl)
- Links: Underline slide-in from left
- Images: Subtle zoom (scale-105) within container
- Buttons: Background color shift (10% lighter/darker)

### F. Images & Media

**Hero Image:**
- Large hero background: Modern developer workspace with dual monitors, mechanical keyboard, plants (professional yet approachable)
- Dimensions: 1920x1080 minimum, WebP format
- Apply gradient overlay for text readability

**About Section Image:**
- Professional headshot: Smart casual, neutral background
- Circular or rounded-lg frame (400x400px)

**Project Thumbnails:**
- Screenshots or mockups of actual projects (16:9 ratio)
- If unavailable: Gradient backgrounds with project logos/icons

**Blog Featured Images:**
- Tech-related stock photos or custom graphics (1200x630 optimal for sharing)
- Consistent aspect ratio across all posts

### G. Responsive Breakpoints

- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

### H. Accessibility

- Dark mode default with toggle (persists via localStorage)
- Focus visible states for keyboard navigation
- Alt text for all images
- ARIA labels for icon-only buttons
- Color contrast ratios meet WCAG AA standards (4.5:1 minimum)

---

**Design Philosophy:** Clean, modern, and developer-focused. The portfolio should feel like a polished SaaS product – professional but not corporate, technical but approachable. Every interaction should feel intentional and smooth. The blog integration positions Kirti as a thought leader, not just a coder.