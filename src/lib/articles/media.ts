import type { CategoryArticles } from "@/types";

export const MEDIA_ARTICLES: CategoryArticles = {
  "people-daily-2025-10": {
    id: "people-daily-2025-10",
    title: "在创新中成长 在奋斗中出彩",
    date: "2025/10/17",
    tag: "人民日报",
    category: "media",
    content: [
      { type: "paragraph", text: "10月15日，河南郑州，浙江大学本科生陈奕好与同伴将灵光一闪的点子，转化为具有社会价值的科技产品..." },
      { type: "quote", text: "创新不是天才的专利，而是每个人都能培养的能力。" },
      { type: "paragraph", text: "在产教融合、科教融汇实践中，X-Lab实验室致力于..." },
    ],
  },
  "guangming-daily-education": {
    id: "guangming-daily-education",
    title: "本科生创新创业的探索与实践",
    date: "2025/9/20",
    tag: "光明日报",
    category: "media",
    content: [
      { type: "paragraph", text: "《教育家》杂志深度报道X-Lab创新人才培养模式..." },
    ],
  },
  "zhejiang-daily": {
    id: "zhejiang-daily",
    title: "浙大X-Lab：跨学科创新的沃土",
    date: "2025/8/15",
    tag: "浙江日报",
    category: "media",
    content: [
      { type: "paragraph", text: "在浙江大学启真交叉学科创新创业实验室..." },
    ],
  },
};

export const MEDIA_ARTICLE_IDS = Object.keys(MEDIA_ARTICLES);
