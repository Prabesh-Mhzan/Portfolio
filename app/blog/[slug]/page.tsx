import { posts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} | Prabesh Maharjan` : "Blog post" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="container-px py-20 max-w-2xl mx-auto">
      <Link href="/blog" className="text-accent text-sm font-semibold">
        ← Back to blog
      </Link>
      <span className="block text-xs text-dim mt-8">
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        · {post.readTime}
      </span>
      <h1 className="font-display font-extrabold text-3xl md:text-4xl mt-3 mb-10 leading-tight">
        {post.title}
      </h1>
      <div className="flex flex-col gap-5">
        {post.content.map((para, i) => (
          <p key={i} className="text-dim leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </main>
  );
}


// import { posts } from "@/lib/blog";
// import { notFound } from "next/navigation";
// import Link from "next/link";

// export function generateStaticParams() {
//   return posts.map((p) => ({ slug: p.slug }));
// }

// export function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = posts.find((p) => p.slug === params.slug);
//   return { title: post ? `${post.title} | Prabesh Maharjan` : "Blog post" };
// }

// export default function BlogPostPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const post = posts.find((p) => p.slug === params.slug);
//   if (!post) notFound();

//   return (
//     <main className="container-px py-20 max-w-2xl mx-auto">
//       <Link href="/blog" className="text-accent text-sm font-semibold">
//         ← Back to blog
//       </Link>
//       <span className="block text-xs text-dim mt-8">
//         {new Date(post.date).toLocaleDateString("en-US", {
//           month: "long",
//           day: "numeric",
//           year: "numeric",
//         })}{" "}
//         · {post.readTime}
//       </span>
//       <h1 className="font-display font-extrabold text-3xl md:text-4xl mt-3 mb-10 leading-tight">
//         {post.title}
//       </h1>
//       <div className="flex flex-col gap-5">
//         {post.content.map((para, i) => (
//           <p key={i} className="text-dim leading-relaxed">
//             {para}
//           </p>
//         ))}
//       </div>
//     </main>
//   );
// }


