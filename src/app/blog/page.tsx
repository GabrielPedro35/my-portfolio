import Backdrop from "@/components/Backdrop";
import { BlogCard } from "@/components/blog-card";
import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import { paginate, normalizePage } from "@/lib/pagination";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

const PAGE_SIZE = 5;
const BLUR_FADE_DELAY = 0.04;

const pagerClass =
  "h-8 w-fit px-3 flex items-center justify-center text-sm rounded-lg bg-zinc-800/30 ring-1 ring-white/10 text-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  const posts = allPosts;
  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  return (
    <main className="min-h-screen bg-[#09090b] text-[#fafafa]">
      <Backdrop />
      <section id="blog">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-3xl font-semibold text-white/90 mb-1">
              Blog{" "}
              <span className="ml-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/15 ring-1 ring-purple-500/30 text-purple-300 align-middle">
                {sortedPosts.length} posts
              </span>
            </h1>
            <p className="text-sm text-zinc-400 mb-4">
              My thoughts on software development, life, and more.
            </p>
          </div>
        </BlurFade>

        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {paginatedPosts.map((post, id) => {
                const slug = post._meta.path.replace(/\.mdx$/, "");
                return (
                  <BlurFade
                    delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                    key={slug}
                    className="h-full"
                  >
                    <BlogCard
                      title={post.title}
                      summary={post.summary}
                      date={formatDate(post.publishedAt)}
                      href={`/blog/${slug}`}
                      image={post.image}
                      index={id}
                    />
                  </BlurFade>
                );
              })}
            </div>

            {pagination.totalPages > 1 && (
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex gap-3 flex-row items-center justify-between mt-8">
                  <div className="text-sm text-zinc-500">
                    Page {pagination.page} of {pagination.totalPages}
                  </div>
                  <div className="flex gap-2 sm:justify-end">
                    {pagination.hasPreviousPage ? (
                      <Link
                        href={`/blog?page=${pagination.page - 1}`}
                        className={`${pagerClass} hover:bg-zinc-900 hover:ring-zinc-500`}
                      >
                        Previous
                      </Link>
                    ) : (
                      <span
                        className={`${pagerClass} text-zinc-500 opacity-50 cursor-not-allowed`}
                      >
                        Previous
                      </span>
                    )}
                    {pagination.hasNextPage ? (
                      <Link
                        href={`/blog?page=${pagination.page + 1}`}
                        className={`${pagerClass} hover:bg-zinc-900 hover:ring-zinc-500`}
                      >
                        Next
                      </Link>
                    ) : (
                      <span
                        className={`${pagerClass} text-zinc-500 opacity-50 cursor-not-allowed`}
                      >
                        Next
                      </span>
                    )}
                  </div>
                </div>
              </BlurFade>
            )}
          </>
        ) : (
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col items-center justify-center py-12 px-4 rounded-2xl bg-zinc-800/30 ring-1 ring-white/10">
              <p className="text-zinc-400 text-center">
                No blog posts yet. Check back soon!
              </p>
            </div>
          </BlurFade>
        )}
      </section>
    </main>
  );
}
