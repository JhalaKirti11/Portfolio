import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Clock } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import blogImage1 from "@assets/stock_images/sdlc.jpg";
import blogImage2 from "@assets/stock_images/22.png";
import blogImage3 from "@assets/stock_images/web_application_dash_aee29e23.jpg";

export function Blog() {
  const [, setLocation] = useLocation();
  const [blogPosts, setBlogPosts] = useState([
    {
      id: "commerce-to-code",
      category: "Career",
      title: "My Journey from Commerce to Full-Stack Development",
      excerpt: "How I transitioned from a commerce background to becoming a MERN stack developer, and the lessons I learned along the way.",
      image: blogImage1,
      readingTime: 5,
      likes: 42,
      shares: 15,
      date: "2025-09-02",
    },
    {
      id: "building-cricklink",
      category: "Projects",
      title: "Building CrickLink: Connecting Cricket Communities",
      excerpt: "The story behind creating a platform that brings together cricket players, teams, and tournament organizers.",
      image: blogImage2,
      readingTime: 8,
      likes: 38,
      shares: 12,
      date: "2025-09-10",
    },
    {
      id: "react-performance",
      category: "Tech",
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt: "Practical techniques I used to reduce load times by 25% in production applications.",
      image: blogImage3,
      readingTime: 6,
      likes: 56,
      shares: 24,
      date: "2025-09-24",
    },
  ]);

  const handleLike = (id: string) => {
    setBlogPosts(posts =>
      posts.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleShare = (id: string) => {
    setBlogPosts(posts =>
      posts.map(post =>
        post.id === id ? { ...post, shares: post.shares + 1 } : post
      )
    );
    console.log('Share triggered for blog post:', id);
  };

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-center">Blog</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Sharing insights, experiences, and knowledge about web development and technology
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover-elevate transition-all flex flex-col" data-testid={`card-blog-${post.id}`}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader className="flex-1">
                <Badge variant="outline" className="w-fit mb-2 text-xs">
                  {post.category}
                </Badge>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3">
                  <Clock className="h-3 w-3" />
                  <span>{post.readingTime} min read</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </CardHeader>
              
              <CardFooter className="flex items-center justify-between gap-4 pt-0">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1 text-sm hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
                    data-testid={`button-like-${post.id}`}
                  >
                    <Heart className="h-4 w-4" />
                    <span data-testid={`text-likes-${post.id}`}>{post.likes}</span>
                  </button>
                  <button
                    onClick={() => handleShare(post.id)}
                    className="flex items-center gap-1 text-sm hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
                    data-testid={`button-share-${post.id}`}
                  >
                    <Share2 className="h-4 w-4" />
                    <span data-testid={`text-shares-${post.id}`}>{post.shares}</span>
                  </button>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setLocation(`/blog/${post.id}`)}
                  data-testid={`button-read-more-${post.id}`}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
