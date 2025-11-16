import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Understanding Zero Trust Architecture",
      date: "2024-01-15",
      readTime: "5 min",
      excerpt: "Exploring the principles and implementation of zero trust security models",
    },
    {
      title: "Advanced Penetration Testing Techniques",
      date: "2024-01-08",
      readTime: "8 min",
      excerpt: "Deep dive into modern penetration testing methodologies and tools",
    },
    {
      title: "Securing Cloud Infrastructure",
      date: "2024-01-01",
      readTime: "6 min",
      excerpt: "Best practices for maintaining security in cloud environments",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">Blog</h1>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-2xl font-semibold mb-3 hover:text-primary transition-colors">
                {post.title}
              </h2>
              <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
