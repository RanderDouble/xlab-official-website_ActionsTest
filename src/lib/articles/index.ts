// 导出各分类数据
export { LATEST_ARTICLES, LATEST_ARTICLE_IDS } from "./latest";
export { ACTIVITY_ARTICLES, ACTIVITY_ARTICLE_IDS } from "./activity";
export { MEDIA_ARTICLES, MEDIA_ARTICLE_IDS } from "./media";

// 导入类型
import type { ArticleCategory, ArticleDetail, CategoryArticles } from "@/types";
import { LATEST_ARTICLES } from "./latest";
import { ACTIVITY_ARTICLES } from "./activity";
import { MEDIA_ARTICLES } from "./media";

// 分类映射表
export const ARTICLES_BY_CATEGORY: Record<ArticleCategory, CategoryArticles> = {
  latest: LATEST_ARTICLES,
  activity: ACTIVITY_ARTICLES,
  media: MEDIA_ARTICLES,
};

// 获取特定分类的文章
export function getArticlesByCategory(category: ArticleCategory): CategoryArticles {
  return ARTICLES_BY_CATEGORY[category] ?? {};
}

// 通过ID和分类获取文章
export function getArticleByIdAndCategory(
  id: string,
  category: ArticleCategory
): ArticleDetail | undefined {
  return getArticlesByCategory(category)[id];
}

// 通过ID跨分类搜索文章
export function getArticleById(id: string): ArticleDetail | undefined {
  return LATEST_ARTICLES[id] ?? ACTIVITY_ARTICLES[id] ?? MEDIA_ARTICLES[id];
}

// 获取特定分类的所有ID
export function getArticleIdsByCategory(category: ArticleCategory): string[] {
  return Object.keys(getArticlesByCategory(category));
}

// 获取所有文章（用于搜索等场景）
export function getAllArticles(): ArticleDetail[] {
  return [
    ...Object.values(LATEST_ARTICLES),
    ...Object.values(ACTIVITY_ARTICLES),
    ...Object.values(MEDIA_ARTICLES),
  ];
}
