import Link from "next/link";
import { posts } from "@/lib/blog";

export default function BlogPreview() {
  return (
    <section id="blog" className="container-px py-24 border-t border-line">
      <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl">
          From the blog
        </h2>
        <Link href="/blog" className="text-accent text-sm font-semibold">
          View all →
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-7 block">
            <span className="text-xs text-dim">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {post.readTime}
            </span>
            <h3 className="font-display font-bold text-lg mt-3 mb-2.5">
              {post.title}
            </h3>
            <p className="text-dim text-sm">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
