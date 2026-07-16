import Container from "@/components/layout/Container";
import ArticleCard from "@/components/ui/ArticleCard";
import { articles } from "@/data/articles";

/**
 * Component: LatestArticles
 * Purpose: "Latest articles" grid on /journal — 2 columns from the sm
 * breakpoint up, 1 column on mobile, matching the reference screenshots
 * across desktop/tablet/mobile.
 * Props: none — reads from the shared `articles` data.
 */
export default function LatestArticles() {
  return (
    <section aria-labelledby="latest-articles-heading" className="bg-white py-14 sm:py-20">
      <Container>
        <h2
          id="latest-articles-heading"
          className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Latest articles
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}