import { useParams, useLocation } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Heart, Share2, Calendar } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  readingTime: number;
  likes: number;
  shares: number;
  createdAt: string;
  updatedAt: string;
}

// Helper functions for localStorage (shared with Blog component)
const LIKED_POSTS_KEY = "blog_liked_posts";

function getLikedPosts(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = localStorage.getItem(LIKED_POSTS_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function setLikedPosts(likedPosts: Set<string>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LIKED_POSTS_KEY, JSON.stringify(Array.from(likedPosts)));
  } catch {
    // Ignore localStorage errors
  }
}

export default function BlogPost() {
  const { id } = useParams(); // This is actually the slug
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const slug = id;
  const [likedPosts, setLikedPostsState] = useState<Set<string>>(new Set());

  // Load liked posts from localStorage on mount
  useEffect(() => {
    setLikedPostsState(getLikedPosts());
  }, []);

  // Fetch blog post from API
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blogs/${slug}`],
    enabled: !!slug,
  });

  // Like mutation
  const likeMutation = useMutation({
    mutationFn: async ({ slug, action }: { slug: string; action: "like" | "unlike" }) => {
      const res = await apiRequest("PATCH", `/api/blogs/${slug}/like`, { action });
      return res.json();
    },
    onSuccess: (_, variables) => {
      // Update localStorage using functional update to get latest state
      setLikedPostsState((currentLikedPosts) => {
        const newLikedPosts = new Set(currentLikedPosts);
        if (variables.action === "like") {
          newLikedPosts.add(variables.slug);
        } else {
          newLikedPosts.delete(variables.slug);
        }
        setLikedPosts(newLikedPosts);
        return newLikedPosts;
      });
      
      // Invalidate queries to refresh data
      queryClient.invalidateQueries({ queryKey: [`/api/blogs/${slug}`] });
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
    },
  });

  // Share mutation
  const shareMutation = useMutation({
    mutationFn: async (postSlug: string) => {
      const res = await apiRequest("PATCH", `/api/blogs/${postSlug}/share`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/blogs/${slug}`] });
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      // Try to use Web Share API if available
      if (navigator.share && post) {
        navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        }).catch(() => {
          // User cancelled or share failed, but we still incremented the share count
        });
      }
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">Loading blog post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
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

          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-blog-title">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span data-testid="text-blog-date">
                {new Date(post.createdAt).toLocaleDateString('en-US', { 
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

          {post.featuredImage && (
          <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
            <img
                src={post.featuredImage}
              alt={post.title}
                className="w-full h-full object-cover"
              data-testid="img-blog-featured"
            />
          </div>
          )}

          <div className="flex items-center gap-4 mb-12 pb-8 border-b">
            <button
              onClick={() => {
                const isLiked = likedPosts.has(post.slug);
                const action = isLiked ? "unlike" : "like";
                likeMutation.mutate({ slug: post.slug, action });
              }}
              disabled={likeMutation.isPending}
              className="flex items-center gap-2 hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-colors disabled:opacity-50"
              data-testid="button-like-post"
            >
              <Heart 
                className={`h-5 w-5 transition-colors ${
                  likedPosts.has(post.slug)
                    ? "fill-red-500 text-red-500"
                    : "text-current"
                }`}
              />
              <span data-testid="text-post-likes">{post.likes}</span>
            </button>
            <button
              onClick={() => shareMutation.mutate(post.slug)}
              disabled={shareMutation.isPending}
              className="flex items-center gap-2 hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-colors disabled:opacity-50"
              data-testid="button-share-post"
            >
              <Share2 className="h-5 w-5" />
              <span data-testid="text-post-shares">{post.shares}</span>
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
