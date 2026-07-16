import Link from "next/link";
import Container from "@/components/layout/Container";
import ArticleCard from "@/components/ui/ArticleCard";
import { articles } from "@/data/articles";

interface RecentArticlesProps {
  /** id of the article currently being viewed, so it isn't repeated below itself. */
  currentId: string;
}

/**
 * Component: RecentArticles
 * Purpose: "Recent articles" strip shown at the bottom of a single
 * article page — heading + "View all" link, then up to 3 other
 * articles (reuses the same ArticleCard used on /journal for a
 * consistent look).
 * Props: currentId (string) — excluded from the list shown.
 */
export default function RecentArticles({ currentId }: RecentArticlesProps) {
  const recent = articles.filter((a) => a.id !== currentId).slice(0, 3);

  if (recent.length === 0) return null;

  return (
    <section aria-labelledby="recent-articles-heading" className="bg-white pb-20 pt-4 sm:pt-8">
      <Container>
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <h2
            id="recent-articles-heading"
            className="text-xl font-bold tracking-tight text-ink sm:text-2xl"
          >
            Recent articles
          </h2>
          <Link
            href="/journal"
            className="text-sm font-medium text-ink-soft hover:text-ink hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {recent.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}