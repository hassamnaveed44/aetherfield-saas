import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import { articles } from "@/data/articles";
import ArticleBody from "@/components/sections/ArticleBody";
import RecentArticles from "@/components/sections/RecentArticles";

/**
 * Route: /article/[slug]
 * Purpose: Single article page — headline + hero image, matching the
 * reference screenshot. Looks up the article by its `id` field in
 * the shared `articles` data source (this project keys articles by
 * `id`, e.g. "climate-ready-data-stack", rather than a separate slug).
 */

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render a page for every article at build time.
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.id === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar background="white" />

      <article className="bg-white">
        <Container>
          <h1 className="mt-10 max-w-4xl text-3xl font-bold tracking-tight text-ink sm:mt-14 sm:text-5xl">
            {article.title}
          </h1>

          <div className="relative mt-8 h-64 w-full overflow-hidden rounded-lg sm:mt-12 sm:h-[420px]">
            <Image
              src={article.imageSrc}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          <ArticleBody />
        </Container>
      </article>
      <RecentArticles currentId={article.id} />
    </>
  );
}
