import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Clock } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useState, useEffect } from "react";
import blogImage1 from "@assets/stock_images/sdlc.jpg";
import blogImage2 from "@assets/stock_images/22.png";
import blogImage3 from "@assets/stock_images/web_application_dash_aee29e23.jpg";
import blogImage4 from "@assets/stock_images/technology_coding_pr_01f73814.jpg";
import blogImage5 from "@assets/stock_images/technology_coding_pr_02f210a3.jpg";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string | null;
  readingTime: number;
  likes: number;
  shares: number;
  createdAt: string;
  updatedAt: string;
}

// Fallback images mapping
const imageMap: Record<string, string> = {
  "commerce-to-code": blogImage1,
  "building-cricklink": blogImage2,
  "react-performance": blogImage3,
  "mastering-restful-apis": blogImage4,
  "modern-css-techniques": blogImage5,
};

// Helper functions for localStorage
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

export function Blog() {
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();
  const [likedPosts, setLikedPostsState] = useState<Set<string>>(new Set());

  // Load liked posts from localStorage on mount
  useEffect(() => {
    setLikedPostsState(getLikedPosts());
  }, []);

  // Fetch blog posts from API
  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blogs"],
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
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
    },
  });

  // Share mutation
  const shareMutation = useMutation({
    mutationFn: async (slug: string) => {
      const res = await apiRequest("PATCH", `/api/blogs/${slug}/share`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      // Try to use Web Share API if available
      if (navigator.share) {
        navigator.share({
          title: document.title,
          url: window.location.href,
        }).catch(() => {
          // User cancelled or share failed, but we still incremented the share count
        });
      }
    },
  });

  const handleLike = (slug: string) => {
    const isLiked = likedPosts.has(slug);
    const action = isLiked ? "unlike" : "like";
    likeMutation.mutate({ slug, action });
  };

  const isPostLiked = (slug: string) => likedPosts.has(slug);

  const handleShare = (slug: string) => {
    shareMutation.mutate(slug);
  };

  if (isLoading) {
    return (
      <section id="blog" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">Blog</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Loading blog posts...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-center">Blog</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Sharing insights, experiences, and knowledge about web development and technology
        </p>
        
        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              // Use featured image from database, or fallback to mapped image based on slug
              const postImage = post.featuredImage || imageMap[post.slug] || blogImage1;
              
              return (
                <Card key={post.id} className="overflow-hidden hover-elevate transition-all flex flex-col" data-testid={`card-blog-${post.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={postImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardHeader className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                      <Clock className="h-3 w-3" />
                      <span>{post.readingTime} min read</span>
                      <span>•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </CardHeader>
                  
                  <CardFooter className="flex items-center justify-between gap-4 pt-0">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleLike(post.slug)}
                        disabled={likeMutation.isPending}
                        className="flex items-center gap-1 text-sm hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors disabled:opacity-50"
                        data-testid={`button-like-${post.id}`}
                      >
                        <Heart 
                          className={`h-4 w-4 transition-colors ${
                            isPostLiked(post.slug) 
                              ? "fill-red-500 text-red-500" 
                              : "text-current"
                          }`}
                        />
                        <span data-testid={`text-likes-${post.id}`}>{post.likes}</span>
                      </button>
                      <button
                        onClick={() => handleShare(post.slug)}
                        disabled={shareMutation.isPending}
                        className="flex items-center gap-1 text-sm hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors disabled:opacity-50"
                        data-testid={`button-share-${post.id}`}
                      >
                        <Share2 className="h-4 w-4" />
                        <span data-testid={`text-shares-${post.id}`}>{post.shares}</span>
                      </button>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setLocation(`/blog/${post.slug}`)}
                      data-testid={`button-read-more-${post.id}`}
                    >
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
