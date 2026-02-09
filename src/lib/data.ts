import type { NewsItem } from "@/types";

export const ABOUT_Intro = {
  whoWeAre: "浙江大学启真交叉学科创新创业实验室成立于...",
  mission: "实验室致力于汇聚最活跃的创新人才...",
};

export const TEAM_LIST = [
  { id: 1, name: "管理团队", description: "负责实验室整体运营..." },
  { id: 2, name: "技术指导团队", description: "提供硬核技术支持..." },
  { id: 3, name: "产学研合作团队", description: "联结产业资源与学术力量..." },
  { id: 4, name: "项目孵化团队", description: "支持项目孵化与成果转化..." },
];

export const COOP_PARTNERS = {
  faculties: ["CS", "Design", "Control", "Media"],
  enterprises: ["Huawei", "Aliyun", "ByteDance"],
};

export type ActivityStatus = "active" | "ended";

export interface ActivityItem {
  id: string;
  title: string;
  date: string;
  status: ActivityStatus;
  imageUrl: string;
}

export const ACTIVITIES: ActivityItem[] = [
  {
    id: "1",
    title: "AI Hackathon Tour",
    date: "2025.05.20",
    status: "active",
    imageUrl: "/images/placeholder-square.jpg",
  },
  {
    id: "2",
    title: "文广",
    date: "2024.12.10",
    status: "ended",
    imageUrl: "/images/placeholder-square.jpg",
  },
  {
    id: "3",
    title: "创新训练营",
    date: "2024.10.18",
    status: "active",
    imageUrl: "/images/placeholder-square.jpg",
  },
];

export const LATEST_NEWS = {
  featured: [
    { id: 1, title: "新闻标题示例1", image: "/images/placeholder-wide.jpg" },
    { id: 2, title: "新闻标题示例2", image: "/images/placeholder-wide.jpg" },
    { id: 3, title: "新闻标题示例3", image: "/images/placeholder-wide.jpg" },
    { id: 4, title: "新闻标题示例4", image: "/images/placeholder-wide.jpg" },
  ],
  list: [
    { id: 5, title: "新闻名示例A", date: "2024-01-01" },
    { id: 6, title: "新闻名示例B", date: "2023-12-16" },
    { id: 7, title: "新闻名示例C", date: "2023-11-03" },
  ],
};

export const MEDIA_QUOTES = [
  { id: 1, content: "这是一个非常创新的实验室...", mediaName: "36Kr", logo: "" },
  { id: 2, content: "X-Lab展现了惊人的活力...", mediaName: "ZJU News", logo: "" },
  { id: 3, content: "交叉创新成果令人期待...", mediaName: "人民网", logo: "" },
  { id: 4, content: "青年创新生态的样板...", mediaName: "新华网", logo: "" },
  { id: 5, content: "产学研合作的典范案例...", mediaName: "澎湃新闻", logo: "" },
  { id: 6, content: "跨学科人才培养的新尝试...", mediaName: "腾讯新闻", logo: "" },
];

export const RESEARCH_NEWS = [
  {
    id: 1,
    date: { day: "12", month: "Oct" },
    title: "科研项目中期答辩完成",
    desc: "2025年度X-Project第一阶段...",
    img: "/placeholder.jpg",
  },
  {
    id: 2,
    date: { day: "08", month: "Sep" },
    title: "跨学科实验平台上线",
    desc: "协同硬件与软件研究方向...",
    img: "/placeholder.jpg",
  },
];

export const RESEARCH_PROJECTS = [
  {
    id: 1,
    title: "多模态交互系统",
    description: "本项目致力于研究...",
    image: "/images/project1.jpg",
    align: "left",
  },
  {
    id: 2,
    title: "智能硬件底座",
    description: "基于RISC-V架构的...",
    image: "/images/project2.jpg",
    align: "right",
  },
];

export const RESEARCH_TOOLS = [
  { name: "Google Scholar", icon: "/icons/scholar.png", url: "https://scholar.google.com" },
  { name: "arXiv", icon: "/icons/arxiv.png", url: "https://arxiv.org" },
  { name: "GitHub", icon: "/icons/github.png", url: "https://github.com" },
  { name: "Notion", icon: "/icons/notion.png", url: "https://notion.so" },
];

export const SHORT_TERM_PROJECTS = [
  {
    id: 1,
    title: "智能机械臂控制系统",
    description: "基于视觉反馈的闭环控制...",
    image: "/images/engineering/arm.jpg",
    bgPattern: "dots",
  },
  {
    id: 2,
    title: "自平衡小车",
    description: "PID算法的经典应用案例...",
    image: "/images/engineering/car.jpg",
    bgPattern: "lines",
  },
];

export const SPECIAL_COLUMNS = [
  {
    id: "noah-ark",
    title: "诺亚方舟",
    coverImage: "/images/engineering/noah-cover.jpg",
    link: "/ecosystem/engineering/columns/noah-ark",
  },
  {
    id: "three-sounds",
    title: "三声万物",
    coverImage: "/images/engineering/three-sounds-cover.jpg",
    link: "/ecosystem/engineering/columns/three-sounds",
  },
];

export const COLUMN_ARTICLES = {
  "noah-ark": [
    { id: 101, title: "诺亚方舟第一期成果汇报", thumb: "", url: "/news/101" },
    { id: 102, title: "硬件设计实战心得", thumb: "", url: "/news/102" },
  ],
  "three-sounds": [
    { id: 201, title: "声音可视化的探索", thumb: "", url: "/news/201" },
  ],
};

export const INNOVATION_HERO = {
  title: "X-Lab 孵化项目 Weir 获得 36Kr 报道",
  description: "谓尔团队在虚拟数字人领域取得突破...",
  image: "/images/innovation/hero-news.jpg",
  link: "/news/1",
};

export const BUSINESS_PROJECTS = [
  {
    id: 1,
    name: "谓尔 (Weir)",
    description: "致力于打造次世代的数字人交互体验...",
    image: "/images/innovation/weir.jpg",
    link: "https://mp.weixin.qq.com/...",
  },
  {
    id: 2,
    name: "商业探索项目 B",
    description: "项目占位描述...",
    image: "/placeholder.jpg",
    link: "#",
  },
  {
    id: 3,
    name: "商业探索项目 C",
    description: "项目占位描述...",
    image: "/placeholder.jpg",
    link: "#",
  },
];

export const DELTA_X_INFO = {
  whatIs: "Delta X 是 X-Lab 旗下的创投生态品牌...",
  whatCanDo: "提供资金支持、导师辅导、资源对接...",
  vision: "成为高校中最具影响力的创投平台...",
  contactQr: "/images/qr-helper.jpg",
};

export const LIFE_VIDEO = {
  url: "https://www.example.com/lab-video.mp4",
  poster: "/images/video-cover.jpg",
  tags: ["主体性", "社会化", "使命感", "专业性"],
};

export const TRAVEL_MOMENTS = [
  { id: 1, title: "夏日团建纪实", image: "", offset: true, link: "#" },
  { id: 2, title: "跨学科工作坊", image: "", offset: false, link: "#" },
  { id: 3, title: "校外调研之旅", image: "", offset: true, link: "#" },
  { id: 4, title: "创新沙龙", image: "", offset: false, link: "#" },
  { id: 5, title: "深夜共创", image: "", offset: true, link: "#" },
];

export const LAB_MERCH = [
  { id: 1, name: "X-Lab 帆布包", desc: "极简设计，承载创意", img: "" },
  { id: 2, name: "周年纪念徽章", desc: "记录每一个里程碑", img: "" },
  { id: 3, name: "灵感贴纸", desc: "创意灵感随手贴", img: "" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    content: "在 Lab 的日子里，我学会了如何将想法落地...",
    author: "张三",
    role: "23级成员",
  },
  {
    id: 2,
    content: "跨学科的碰撞总是能带来意想不到的灵感...",
    author: "李四",
    role: "24级成员",
  },
  {
    id: 3,
    content: "这里的每一次协作都让我更接近未来...",
    author: "王五",
    role: "项目负责人",
  },
];

// 首页轮播数据
export const HOME_BANNERS = [
  {
    id: 1,
    label: "Banner 1",
    link: "#",
    imageUrl: "/assets/home/tmp/banner.svg",
  },
  {
    id: 2,
    label: "Banner 2",
    link: "#",
    imageUrl: "/assets/home/tmp/Frame 101.svg",
  },
  {
    id: 3,
    label: "Banner 3",
    link: "#",
    imageUrl: "/assets/home/tmp/banner.svg",
  },
  {
    id: 4,
    label: "Banner 4",
    link: "#",
    imageUrl: "/assets/home/tmp/Frame 101.svg",
  },
];

// 首页新闻列表
export const HOME_NEWS_LIST: NewsItem[] = [
  {
    id: "n1",
    title: "实验室动态新闻标题占位 01",
    date: "2026-02-01",
    type: "text",
  },
  {
    id: "n2",
    title: "实验室动态新闻标题占位 02",
    date: "2026-01-28",
    type: "text",
  },
];

// 首页图片新闻
export const HOME_NEWS_IMAGES: NewsItem[] = [
  {
    id: "i1",
    title: "图片新闻占位 01",
    date: "2026-02-01",
    type: "image",
    imageUrl: "https://placehold.co/320x200",
  },
  {
    id: "i2",
    title: "图片新闻占位 02",
    date: "2026-01-25",
    type: "image",
    imageUrl: "https://placehold.co/320x200",
  },
  {
    id: "i3",
    title: "图片新闻占位 03",
    date: "2026-01-10",
    type: "image",
    imageUrl: "https://placehold.co/320x200",
  },
];
