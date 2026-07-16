export interface Article {
  id: string;
  title: string;
  description: string;
  /** Small tag shown above the title, e.g. "Insights", "Strategy" */
  category: string;
  /** Read time label, e.g. "4 min" */
  readTime: string;
  /** Path under /public, e.g. "/images/blogimg1.png" */
  imageSrc: string;
}