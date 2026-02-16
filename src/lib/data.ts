import type { NewsItem } from "@/types";

import { ResearchTeamProject, ResearchProjectContent } from "@/types/index";

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
    imageUrl: "/assets/tmp/act.png",
    ctaLabel: "立即报名",
    link: "/news/activity/1",
  },
  {
    id: "2",
    title: "AI Hackathon2026高校联赛",
    date: "2026/2/9",
    status: "ended",
    imageUrl: "/assets/tmp/act.png",
    ctaLabel: "活动截止",
    link: "/news/activity/2",
  },
  {
    id: "3",
    title: "AI Hackathon2026高校联赛",
    date: "2026/2/9",
    status: "active",
    imageUrl: "/assets/tmp/act.png",
    ctaLabel: "立即报名",
    link: "/news/activity/3",
  },
];

export const LATEST_NEWS = {
  featured: [
    {
      id: 1,
      title: "X-Lab创新案例登上《教育家》",
      summary:
        "三大学生创新团队的实践案例，生动展现了X-Lab在AI时代培育创新人才的显著成效。",
      image: "/assets/tmp/late.png",
      category: "教育",
      date: "2026/2/5",
    },
    {
      id: 2,
      title: "X-Lab创新案例登上《教育家》",
      summary:
        "三大学生创新团队的实践案例，生动展现了X-Lab在AI时代培育创新人才的显著成效。",
      image: "/assets/tmp/late.png",
      category: "教育",
      date: "2026/2/5",
    },
    {
      id: 3,
      title: "X-Lab创新案例登上《教育家》",
      summary:
        "三大学生创新团队的实践案例，生动展现了X-Lab在AI时代培育创新人才的显著成效。",
      image: "/assets/tmp/late.png",
      category: "教育",
      date: "2026/2/5",
    },
    {
      id: 4,
      title: "X-Lab创新案例登上《教育家》",
      summary:
        "三大学生创新团队的实践案例，生动展现了X-Lab在AI时代培育创新人才的显著成效。",
      image: "/assets/tmp/late.png",
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
    date: { day: "21", month: "11", year: "2025" },
    title: "实验室团队参与数字城市品牌杭州论坛",
    desc: "中国数字城市品牌杭州论坛召开，数字城市品牌评估指标体系登台分享。",
    img: "/research/research_news1.jpeg",
    link: "https://mp.weixin.qq.com/s/f2r6b_q4X1I-0YBnAlq3mg"
  },
  {
    id: 2,
    date: { day: "1", month: "7", year: "2025" },
    title: "硬件课题顶刊发表",
    desc: "成果登上IEEE顶级期刊（IF=46.7）！X-Lab学生团队自主动手实践，用“磁”科技打造包容性生命体征监测设备。",
    img: "/research/research_news2.png",
    link: "https://mp.weixin.qq.com/s/GUtzLNEMss8EbnFxpS1AJA"
  },
];

export const RESEARCH_ACHIEVEMENTS_BRIEF = "浙江大学启真交叉学科创新创业实验室的科研成果丰硕。这里交代科研成果。\n 非常多的科研成果。\n 非常丰硕的科研成果。\n 四个团队合力完成了很多科研成果。"

export const HARDWARE_TEAM_ACHIEVEMENTS: ResearchTeamProject = {
  id: "1",
  teamName: "硬件团队",
  englishName: "Hardware",
  logoPath: "/research/hardware_logo.svg",
  themeColor: "#CA3540",
  items: [
    {
      type: 'image-text',
      title: "水果采摘机器人",
      description: "水果采摘机器人是一款集水果分拣与采摘功能为一体的平台，目的在于将检测从产后前移至产中，从而减少由于延迟分拣带来的利益损失。其分拣技术由一种新型小型光谱仪实现，其被安置在采摘设备——机械手的指尖及手掌，通过可见/近红外特征光谱法采样获得水果表面吸收光谱数据，将CMOS数据传输到移动端，结合部署在服务器的神经网络模型预测其糖度。同时，通过掌心的视触觉传感器，进一步获得水果的软硬度数据，由此控制机械手采摘力度，从而实现无损采摘，保证水果品质。除小型光谱仪之外，该项目还包括机械手表面柔性部位选材与设计、糖度预测模型的开发、光谱仪与移动端的数据通信以及机械手自主采摘控制算法的设计等内容。",
      imageUrl: "/research/achievements/hardware1.png"
    },
    {
      type: 'text-only',
      title: "“温室慧眼”——大棚作物管理全自动机器人",
      description: "“温室慧眼”是一款农业物联网巡检机器人。其可对大棚内的植物生长环境进行移动监测，将温度、湿度、PH等数据实时上传云端，当数据低于阈值时自动报警。深度视觉相机判断作物成熟度，更好呵护植物生长过程。"
    },
    {
      type: 'text-only',
      title: "WIFI呼吸监测",
      description: "利用 WiFi 和毫米波技术，实现无感呼吸检测与动作识别，通过 “硬件 + 算法 + 软件” 一体化方案，在养老院、医疗机构等场景提供情绪分析与人体动作探测能力。目前正分阶段推进数据采集、算法复现、软件开发和硬件产品化，核心攻克多人呼吸信号叠加等技术难点，为非接触式健康监测与安防应用提供新方案。"
    }
  ]
};

export const SOFTWARE_TEAM_ACHIEVEMENTS: ResearchTeamProject = {
  id: "2",
  teamName: "软件团队",
  englishName: "Software",
  logoPath: "/research/software_logo.svg",
  themeColor: "#0066FF",
  items: [
    {
      type: 'image-text',
      title: "BPA-SAM：面向工笔画数据的SAM边界框提示增强方法",
      description: "基于 SAM 模型的交互式艺术导览产品，针对现有电子导览 “被动长文介绍” 或 “对作品语焉不详” 的痛点，依托 SAM 模型强大的图像分割能力，结合 “谢赫六法” 对国画进行系统性标注，实现从辅助标注到全自动标注的迭代优化，最终为用户提供物象级信息颗粒度展示与交互式自主文创的探索式观览体验，让艺术欣赏更主动、更深入。",
      imageUrl: "/research/achievements/software1.png"
    },
    {
      type: 'text-only',
      title: "双层级动态图神经网络预测模型 MMTN",
      description: "DUAL-HIERARCHICAL DYNAMIC GRAPH NEURAL NETWORK FOR MULTI-MODAL DEMAND PREDICTION \n 针对现有模型难以应对的时空异质性、多模式换乘依赖和需求突变等问题，我们通过拓扑初始化、波动检测和 Copula 子图建模三大核心模块，构建了能动态适应需求变化的预测框架 MMTN。在纽约市出租车与共享单车的真实数据集上，MMTN在 1 步和 12 步预测任务中，各项指标均显著优于现有基线模型，为城市多模式交通管理提供了更精准、更鲁棒的决策支持。"
    },
    {
      type: 'image-only',
      title: "AI4SYS",
      imageUrl: "/research/achievements/software2.png"    
    },
    {
      type: 'image-only',
      title: "AI数学推理",
      imageUrl: "/research/achievements/software3.png" 
    },
    {
      type: 'image-only',
      title: "NL2TF",
      imageUrl: "/research/achievements/software4.png" 
    }
  ]
};

export const OPERATION_TEAM_ACHIEVEMENTS: ResearchTeamProject = {
  id: "3",
  teamName: "运营团队",
  englishName: "Operation",
  logoPath: "/research/operation_logo.svg",
  themeColor: "#FFCA0B",
  items: [
    {
      type: 'image-text',
      title: "数字城市品牌",
      description: "研究数字化时代，城市的品牌建构与品牌传播效果情况，为政府部门优化城市品牌战略、学术机构深化相关研究、企业把握投资机遇提供数据支撑与理论参考。项目聚焦六大社交媒体平台，从城市品牌口号、城市品牌宣传片、城市品牌标志等维度分析城市品牌建构情况；从视觉标识、政治经济、文化历史、社会生活、生态环境五大维度来测量城市品牌形象的认知度和美誉度。",
      imageUrl: "/research/achievements/operation1.jpeg"
    }
  ]
};


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
  { name: "浙江大学图书馆", url: "https://libweb.zju.edu.cn/" },
  { name: "Github", url: "https://github.com" },
  { name: "Google Scholar", url: "https://scholar.google.com/" },
  { name: "Web of Science", url: "https://www.webofscience.com" },
  { name: "IEEE Xplore", url: "https://ieeexplore.ieee.org" },
  { name: "Elsevier ScienceDirect", url: "https://www.sciencedirect.com" },
  { name: "SpringerLink", url: "https://link.springer.com" },
];

export const SHORT_TERM_PROJECTS = [
  {
    id: 1,
    title: "矢量激光投影仪X-Laser",
    description: "X-Laser是一款小型的矢量激光投影仪，旨在为用户带来全新激光体验——轻松创建个性投影，应用于各类场景中。\nX-Laser以激光搭建虚拟现实的桥梁，为影像呈现、艺术创造、行车导航等应用提供创意新思路。\n最大特色就在于其允许用户自制投影图案的功能。这意味着使用者不仅限于选用预设的图形或模式，他们可以根据个人的想象力和需求创建独一无二的图案。",
    image: "/images/engineering/laser.jpg",
    image_title: "X-laser"
  },
  {
    id: 2,
    title: "智能机械宠物狗",
    description: "我们的项目是一个以STM32为核心的智能机械宠物狗。它不仅仅是一个模型，更是一个集成了前沿技术的桌面级伴侣。通过内置的语音识别模块，用户可以直接用声音向它发出“坐下”、“握手”等指令，实现自然流畅的语音交互。同时，STM32主控板精准驱动多个舵机，赋予它“摇摆”、“伸懒腰”等生动的仿生动作。",
    image: "/images/engineering/robot_pet.jpg",
    image_title: "智能机械宠物狗"
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

export const ENGINEERING_TEXT_NEWS = [
  { id: 101, title: "工程实践成果发布", date: "2025-06-12" },
  { id: 102, title: "硬件实践课程开放报名", date: "2025-05-02" },
  { id: 103, title: "项目路演活动回顾", date: "2025-03-18" },
  { id: 104, title: "短期项目中期展示", date: "2025-04-08" },
];

export const ENGINEERING_IMAGE_NEWS = [
  { id: 201, title: "项目现场图文 01", date: "2025-06-12" },
  { id: 202, title: "项目现场图文 02", date: "2025-05-20" },
  { id: 203, title: "项目现场图文 03", date: "2025-04-18" },
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

export interface HomeLabNewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
}

export const HOME_LAB_NEWS: HomeLabNewsItem[] = [
  {
    id: "ln1",
    title: "X-Lab举行跨年团建",
    date: "2026年01月02",
    summary: "2025年的最后一天，喇叭们前往天台进行一个团建占位占位占位……",
    imageUrl: "/assets/tmp/占位图1.png",
  },
  {
    id: "ln2",
    title: "新闻标题标题标题标题标题标题标题题标题标题...",
    date: "2026年01月02",
    summary: "XX教授发表文章于XX报这是一条新闻放在这里占位占位占位",
    imageUrl: "/assets/tmp/占位图1.png",
  },
  {
    id: "ln3",
    title: "新闻标题标题标题标题标题标题标题",
    date: "2026年01月02",
    summary: "XX教授发表文章于XX报这是一条新闻放在这里占位占位占位",
    imageUrl: "/assets/tmp/占位图1.png",
  },
  {
    id: "ln4",
    title: "新闻标题标题标题标题标题",
    date: "2026年01月02",
    summary: "XX教授发表文章于XX报这是一条新闻放在这里占位占位占位",
    imageUrl: "/assets/tmp/占位图1.png",
  },
];

// 兼容旧结构
export const HOME_NEWS_LIST: NewsItem[] = HOME_LAB_NEWS.map((item) => ({
  id: item.id,
  title: item.title,
  date: item.date,
  type: "text",
  imageUrl: item.imageUrl,
}));

export const HOME_NEWS_IMAGES: NewsItem[] = HOME_LAB_NEWS.map((item) => ({
  id: item.id,
  title: item.title,
  date: item.date,
  type: "image",
  imageUrl: item.imageUrl,
}));