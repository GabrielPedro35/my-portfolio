import Backdrop from "@/components/Backdrop";
import { allPosts } from "content-collections";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function getSortedPosts() {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path.replace(/\.mdx$/, "") === slug);

  if (!post) {
    return undefined;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${DATA.url}${image}`
    : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${slug}`,
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl && {
        images: [imageUrl],
      }),
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const sortedPosts = getSortedPosts();
  const currentIndex = sortedPosts.findIndex(
    (p) => p._meta.path.replace(/\.mdx$/, "") === slug
  );
  const post = sortedPosts[currentIndex];

  if (!post) {
    notFound();
  }

  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  const getSlug = (entry: (typeof sortedPosts)[0]) =>
    entry._meta.path.replace(/\.mdx$/, "");

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.summary,
    image: post.image
      ? post.image.startsWith("http")
        ? post.image
        : `${DATA.url}${post.image}`
      : `${DATA.url}/blog/${slug}/opengraph-image`,
    url: `${DATA.url}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  return (
    <main className="min-h-screen bg-[#09090b] text-[#fafafa]">
      <Backdrop />
      <section id="blog">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: jsonLdContent,
          }}
        />
        <div className="flex justify-start gap-4 items-center">
          <Link
            href="/blog"
            className="text-sm text-zinc-400 hover:text-purple-300 transition-colors ring-1 ring-white/10 rounded-lg px-2.5 py-1 inline-flex items-center gap-1 mb-6 group bg-zinc-800/30 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
            aria-label="Back to Blog"
          >
            <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
            Back to Blog
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-zinc-500">{formatDate(post.publishedAt)}</p>
          {post.image ? (
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 h-48 mt-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ) : null}
        </div>
        <div className="my-6 flex w-full items-center">
          <div
            className="flex-1 h-px bg-white/10"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            }}
          />
        </div>
        <article className="blog-prose">
          <MDXContent code={post.mdx} components={mdxComponents} />
        </article>

        <nav className="mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {previousPost ? (
              <Link
                href={`/blog/${getSlug(previousPost)}`}
                className="group flex-1 flex flex-col gap-1 p-4 rounded-2xl bg-zinc-800/30 border-2 border-transparent hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300"
              >
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <ChevronLeft className="size-3" />
                  Previous
                </span>
                <span className="text-sm font-medium text-white whitespace-normal wrap-break-word">
                  {previousPost.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block flex-1" />
            )}

            {nextPost ? (
              <Link
                href={`/blog/${getSlug(nextPost)}`}
                className="group flex-1 flex flex-col gap-1 p-4 rounded-2xl bg-zinc-800/30 border-2 border-transparent hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 text-right"
              >
                <span className="flex items-center justify-end gap-1 text-xs text-zinc-500">
                  Next
                  <ChevronRight className="size-3" />
                </span>
                <span className="text-sm font-medium text-white whitespace-normal wrap-break-word">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block flex-1" />
            )}
          </div>
        </nav>
      </section>
    </main>
  );
}
