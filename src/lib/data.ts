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
  ctaLabel: string;
  link: string;
}

export const ACTIVITIES: ActivityItem[] = [
  {
    id: "1",
    title: "AI Hackathon2026高校联赛",
    date: "2026/2/9",
    status: "active",
    imageUrl: "",
    ctaLabel: "立即报名",
    link: "/news/activity/1",
  },
  {
    id: "2",
    title: "AI Hackathon2026高校联赛",
    date: "2026/2/9",
    status: "ended",
    imageUrl: "",
    ctaLabel: "活动截止",
    link: "/news/activity/2",
  },
  {
    id: "3",
    title: "AI Hackathon2026高校联赛",
    date: "2026/2/9",
    status: "active",
    imageUrl: "",
    ctaLabel: "立即报名",
    link: "/news/activity/3",
  },
];

export const LATEST_NEWS = {
  featured: [
    {
      id: 1,
      title: "X-Lab创新案例登上《教育家》",
      summary: "三大学生创新团队的实践案例，生动展现了X-Lab在AI时代培育创新人才的显著成效。",
      image: "",
      category: "教育",
      date: "2026/2/5",
    },
    {
      id: 2,
      title: "X-Lab创新案例登上《教育家》",
      summary: "三大学生创新团队的实践案例，生动展现了X-Lab在AI时代培育创新人才的显著成效。",
      image: "",
      category: "教育",
      date: "2026/2/5",
    },
    {
      id: 3,
      title: "X-Lab创新案例登上《教育家》",
      summary: "三大学生创新团队的实践案例，生动展现了X-Lab在AI时代培育创新人才的显著成效。",
      image: "",
      category: "教育",
      date: "2026/2/5",
    },
    {
      id: 4,
      title: "X-Lab创新案例登上《教育家》",
      summary: "三大学生创新团队的实践案例，生动展现了X-Lab在AI时代培育创新人才的显著成效。",
      image: "",
      category: "教育",
      date: "2026/2/5",
    },
  ],
  list: [
    {
      id: 5,
      title: "X-Lab创新案例登上《教育家》这里还是占位占位占位占位占位占位占位",
      summary: "XX教授发表文章于XX报这是一条新闻放在这里占位占位占位",
      date: "2026年01月02",
    },
    {
      id: 6,
      title: "X-Lab创新案例登上《教育家》这里还是占位占位占位占位占位占位占位",
      summary: "XX教授发表文章于XX报这是一条新闻放在这里占位占位占位",
      date: "2026年01月02",
    },
    {
      id: 7,
      title: "X-Lab创新案例登上《教育家》这里还是占位占位占位占位占位占位占位",
      summary: "XX教授发表文章于XX报这是一条新闻放在这里占位占位占位",
      date: "2026年01月02",
    },
  ],
};

export const MEDIA_QUOTES = [
  { id: 1, content: "“浙江大学本科生陈奕好与同伴将灵光一闪的点子，转化为具有社会价值的科技产品……”", mediaName: "人民日报", date: "2025/10/17", logo: "" },
  { id: 2, content: "“浙江大学本科生陈奕好与同伴将灵光一闪的点子，转化为具有社会价值的科技产品……”", mediaName: "人民日报", date: "2025/10/17", logo: "" },
  { id: 3, content: "“浙江大学本科生陈奕好与同伴将灵光一闪的点子，转化为具有社会价值的科技产品……”", mediaName: "人民日报", date: "2025/10/17", logo: "" },
  { id: 4, content: "“浙江大学本科生陈奕好与同伴将灵光一闪的点子，转化为具有社会价值的科技产品……”", mediaName: "人民日报", date: "2025/10/17", logo: "" },
  { id: 5, content: "“浙江大学本科生陈奕好与同伴将灵光一闪的点子，转化为具有社会价值的科技产品……”", mediaName: "人民日报", date: "2025/10/17", logo: "" },
  { id: 6, content: "“浙江大学本科生陈奕好与同伴将灵光一闪的点子，转化为具有社会价值的科技产品……”", mediaName: "人民日报", date: "2025/10/17", logo: "" },
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