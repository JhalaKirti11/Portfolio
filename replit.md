# Kirti Jhala Portfolio & Blog

## Overview

This is a personal portfolio and blog website for Kirti Jhala, a Full-Stack Developer specializing in the MERN stack. The application serves as a professional showcase featuring sections for personal information, skills, work experience, projects, blog posts, and contact information. Built with a modern tech stack, it emphasizes clean design inspired by Linear and Notion, with a focus on minimalism and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for client-side routing (lightweight alternative to React Router)

**UI Component Library**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component system built on top of Radix UI
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting dark/light modes via ThemeProvider context

**State Management**
- TanStack Query (React Query) for server state management and API caching
- React Context API for theme state
- Local component state with React hooks

**Design System**
- Custom color palette defined in CSS variables supporting dark/light themes
- Typography using Inter (primary) and JetBrains Mono (code) fonts via Google Fonts
- Consistent spacing system using Tailwind's spacing scale
- Component variants using class-variance-authority (CVA)

### Backend Architecture

**Server Framework**
- Express.js server handling both API routes and static file serving
- HTTP server created via Node's native `http` module
- Middleware-based request/response pipeline

**Development vs Production**
- Development: Vite middleware integration for HMR and dev server functionality
- Production: Pre-built static assets served from `dist/public`
- Environment-aware configuration via `NODE_ENV`

**API Design**
- RESTful API structure (routes prefixed with `/api`)
- Storage abstraction layer with `IStorage` interface
- In-memory storage implementation (`MemStorage`) for development
- Designed to be database-agnostic with swappable storage implementations

**Error Handling**
- Centralized error handling middleware
- Request/response logging with duration tracking
- Structured error responses with status codes and messages

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless`)
- Schema definition using Drizzle's declarative API
- Zod integration for runtime validation via `drizzle-zod`

**Schema Design**
- **Users table**: ID (UUID), username (unique), password
- **Blog posts table**: ID (UUID), title, slug (unique), excerpt, content, featured image, reading time, likes, shares, timestamps
- Auto-generated UUIDs using PostgreSQL's `gen_random_uuid()`
- Automatic timestamp management with `defaultNow()`

**Current State vs Future State**
- Current: In-memory storage via `MemStorage` class
- Planned: PostgreSQL integration via Neon serverless
- Migration system ready via `drizzle-kit` for schema changes

### Authentication & Authorization

**Current Implementation**
- User schema prepared with username/password fields
- Session management infrastructure ready via `connect-pg-simple`
- No active authentication implemented yet

**Design Approach**
- Prepared for session-based authentication
- User credentials stored with hashed passwords (implementation pending)
- Role-based access control not yet implemented but schema supports extension

### External Dependencies

**Third-Party UI Libraries**
- Radix UI: Comprehensive set of 20+ accessible component primitives (accordion, dialog, dropdown, popover, etc.)
- Embla Carousel: Touch-friendly carousel component
- cmdk: Command palette component
- Lucide React: Icon library
- React Icons: Additional icon set (specifically `react-icons/si` for brand icons)

**Utilities & Helpers**
- date-fns: Date manipulation and formatting
- clsx & tailwind-merge: Conditional class name management
- class-variance-authority: Type-safe variant management
- nanoid: Unique ID generation

**Form Management**
- React Hook Form: Form state and validation
- @hookform/resolvers: Validation schema resolvers
- Zod: Schema validation library

**Development Tools**
- Replit-specific plugins for development experience (runtime error overlay, cartographer, dev banner)
- TypeScript for type checking
- ESBuild for production bundling

**Asset Management**
- Static images stored in `attached_assets` directory
- Vite alias configuration for easy asset imports (`@assets`)
- Resume/CV text file included for reference

### Design Philosophy

**Component Organization**
- Feature-based components in `client/src/components` (Hero, About, Skills, etc.)
- Reusable UI primitives in `client/src/components/ui`
- Example components for documentation in `client/src/components/examples`

**Styling Approach**
- Utility-first with Tailwind CSS
- Custom CSS variables for theming
- Hover and active state elevation effects (`hover-elevate`, `active-elevate-2`)
- Consistent border radius (9px/6px/3px scale)
- Shadow system with subtle elevations

**Performance Considerations**
- Code splitting via React lazy loading (potential)
- Optimized component rendering mentioned in professional experience
- Static asset optimization via Vite
- Query caching with TanStack Query (staleTime: Infinity)

**Accessibility**
- Radix UI primitives provide ARIA attributes and keyboard navigation
- Semantic HTML structure
- Focus management and screen reader support built into components