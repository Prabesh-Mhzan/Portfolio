import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata = { title: "Blog | Prabesh Maharjan" };

export default function BlogPage() {
  return (
    <main className="container-px py-20">
      <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
        Blog
      </h1>
      <p className="text-dim mb-14 max-w-xl">
        Notes on what I build and what breaks along the way.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card p-7 block"
          >
            <span className="text-xs text-dim">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {post.readTime}
            </span>
            <h2 className="font-display font-bold text-lg mt-3 mb-2.5">
              {post.title}
            </h2>
            <p className="text-dim text-sm">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
