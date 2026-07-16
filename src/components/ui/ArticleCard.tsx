import Image from "next/image";
import type { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
}

/**
 * Component: ArticleCard
 * Purpose: One "Latest articles" grid item — thumbnail, category/read-time
 * meta line, title, and a one-line description.
 * Props: article (Article)
 */
export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group">
      <a href={`/article/${article.id}`} className="block focus-visible:outline-none">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-sand">
          <Image
            src={article.imageSrc}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-soft">
          {article.category}
          <span aria-hidden="true"> · </span>
          {article.readTime}
        </p>

        <h3 className="mt-2 text-lg font-semibold leading-snug text-ink underline-offset-4 group-hover:underline group-focus-visible:underline sm:text-xl">
          {article.title}
        </h3>

        <p className="mt-2 text-sm text-ink-soft">{article.description}</p>
      </a>
    </article>
  );
}