import type { CategoryArticles } from "@/types";

export const LATEST_ARTICLES: CategoryArticles = {
  "xlab-education-magazine": {
    id: "xlab-education-magazine",
    title: "X-Lab创新案例登上《教育家》",
    date: "2026/2/5",
    tag: "教育家",
    category: "latest",
    content: [
      { type: "paragraph", text: "三大学生创新团队的实践案例，生动展现了X-Lab在AI时代培育创新人才的显著成效。" },
      { type: "image", src: "/assets/news/education-magazine.jpg", caption: "《教育家》杂志报道截图" },
      { type: "paragraph", text: "在产教融合、科教融汇实践中，X-Lab坚持..." },
    ],
  },
  "ai-hackathon-guide": {
    id: "ai-hackathon-guide",
    title: "赛事解读｜AI Hackathon Tour 2026",
    date: "2026/1/22",
    category: "latest",
    content: [
      { type: "paragraph", text: "敢想敢做，破局而生。AI Hackathon是全球最大的AI创客马拉松..." },
    ],
  },
  "ai-x-training-base": {
    id: "ai-x-training-base",
    title: "实验室认证为首批AI+X产教联盟实训基地",
    date: "2025/12/28",
    category: "latest",
    content: [
      { type: "paragraph", text: "成为花猫学习中心首批AI生态伙伴..." },
    ],
  },
};

// 导出ID列表（用于generateStaticParams）
export const LATEST_ARTICLE_IDS = Object.keys(LATEST_ARTICLES);
