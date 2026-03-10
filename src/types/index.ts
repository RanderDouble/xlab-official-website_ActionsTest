export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ==================== Content Status ====================

export type ContentStatus = "active" | "ended";

// ==================== Home & News Types ====================

// 活动
export interface Activity {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  status: ContentStatus;
  imageUrl: string;
  ctaLabel: string;
  link: string;
  articleId?: string; // 关联文章ID
  category?: string; // 活动分类标签
}

// 新闻基础类型
export interface NewsItem {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  type: "text" | "image";
  imageUrl?: string;
  summary?: string;
  category?: string;
  link?: string; // 跳转链接
}

// 首页实验室新闻
export interface LabNews {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  imageUrl: string;
  link?: string; // 可选的链接
}

// 媒体报道
export interface MediaQuote {
  id: number;
  title: string;
  content: string;
  mediaName: string;
  date: string; // YYYY-MM-DD
  logoUrl?: string;
  articleId?: string; // 关联到 MEDIA_ARTICLES 的 ID (可选)
  link: string;      // 跳转链接
}

// 新闻 Hero 区域
export interface NewsHeroData {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  buttonText: string;
}

// 首页轮播
export interface Banner {
  id: number;
  label: string;
  link: string;
  imageUrl: string;
}

// 资源类型
export type ResourceType = "venue" | "digital";

// 导师
export interface Mentor {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
}

// 资源卡片
export interface ResourceCard {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  link: string;
}

// ==================== Research Types ====================

export interface PartnerNewsItem {
  id: number;
  title: string;
  brief: string;
  image: string;
  link: string;
}

export type ResearchProjectContent = {
  type: "image-text" | "text-only" | "image-only";
  title?: string;
  description?: string;
  imageUrl?: string;
};

export type ResearchTeamProject = {
  id: string;
  teamName: string; // 例如: "硬件团队"
  englishName: string; // 例如: "Hardware"
  logoPath: string; // 例如: "/research/hardware_logo.svg"
  themeColor: string; // 例如: "#CA3540" (用于渐变和文字)
  items: ResearchProjectContent[];
};

// ==================== List Page Types ====================

// 列表项基础类型
export interface ListPageItem {
  id: string | number;
  title: string;
  date: string;
  imageUrl?: string;
  summary?: string;
  category?: string;
  link: string;
}

// ==================== Detail Page Types ====================

// 详情页内容块类型
export type DetailContentBlock =
  | { type: "paragraph"; text: string } // 正文段落（自动首行缩进）
  | {
      type: "image";
      src: string;
      alt?: string;
      caption?: string;
    } // 图片
  | { type: "subheading"; text: string } // 小标题
  | { type: "quote"; text: string }; // 引用块

// 详情页数据类型
export interface DetailPageData {
  id: string | number;
  title: string; // 主标题
  date: string; // 日期
  tag?: string; // 左上角标签（如"人民日报"）
  tagColor?: string; // 标签渐变色（默认蓝渐变）
  content: DetailContentBlock[];
}

// 简洁版本（用于简单场景，直接渲染 HTML）
export interface DetailPageSimpleData {
  id: string | number;
  title: string;
  date: string;
  tag?: string;
  tagColor?: string;
  htmlContent: string; // 直接渲染 HTML
}

// ==================== Article Detail Types ====================

// 文章分类类型
export type ArticleCategory = "latest" | "activity" | "media";

// 文章预览自定义字段
export interface ArticlePreview {
  title?: string;        // 自定义预览标题（默认使用 article.title）
  summary?: string;      // 自定义摘要/副标题（用于卡片展示）
  quote?: string;        // 媒体引用卡片显示的内容（MediaCoverage）
  imageUrl?: string;     // 自定义预览图片
  mediaName?: string;    // 媒体名称（用于媒体关注卡片）
  status?: ContentStatus; // 活动状态（用于活动招募）
  ctaLabel?: string;     // 活动按钮文字
}

// 文章详情数据
export interface ArticleDetail {
  id: string;
  title: string;
  date: string;
  tag?: string;
  tagColor?: string;
  content: DetailContentBlock[];
  category: ArticleCategory;
  // 自定义预览字段（可选）
  preview?: ArticlePreview;
}

// 分类文章映射表
export type CategoryArticles = Record<string, ArticleDetail>;

// ==================== About Page Types ====================

export interface AboutHeroData {
  title: string;
  subtitle: string;
}

export interface AboutWhoWeAreData {
  title: string;
  content: string;
}

export interface AboutMissionData {
  title: string;
  content: string;
}

export interface OrganizationCommittee {
  name: string;
  englishName: string;
}

export interface OrganizationSystem {
  name: string;
  englishName: string;
}

export interface OrganizationStructureData {
  title: string;
  subtitle: string;
  committees: OrganizationCommittee[];
  systems: OrganizationSystem[];
  teams: string[];
}

export interface EcosystemItem {
  title: string;
  subtitle: string;
  description: string;
}

export interface EcosystemData {
  research: EcosystemItem;
  engineering: EcosystemItem;
  innovation: EcosystemItem;
}

export interface MemberDestination {
  name: string;
  logoUrl: string;
}

export interface MemberDestinationsData {
  title: string;
  subtitle: string;
  universities: MemberDestination[];
  companies: MemberDestination[];
}

export interface MemberStory {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  link: string;
}

export interface MemberStoriesData {
  title: string;
  subtitle: string;
  stories: MemberStory[];
}

export interface CooperationPartner {
  name: string;
  logoUrl: string;
}

export interface CooperationData {
  title: string;
  subtitle: string;
  partners: CooperationPartner[];
}

export interface AboutPageData {
  hero: AboutHeroData;
  whoWeAre: AboutWhoWeAreData;
  mission: AboutMissionData;
  organizationStructure: OrganizationStructureData;
  ecosystem: EcosystemData;
  memberDestinations: MemberDestinationsData;
  memberStories: MemberStoriesData;
  cooperation: CooperationData;
}