export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  type: "text" | "image";
  imageUrl?: string;
}

export interface PartnerNewsItem {
  id: number;
  title: string;
  brief: string;
  image: string;
  link: string;
}

export type ResearchProjectContent = {
  type: 'image-text' | 'text-only' | 'image-only';
  title?: string;
  description?: string;
  imageUrl?: string;
};

export type ResearchTeamProject = {
  id: string;
  teamName: string;    // 例如: "硬件团队"
  englishName: string; // 例如: "Hardware"
  logoPath: string;    // 例如: "/research/hardware_logo.svg"
  themeColor: string;  // 例如: "#CA3540" (用于渐变和文字)
  items: ResearchProjectContent[];
};

export interface ListPageItem {
  id: string | number;
  title: string;
  date: string;
  imageUrl?: string;
  summary?: string;
  category?: string;
  link: string;
}