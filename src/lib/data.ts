import type {
  Activity,
  NewsItem,
  LabNews,
  MediaQuote,
  Banner,
  Mentor,
  ResourceCard,
  ResourceType,
  ResearchTeamProject,
  ArticleDetail,
  MemberStory,
} from "@/types";

// 导入文章数据
import {
  LATEST_ARTICLES,
  LATEST_ARTICLE_IDS,
  ACTIVITY_ARTICLES,
  ACTIVITY_ARTICLE_IDS,
  MEDIA_ARTICLES,
  MEDIA_ARTICLE_IDS,
} from "./articles";

// =============================================================================
// 独立列表数据（与 articles/ 分离，可灵活配置外部链接）
// =============================================================================

/**
 * 最新发布 - 独立定义，支持外部链接
 */
export const FEATURED_NEWS: NewsItem[] = [
  {
    id: 1,
    title: "X-Lab学生创新案例登上光明日报《教育家》杂志！",
    date: "2026-02-05",
    type: "image",
    imageUrl: "/assets/news/latest/1.png",
    summary: "",
    category: "新闻",
    link: "https://mp.weixin.qq.com/s/qDJXkOk-lscy-Swql28NbQ",
  },
  {
    id: 2,
    title:
      "X-Lab×万事利丝绸董事长李建华：在丝绸的经纬之间，织一场跨越千年的创新对话",
    date: "2026-02-28",
    type: "image",
    imageUrl: "/assets/news/latest/2.png",
    summary: "",
    category: "新闻",
    link: "https://mp.weixin.qq.com/s/7rNqRXQWTYYdCYtqua2WzQ",
  },
  {
    id: 3,
    title: "中国数字城市品牌杭州论坛召开，数字城市品牌评估指标体系登台分享",
    date: "2025-11-21",
    type: "image",
    imageUrl: "/assets/news/latest/3.jpeg",
    summary: "",
    category: "新闻",
    link: "https://mp.weixin.qq.com/s/f2r6b_q4X1I-0YBnAlq3mg",
  },
  {
    id: 4,
    title:
      "小组第一，人民日报、中青报等多家主流媒体报道！X-Lab Voxsee团队斩获国金",
    date: "2025-10-22",
    type: "image",
    imageUrl: "/assets/news/latest/4.png",
    summary: "",
    category: "新闻",
    link: "https://mp.weixin.qq.com/s/KM3oWdKC1A2kst6BDbrgPg",
  },
];

// 新闻列表（文字列表展示）
export const NEWS_LIST: NewsItem[] = [
  {
    id: 101,
    title: "就在本周，邀你观战",
    date: "2026-03-05",
    type: "text",
    summary: "嘉宾揭晓&观众招募开启",
    category: "成果",
    link: "https://mp.weixin.qq.com/s/WYfqI6p8glQP0ZC0sES7IA",
  },
  {
    id: 102,
    title: "信心，是可以被创造的",
    date: "2026-02-24",
    type: "text",
    summary: "2026跨学科实践训练营暨X-Lab招生正式启动",
    category: "实践",
    link: "https://mp.weixin.qq.com/s/C2bOxVidwBm-jnudioNTTQ",
  },
  {
    id: 103,
    title: "2025年终总结",
    date: "2026-02-16",
    type: "text",
    summary: "三载耕耘，以交叉为刃破学科之壁；今朝共聚，用创新为火育未来之才。",
    category: "人物",
    link: "https://mp.weixin.qq.com/s/h8ci0ZGL4cKvgEljAtda7Q",
  },
];

/**
 * 新闻Hero区域数据
 */
export const NEWS_HERO = {
  title: "2025 X-Lab 年终总结",
  description:
    "三载耕耘，以交叉为刃破学科之壁；今朝共聚，用创新为火育未来之才。",
  imageSrc: "/assets/news/banner.jpg",
  linkUrl: "https://mp.weixin.qq.com/s/j-Dd7lQEdvhCtvroi_EuXg",
};

/**
 * 活动招募 - 独立定义，支持外部链接
 */
export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: "Z+科创训练营五期报名开启",
    date: "2026-02-05",
    status: "active",
    imageUrl: "/assets/news/activities/1.png",
    ctaLabel: "立即报名",
    link: "https://mp.weixin.qq.com/s/f6hlYWj1Ml4aD8fBt1v9EA",
    category: "实践",
  },
  {
    id: 2,
    title: "AI Hackathon Tour 2026 · 浙江大学站",
    date: "2026-01-10",
    status: "active",
    imageUrl: "/assets/news/activities/2.png",
    ctaLabel: "立即报名",
    link: "https://mp.weixin.qq.com/s/Pg43gvPXw5IWkRZffxPwNQ",
    category: "实践",
  },
  {
    id: 3,
    title: "MiniCamp高校行・浙江大学站第二期，招募启动！",
    date: "2025-12-16",
    status: "ended",
    imageUrl: "/assets/news/activities/3.png",
    ctaLabel: "查看详情",
    link: "https://mp.weixin.qq.com/s/Bj_KBNRwHmGLViaLZUHg6A",
    category: "实践",
  },
  {
    id: 4,
    title: "快来品鉴（不能吃的）匠心手作！",
    date: "2025-12-08",
    status: "ended",
    imageUrl: "/assets/news/activities/4.png",
    ctaLabel: "查看详情",
    link: "https://mp.weixin.qq.com/s/YZdyPd3XShDWGT7GZyX1cw",
    category: "成果",
  },
  {
    id: 5,
    title: "华五AI+X微专业·创新实训营等你加入！",
    date: "2025-11-20",
    status: "ended",
    imageUrl: "/assets/news/activities/5.png",
    ctaLabel: "查看详情",
    link: "https://mp.weixin.qq.com/s/NYGAlGHa87-PIlQxhD1QTw",
    category: "实践",
  },
  {
    id: 6,
    title: "AI+X高校行浙江大学站！打造你的专属创意Agent",
    date: "2025-10-11",
    status: "ended",
    imageUrl: "/assets/news/activities/6.png",
    ctaLabel: "查看详情",
    link: "https://mp.weixin.qq.com/s/S0Ir0EI101MpQxxsXw9umA",
    category: "实践",
  },
  {
    id: 7,
    title: "企业法律风险防控实战课：公司治理×融资×股权激励全解析",
    date: "2025-06-27",
    status: "ended",
    imageUrl: "/assets/news/activities/7.png",
    ctaLabel: "查看详情",
    link: "https://mp.weixin.qq.com/s/K3DUmU96_zr8TWrImj57ZQ",
    category: "教育",
  },
  {
    id: 8,
    title: "X-Lab运营部门暑期训练营报名｜暑期冒险地图即将开启！",
    date: "2025-06-22",
    status: "ended",
    imageUrl: "/assets/news/activities/8.png",
    ctaLabel: "查看详情",
    link: "https://mp.weixin.qq.com/s/VmHoO87zJxBpT3VkSvBqPQ",
    category: "实践",
  },
  {
    id: 9,
    title: "真格校园行·校园创业分享会重磅来袭！",
    date: "2025-05-26",
    status: "ended",
    imageUrl: "/assets/news/activities/9.png",
    ctaLabel: "查看详情",
    link: "https://mp.weixin.qq.com/s/QlCzSe-VAD2HWaOJ46xULw",
    category: "教育",
  },
  {
    id: 10,
    title: "小红书来临水了？种草证等你来拿！",
    date: "2025-04-30",
    status: "ended",
    imageUrl: "/assets/news/activities/10.png",
    ctaLabel: "查看详情",
    link: "https://mp.weixin.qq.com/s/qDQOCQs_BY1KuK_XUkINdg",
    category: "实践",
  },
  {
    id: 11,
    title: "就在今明！5场X-Lab招生宣讲会来袭，文末福利",
    date: "2025-03-20",
    status: "ended",
    imageUrl: "/assets/news/activities/11.png",
    ctaLabel: "查看详情",
    link: "https://mp.weixin.qq.com/s/V40s37_N-VJuhAy-qUxAtg",
    category: "教育",
  },
];

/**
 * 媒体报道 - 独立定义，支持外部链接
 */
export const MEDIA_QUOTES: MediaQuote[] = [
  {
    id: 1,
    title: "三个零零后的元宇宙社交实验：向内看，也是一种Meta",
    content:
      "向内看，解决元问题。现在是万物即可元宇宙的年代，但是具体践行时却大同小异，各有千秋。三个来自浙江大学的零零后便踏入元宇宙中社交实验，真正解决以人单位、以自我为起点的元问题……",
    mediaName: "华尔街日报",
    date: "2025-10-01",
    logoUrl: "",
    link: "https://www.woshipm.com/it/5331254.html",
  },
  {
    id: 2,
    title:
      "浙大团队一个元宇宙宠物项目，获苹果移动应用创新赛最具创新奖，吸引10多家风投追着投",
    content: "……这些巧妙的小设计，也让每一个用户都能更加了解自己。",
    mediaName: "钱江晚报",
    date: "2021-12-16",
    logoUrl: "",
    link: "https://www.toutiao.com/article/7042233108749353479/#:~:text=%E6%9C%80%E7%BB%88%EF%BC%8C%E6%9D%A5%E8%87%AA%E6%B5%99%E6%B1%9F%E5%A4%A7%E5%AD%A6%E7%9A%84%E4%BD%9C%E5%93%81%E3%80%8A%E8%B0%93%E5%B0%94%E3%80%8B%E8%8E%B7%E5%BE%97%E4%BA%86%E6%9C%80%E5%85%B7%E5%88%9B%E6%96%B0%E5%A5%96%E5%92%8C%E4%B8%80%E7%AD%89%E5%A5%96%EF%BC%9B%E6%9D%A5%E8%87%AA%E5%8D%8E%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E5%92%8C%E6%AD%A6%E6%B1%89%E7%BA%BA%E7%BB%87%E5%A4%A7%E5%AD%A6%E7%9A%84%E4%BD%9C%E5%93%81%E3%80%8A%E5%8D%B3%E6%8B%8D%E5%8D%B3%E5%94%B1%E3%80%8B%E3%80%81%E6%9D%A5%E8%87%AA%E5%8D%8E%E4%B8%AD%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6%E7%9A%84%E4%BD%9C%E5%93%81%E3%80%8A%E8%AE%B0%E5%BF%86%E8%BE%BE%E4%BA%BA%E3%80%8B%E4%BB%A5%E5%8F%8A%E6%9D%A5%E8%87%AA%E4%B8%8A%E6%B5%B7%E4%BA%A4%E9%80%9A%E5%A4%A7%E5%AD%A6%E7%9A%84%E4%BD%9C%E5%93%81%E3%80%8A%E6%8B%BE%E5%BF%86%E2%80%94%E2%80%94%E8%AE%A4%E7%9F%A5%E9%9A%9C%E7%A2%8D%E6%97%A9%E7%AD%9B%E5%BA%94%E7%94%A8%E3%80%8B%E8%8E%B7%E5%BE%97%E4%BA%86%E4%B8%80%E7%AD%89%E5%A5%96%E3%80%82,%E5%8F%A6%E5%A4%96%E5%9C%A8%E2%80%9C%E5%85%83%E5%AE%87%E5%AE%99%E2%80%9D%E7%AD%89%E6%A6%82%E5%BF%B5%E6%97%A5%E7%9B%8A%E7%81%AB%E7%88%86%E7%9A%84%E5%BD%93%E4%B8%8B%EF%BC%8C%E4%BB%8A%E5%B9%B4%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E5%88%9B%E6%96%B0%E8%B5%9B%E8%BF%98%E6%96%B0%E5%A2%9E%E4%BA%86AR%E8%B5%9B%E9%81%93%EF%BC%8C%E6%9D%A5%E8%87%AA%E6%B5%99%E6%B1%9F%E5%A4%A7%E5%AD%A6%E7%9A%84%E4%BD%9C%E5%93%81%E3%80%8AARCT%E2%80%94%E2%80%94%E5%88%9B%E9%80%A0%E5%9F%8E%E5%B8%82%E6%96%B0%E8%A7%86%E7%95%8C%E3%80%8B%E8%8E%B7%E5%BE%97AR%E8%B5%9B%E9%81%93%E4%B8%80%E7%AD%89%E5%A5%96%E3%80%82",
  },
  {
    id: 3,
    title:
      "灵活“小胖墩”现身养老院，还能用杭州话唠嗑！浙大“00后”团队的设计，实用！",
    content:
      "……将自己掌握的专业知识运用于机器人，通过自己的努力，为机器人与智慧医疗的结合开拓出一条路，让“X-Spider”普及到老年人的生活中。",
    mediaName: "浙江大学",
    date: "2021-11-01",
    logoUrl: "",
    link: "https://mp.weixin.qq.com/s/nSh2_SfKEHsEybY99iU5gg",
  },
  {
    id: 4,
    title: "在创新中成长 在奋斗中出彩",
    content:
      "面向视障者研制无障碍智能辅具、运用 “端云融合” 技术实现性能与续航平衡，浙江大学本科生陈奕好与同伴将灵光一闪的点子，转化为具有社会价值的科技产品……",
    mediaName: "人民日报",
    date: "2025-10-17",
    logoUrl: "",
    link: "https://www.peopleapp.com/column/30050529241-500007147792",
  },
  {
    id: 5,
    title: "青年创客亮剑！大创赛成果展现硬核新科技",
    content:
      "聚焦特殊群体需求与民生安全，青年团队用技术书写社会责任。浙江大学Voxsee团队的颈挂式无障碍智能辅具，充满了浓重的人文情怀。",
    mediaName: "人民网",
    date: "2025-10-15",
    logoUrl: "",
    link: "http://edu-app.people.cn/n1/2025/1015/c1006-40582912.html",
  },
  {
    id: 6,
    title: "创新千帆进，争做弄潮儿",
    content:
      "在浙江大学，启真交叉学科创新创业实验室会聚30多个不同专业的本科生，帮助他们“组团”创新创业……",
    mediaName: "中国教育报",
    date: "2025-10-16",
    logoUrl: "",
    link: "http://www.jyb.cn/rmtzgjyb/202510/t20251016_2111401446.html",
  },
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

export const RESEARCH_ACHIEVEMENTS_BRIEF = "实验室背靠多学科、产学研交叉指导团队，打破学科壁垒，充分发挥学科交叉优势，聚焦跨越学科边界的开放性研究，致力于实质性智慧创造与规律发现，推动师生在交叉学科领域中产出具有长期价值的科学研究成果。"

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
      title: "面向大语言模型概念探索的可视分析系统",
      imageUrl: "/research/achievements/software2.png"    
    },
    {
      type: 'image-only',
      title: "跨模态形式化的广义多模态推理框架",
      imageUrl: "/research/achievements/software3.png" 
    },
    {
      type: 'image-only',
      title: "多模态大语言模型引导的直接体绘制传递函数设计",
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
    description: "X-Laser以激光搭建虚拟现实的桥梁，为影像呈现、艺术创造、行车导航等应用提供创意新思路。\n最大特色就在于其允许用户自制投影图案的功能。这意味着使用者不仅限于选用预设的图形或模式，他们可以根据个人的想象力和需求创建独一无二的图案。",
    image: "/engineering/laser.jpg",
    brief: "X-Laser是一款小型的矢量激光投影仪，旨在为用户带来全新激光体验——轻松创建个性投影，应用于各类场景中。"
  },
  {
    id: 2,
    title: "智能机械宠物狗",
    description: "它不仅仅是一个模型，更是一个集成了前沿技术的桌面级伴侣。通过内置的语音识别模块，用户可以直接用声音向它发出“坐下”、“握手”等指令，实现自然流畅的语音交互。同时，STM32主控板精准驱动多个舵机，赋予它“摇摆”、“伸懒腰”等生动的仿生动作。",
    image: "/engineering/robot_pet.jpg",
    brief: "这是一个以STM32为核心的智能机械宠物狗。"
  },
  {
    id: 3,
    title: "像素时钟",
    description: "它支持基本的本地配置与参数保存，日常使用便捷直观。项目遵循开源思路完成搭建与调试，力求在有限硬件上呈现稳定、清晰的显示效果，适合桌面与宿舍等轻量场景。",
    image: "/engineering/pixel_clock.jpg",
    brief: "这是一款基于esp32C3的像素时钟，集时间显示、简单动画与闹钟于一体。"
  },
  {
    id: 4,
    title: "自定义键盘",
    description: "在连接电脑的时候，它将作为一个普通小键盘，正常使用；在独立供电时，它将作为一个简易游戏机，独立使用自带的类似雷霆战机的小游戏。",
    image: "/engineering/diy_keyboard.jpg",
    brief: "这是一个自定义小键盘。"
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

export const THREE_SOUNDS = [
  {
    id: 5,
    title: "X-Lab×万事利丝绸董事长李建华：在丝绸的经纬之间，织一场跨越千年的创新对话",
    imageUrl: "/engineering/three_sounds/wanshili.jpg",
    link: "https://mp.weixin.qq.com/s/7rNqRXQWTYYdCYtqua2WzQ",
    date: "2026-2-28"
  },
  {
    id: 4,
    title: "6元买断制 App 如何单挑亿万级算法？ NoFeed 开发者的“文艺复兴式”破局之道",
    imageUrl: "/engineering/three_sounds/nofeed.jpg",
    link: "https://mp.weixin.qq.com/s/_75ZOLSdgDrwtJmxGHaFng",
    date: "2025-09-16"
  },
  {
    id: 3,
    title: "智启纳威创始人胡旭升：在信息迷雾中逐光而行",
    imageUrl: "/engineering/three_sounds/nawei.jpg",
    link: "https://mp.weixin.qq.com/s/MvzEJlGhBa5y31HQD7t1Uw",
    date: "2025-08-16"
  },
  {
    id: 2,
    title: "INTHEPOND创始人dekko：不做中医翻译器，要做身体对话仪",
    imageUrl: "/engineering/three_sounds/inthepond.jpg",
    link: "https://mp.weixin.qq.com/s/L1s1XZHhhY7CMeOsgI_ATg",
    date: "2025-08-03"
  },
  {
    id: 1,
    title: "X-Lab×领挚科技CEO冯林润：不确定的冰原上，一场“非创不可”的旅程",
    imageUrl: "/engineering/three_sounds/lingzhi.jpg",
    link: "https://mp.weixin.qq.com/s/ZEe4GgCde_VL2nzQT_QSvw",
    date: "2025-07-07"
  },
];

export const NOAH_ARK = [
  {
    id: 3,
    title: "Outlier",
    imageUrl: "/engineering/noah_ark/p3.png",
    link: "https://mp.weixin.qq.com/s/H5_yvOeehNOhEMMYZvWFTw",
    date: "2025-12-22"
  },
  {
    id: 2,
    title: "通往电赛领奖台的两条航道（文末附开源链接）",
    imageUrl: "/engineering/noah_ark/p2.jpg",
    link: "https://mp.weixin.qq.com/s/pWen4dArjivRbFAG37g-Zg",
    date: "2025-10-27"
  },
  {
    id: 1,
    title: "被批「趁早收手」的一群本科生和他们的「刑具」革命",
    imageUrl: "/engineering/noah_ark/p1.jpg",
    link: "https://mp.weixin.qq.com/s/qZM0OWghhE9O66l4NjrJTA",
    date: "2025-08-09"
  },
];

export const ENGINEERING_TEXT_NEWS = [
  { 
    id: 101, 
    title: "社会实践丨探寻信电学院创新创业基因", 
    date: "2025-09-13",
    brief: "“为什么信电学院能走出这么多优秀的创业者？”“学院的哪些特质在企业发展中发挥了关键作用？”当我们来到深圳，真正走进这些充满活力的企业，与那些“身经百战”的企业领导者、技术人员交流时，答案逐渐变得清晰。",
    link: "https://mp.weixin.qq.com/s/bYIhsYp24db59KrdTclkKQ"
  },
  { 
    id: 102, 
    title: "社会实践丨深圳硬科技企业深度探秘", 
    date: "2025-09-05",
    brief: "8 月 11 日至 8 月 16 日，浙江大学启真交叉学科创新创业实验室的同学们前往深圳及周边城市开展了为期六天的社会实践活动。活动期间，同学们走访了涵盖 LED、数字音乐、医疗科技、光通信、文化科技等多元领域的多家企业，并与深圳校友们多次交流互动，收获了丰富的实践经历与深刻感悟。",
    link: "https://mp.weixin.qq.com/s/WDmB0GQ-Knkt9FQPA_Fd3A"
  },
  { 
    id: 103, 
    title: "技术交流丨新技术问世！X-Lab硬件部门最新发明——X-Laser矢量激光投影仪，正式揭晓！", 
    date: "2024-10-22",
    brief: "",
    link: "https://mp.weixin.qq.com/s/hb97azowmiBUpwoQ40yQMw"
  }
];

export const ENGINEERING_IMAGE_NEWS = [
  { 
    id: 201, 
    title: "空间开放｜金工中心3D打印实验室对外开放啦！", 
    date: "2025-10-24",
    image: "engineering/news/pic201.jpg",
    link: "https://mp.weixin.qq.com/s/-Nc8ARAO6Zc9EMSBxVVJmw"
  },
  { 
    id: 202, 
    title: "技术交流丨硬件团队2025年实习成员暑期项目展示会顺利举行：赴一场创意与科技交织的盛会", 
    date: "2025-10-9",
    image: "engineering/news/pic202.jpg",
    link: "https://mp.weixin.qq.com/s/GnKlyDCGCjVf2ZUeCAn-FQ"
  },
  { 
    id: 203, 
    title: "企业参访丨跨越次元的交流与探索：软件团队网易游戏雷火参访活动顺利进行", 
    date: "2025-12-10",
    image: "engineering/news/pic203.jpg",
    link: "https://mp.weixin.qq.com/s/q9Su0VQUYiW8sVvY0HOxqA"
  },
  { 
    id: 204, 
    title: "空间开幕 | 我好像被确诊为压缩包型人格", 
    date: "2024-12-12",
    image: "engineering/news/pic204.jpg",
    link: "https://mp.weixin.qq.com/s/BWhDH5w8zAIdjmdR4o2UMA"
  }
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
  title: "人民日报、中青报等多家主流媒体报道！X-Lab Voxsee团队斩获国金",
  description: "Voxsee团队关注到了常常被忽视的视障群体，成员将课堂学到的“端云融合”技术，带到了他们的操作台前。Voxsee解决了传统纯云端设备断网带来的安全隐患，平衡了性能与续航的矛盾，同时开创性地设计了颈挂式形态，让Voxsee拥有更大续航容量、更多功能模块。",
  image: "/innovation/voxsee.png",
  link: "https://mp.weixin.qq.com/s/KM3oWdKC1A2kst6BDbrgPg",
};

export const BUSINESS_PROJECTS = [
  {
    id: 1,
    name: "谓尔",
    description: "谓尔，一款全方位对用户本我内在进行数字孪生，在虚拟现实中建立虚拟自我，架起虚拟现实双向桥梁，以获得即时正向反馈来实现自我提升的面向虚拟世界的情感映射引擎——引导用户在现实生活中订立目标，经过细粒度用户画像与性格情绪可视化技术实现对用户内在本质的数字孪生虚拟身份，提供虚拟世界行业生态的接入口。该项目目前已获得五百万人民币天使融资支持，并获得了App Store首页推荐机会，得到了包括《华尔街日报》在内的多家媒体报道。",
    image: "/innovation/weir.png"
  },
  {
    id: 2,
    name: "X-MORE：个性表达光范式",
    description: "X-MORE，一款集概念创新与技术突破于一体的全新个性表达载体，致力于打造个性表达光范式。一张膜一支笔，一照、一擦、一画，实现无限创意的现实映射。团队创新性应用光敏性液晶，实现多频光照打印与紫外局部擦除，满足每个人的现实世界创作需求，提供一个能让每一个人轻松作画的个性表达工具，让世界所有人，都能成为画家。创写科技坚信，科技与想象，就代表无限可能。",
    image: "/innovation/x-more.png"
  },
  {
    id: 3,
    name: "邦布bangboo！：基于游戏《绝区零》中角色制作的二创作品",
    description: "在小红书首发即斩获1.5w+点赞，这款由实验室21级成员叶博文主导设计的Bangboo二创周边，正以前所未有的姿态从数字世界走入现实。他不仅仅是在制作一件玩具，更是在进行一场关于“机械与萌感”的深度实验。值得一提的是，博文也是“AR-Track——骑行AR抬头显示”的创始人，这种在硬核科技与潮玩艺术之间的跨界跳跃，恰恰构成了他独特的创作底色。",
    image: "/innovation/bangboo.png"
  },
];

export const DELTA_X_INFO = {
  whatIs: "Delta X 是 X-Lab 旗下的创投生态品牌...",
  whatCanDo: "提供资金支持、导师辅导、资源对接...",
  vision: "成为高校中最具影响力的创投平台...",
  contactQr: "/images/qr-helper.jpg",
};

export const PARTNER_NEWS = [
  {
    id: 1,
    title: "Delta X ✕ Bonjour! 战略合作正式达成！",
    brief: "在2026年的开端，Delta X 迭代未来与深受 Gen Z 喜爱的「Bonjour!数字名片」正式达成深度战略合作。打破传统创业孵化与社交的边界，为年轻创造者们打造一条从“想法”到“团队”再到“项目”的全新路径。",
    image: "innovation/partner_news/Bonjour.png",
    link: "https://mp.weixin.qq.com/s/_EuwZO-KCEMsYsDl72YMkw"
  },
  {
    id: 2,
    title: "Delta X 迭代未来与Datawhale社区正式达成深度合作",
    brief: "2026年伊始，Delta X 迭代未来与国内领先的AI开源学习社区Datawhale正式达成深度战略合作。Datawhale作为国内领先AI开源学习社区，致力于降低AI学习门槛，连接高校、产业与学习者。Delta X则作为其核心商业化运营与孵化执行伙伴，承接社区溢出的优秀人才与项目，共同构建“学习者→开发者→创业者”的人才全链路。",
    image: "innovation/partner_news/Datawhale.png",
    link: "https://mp.weixin.qq.com/s/RUOCnNwnoAAmYU3LpjW9Xg"
  },
  {
    id: 3,
    title: "实验室正式成为“花猫学习中心首批AI生态伙伴”",
    brief: "12月28日，株洲AI创新大会暨AI花猫社区启动仪式举行，浙江大学启真交叉学科创新创业实验室正式成为“花猫学习中心首批AI生态伙伴”，并被认证为首批“AI+X产教联盟实训基地”。",
    image: "innovation/partner_news/HuaMao.png",
    link: "https://mp.weixin.qq.com/s/n3YcDWVRcvXn6oot29JmBQ"
  }
];

export const PHOTO_WALL = [
  { id: 1, src: "/life/photowall/p1.svg", alt: "照片1" },
  { id: 2, src: "/life/photowall/p2.svg", alt: "照片2" },
  { id: 3, src: "/life/photowall/p3.svg", alt: "照片3" },
  { id: 4, src: "/life/photowall/p4.svg", alt: "照片4" },
  { id: 5, src: "/life/photowall/p5.svg", alt: "照片5" },
  { id: 6, src: "/life/photowall/p6.svg", alt: "照片6" },
  { id: 7, src: "/life/photowall/p7.svg", alt: "照片7" },
  { id: 8, src: "/life/photowall/p8.svg", alt: "照片8" },
  { id: 9, src: "/life/photowall/p9.svg", alt: "照片9" },
  { id: 10, src: "/life/photowall/p10.svg", alt: "照片10" },
];

// 影像故事板块固定内容
export const LIFE_VIDEO_SECTION = {
  description: "独立于功利指标的精神文明维度，承载着X-Lab的温度与归属。通过团建活动、文化创作等形式，营造激发创造力、促进深度联结的社区氛围。创新不止于产出，更关乎人的成长、艺术的滋养与共同的记忆。",
  tags: [
    { label: "主体性", icon: "/life/video_logo/p1.svg" },
    { label: "社会化", icon: "/life/video_logo/p2.svg" },
    { label: "使命感", icon: "/life/video_logo/p3.svg" },
    { label: "专业性", icon: "/life/video_logo/p4.svg" },
  ]
};

// 视频列表
export const LIFE_VIDEOS_LIST = [
  {
    id: 1,
    url: "/videos/23千岛湖.mp4",
    title: "2023千岛湖出游",
    cover: "/life/video_cover/cover1.png"
  },
  {
    id: 2,
    url: "/videos/23宣传片.mp4",
    title: "2023宣传片",
    cover: "/life/video_cover/cover2.png"
  },
  {
    id: 3,
    url: "/videos/25春游.mp4",
    title: "2025春游",
    cover: "/life/video_cover/cover3.png"
  },
  {
    id: 4,
    url: "/videos/年会总结视频.mp4",
    title: "年会总结",
    cover: "/life/video_cover/cover4.png"
  },
];

export const TRAVEL_MOMENTS = [
  { 
    id: 1, 
    title: "2025➡2026🎇", 
    image: "/life/together/p1.png", 
    link: "https://mp.weixin.qq.com/s/LjblK5SBeVE1dwvTvvJ66A" 
  },
  { 
    id: 2, 
    title: "春游回顾 | 春天有幸福的意思", 
    image: "/life/together/p2.jpg", 
    link: "https://mp.weixin.qq.com/s/WTzSmvXh08OPP0_zORhjeA" 
  },
  { 
    id: 3, 
    title: "掉落一篇冬至小记！", 
    image: "/life/together/p3.jpg", 
    link: "https://mp.weixin.qq.com/s/E2uP86l02l-egpbiAyrDrQ" 
  },
  { 
    id: 4, 
    title: "“接力时刻”X-Laber秋季大会圆满举行", 
    image: "/life/together/p4.jpg", 
    link: "https://mp.weixin.qq.com/s/BhGw6PyIc2QVVS3-g23b1Q" 
  },
];

export const LAB_MERCH = [
  { 
    id: 1, 
    name: "X-Lab合影透卡", 
    desc: "把瞬间封存在一张会透光的记忆里", 
    img: "/life/merch/card.png" 
  },
  { 
    id: 2, 
    name: "X-Lab胸针", 
    desc: "呈现X-Laber的共创身份与参与记录", 
    img: "/life/merch/pin1.png" 
  },
  { 
    id: 3, 
    name: "2026 X-Lab新年pcb板", 
    desc: "融合工程语言与视觉设计", 
    img: "/life/merch/pcb2026.png" 
  },
  { 
    id: 4, 
    name: "2025 X-Lab新年pcb板", 
    desc: "以定制电路板形式制作的跨年纪念物", 
    img: "/life/merch/pcb2025.png" 
  },
];

export const LAB_MERCH_LIST_DATA = [
  { 
    id: 1, 
    name: "X-Lab合影透卡", 
    desc: "把瞬间封存在一张会透光的记忆里", 
    img: "/life/merch_list/transparent_card.png" 
  },
  { 
    id: 2, 
    name: "X-Lab运营实习期内训任务通关卡片", 
    desc: "标识实习成员阶段性任务通关结果", 
    img: "/life/merch_list/pass_card.png" 
  },
  {
    id: 3, 
    name: "X-Lab × 真格基金 × Bonjour 文创", 
    desc: "承载活动身份标识与信息交互的文创", 
    img: "/life/merch_list/bonjour_card.jpg" 
  },
  { 
    id: 4, 
    name: "X-Lab胸针", 
    desc: "呈现X-Laber的共创身份与参与记录", 
    img: "/life/merch_list/pin.png" 
  },
  { 
    id: 5, 
    name: "X-Lab导师聘书", 
    desc: "面向X-Lab导师发放的官方聘任与身份确认文书", 
    img: "/life/merch_list/supervisor_appointment.png" 
  },
  { 
    id: 6, 
    name: "2025 X-Lab年会礼盒", 
    desc: "用于年会场景的周年纪念", 
    img: "/life/merch_list/gift_box.png" 
  },
  { 
    id: 7, 
    name: "X-Lab运营实习期结业册", 
    desc: "记录一段运营实习旅程与成长成果的阶段性汇编", 
    img: "/life/merch_list/completion_album.png" 
  },
  { 
    id: 8, 
    name: "2026 X-Lab新年pcb板", 
    desc: "融合工程语言与视觉设计的2026跨年定制电路板", 
    img: "/life/merch_list/pcb2026.png" 
  },
  { 
    id: 9, 
    name: "2025 X-Lab新年pcb板", 
    desc: "以定制电路板形式制作的X-Lab2025跨年纪念物", 
    img: "/life/merch_list/pcb2025.png" 
  },
  { 
    id: 10, 
    name: "共创现场 · 合影记录", 
    desc: "支持与指导的见证", 
    img: "/life/merch_list/somebody.png" 
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    content: "天南海北的比赛是共同奋战的印记，实验室也逐渐走向更远的地方。如果坚定这件事是对的，那就坚定走下去。",
    author: "王振阳",
    role: "X-Lab创始人",
  },
  {
    id: 2,
    content: "后来，我渐渐的看到越来越多的实验室的大小朋友，选择在自己的领域内走上一条独一无二的道路。在孤独的前进路上，有一群孤独的人相伴，彼此相依也便不孤独。",
    author: "黄睿哲",
    role: "X-Laber",
  },
  {
    id: 3,
    content: "总的来说X-Lab将会是我们这批人在浙大所能留下的，最浓墨厚彩的一笔；但是 ‘革命尚未成功，同志仍需努力！’",
    author: "文豪",
    role: "X-Laber",
  },
  {
    id: 4,
    content: "就像那句话说的一样，‘在卓越气息弥漫的地方，永远有在家之感 ’。",
    author: "马卓涵",
    role: "X-Laber",
  },
  {
    id: 5,
    content: "如今，Lab于我而言，像是校园里的一个小小港湾。累了可以来歇脚，迷茫时可以在这里静静思考。",
    author: "骆佳静",
    role: "X-Laber",
  },
];

// 首页轮播数据
export const HOME_BANNERS: Banner[] = [
  {
    id: 1,
    label: "Banner 1",
    link: "https://mp.weixin.qq.com/s/C2bOxVidwBm-jnudioNTTQ",
    imageUrl: "/assets/home/banner/纳新进行时.svg",
  },
  {
    id: 2,
    label: "Banner 2",
    link: "#",
    imageUrl: "/assets/home/banner/解码未来.png",
  },
  {
    id: 3,
    label: "Banner 3",
    link: "https://mp.weixin.qq.com/s/C2bOxVidwBm-jnudioNTTQ",
    imageUrl: "/assets/home/banner/纳新进行时.svg",
  },
  {
    id: 4,
    label: "Banner 4",
    link: "#",
    imageUrl: "/assets/home/banner/解码未来.png",
  },
];

// 首页实验室新闻 - 文字列表（左侧）
// 按日期倒序排列（最新在前）
export const HOME_LAB_NEWS_TEXT: LabNews[] = [
  {
    id: 1,
    title: "活动报名｜AI Hackathon Tour 2026 · 浙江大学站",
    date: "2026-01-10",
    summary: "你的下一个想法，值得一个更强大的引擎",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/Pg43gvPXw5IWkRZffxPwNQ",
  },
  {
    id: 2,
    title: "万事利集团参访与李建华董事长座谈会",
    date: "2025-12-26",
    summary: "深入了解丝绸行业龙头企业的创新发展之路",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/A892PjgNcyJb-sSg30jyhQ",
  },
  {
    id: 3,
    title: "对话VideoTutor创始人赵凯",
    date: "2025-11-16",
    summary: "大三Agent教育创业，拿到赵长鹏1100万美金投资",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/l_UfP_Mqpz5R81rrke0w8Q",
  },
  {
    id: 4,
    title: "奇绩浙大校友专场｜从学生到创始人的真实经验分享",
    date: "2025-11-14",
    summary: "聆听校友创业路上的真实故事与宝贵经验",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/PQpjrQPSTzZxwsb8WHscRQ",
  },
  {
    id: 5,
    title: "“接力时刻” X-Laber秋季大会圆满举行",
    date: "2025-10-30",
    summary: "汇聚创新力量，共话未来发展",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/BhGw6PyIc2QVVS3-g23b1Q",
  },
  {
    id: 6,
    title: "通往电赛领奖台的两条航道｜诺亚方舟第二期",
    date: "2025-10-27",
    summary: "文末附开源链接，分享电赛备赛经验与技巧",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/pWen4dArjivRbFAG37g-Zg",
  },
  {
    id: 7,
    title: "青春智造力·灵感共鸣时——AI+X高校行回顾纪实",
    date: "2025-10-26",
    summary: "AI+X高校行活动精彩回顾",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/wmnN5uD2nX7AEJ_mPIbN-A",
  },
  {
    id: 8,
    title: "空间开放｜金工中心3D打印实验室对外开放啦！",
    date: "2025-10-24",
    summary: "欢迎同学们前来使用3D打印设备",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/-Nc8ARAO6Zc9EMSBxVVJmw",
  },
  {
    id: 9,
    title: "硬件团队2025年实习成员暑期项目展示会顺利举行",
    date: "2025-10-09",
    summary: "赴一场创意与科技交织的盛会",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/GnKlyDCGCjVf2ZUeCAn-FQ",
  },
  {
    id: 10,
    title: "实习经验分享会回顾：一起踏出职业生涯的第一步！",
    date: "2025-09-17",
    summary: "学长学姐分享实习经验，助力职业规划",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/kzGVuE8YHXejH4BJpmLRRA",
  },
  {
    id: 11,
    title: "三声万物｜6元买断制 App 如何单挑亿万级算法？",
    date: "2025-09-16",
    summary: "NoFeed 开发者的“文艺复兴式”破局之道",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/_75ZOLSdgDrwtJmxGHaFng",
  },
  {
    id: 12,
    title: "25X-Lab社会实践｜探寻信电学院创新创业基因",
    date: "2025-09-13",
    summary: "深入了解信电学院的创新创业传统",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/bYIhsYp24db59KrdTclkKQ",
  },
  {
    id: 13,
    title: "25X-Lab社会实践 | 深圳毅行出发喽！",
    date: "2025-09-06",
    summary: "阳光、沙滩、海浪和仙人掌",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/o7HqpzsofBZC2ySNkj-TpA",
  },
  {
    id: 14,
    title: "25X-Lab社会实践｜深圳硬科技企业深度探秘",
    date: "2025-09-05",
    summary: "走进深圳硬科技企业，探索创新发展之路",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/WDmB0GQ-Knkt9FQPA_Fd3A",
  },
  {
    id: 15,
    title: "被批「趁早收手」的一群本科生和他们的「刑具」革命｜诺亚方舟第一期",
    date: "2025-08-09",
    summary: "记录本科生的创新创业故事",
    imageUrl: "",
    link: "https://mp.weixin.qq.com/s/qZM0OWghhE9O66l4NjrJTA",
  },
];

// 首页实验室新闻 - 图片轮播（右侧）
export const HOME_LAB_NEWS_IMAGE: LabNews[] = [
  {
    id: 101,
    title: "X-Lab学生创新案例登上光明日报《教育家》杂志！",
    date: "2026-02-05",
    summary: "学生创新成果获得国家级媒体关注与报道",
    imageUrl: "/assets/home/news/101.png",
    link: "https://mp.weixin.qq.com/s/qDJXkOk-lscy-Swql28NbQ",
  },
  {
    id: 102,
    title: "活动报名丨“Z+” 科创训练营五期来了",
    date: "2026-02-05",
    summary: "培育未来独角兽，还有万元奖学金机会",
    imageUrl: "/assets/home/news/102.png",
    link: "https://mp.weixin.qq.com/s/f6hlYWj1Ml4aD8fBt1v9EA",
  },
  {
    id: 103,
    title: "赛事解读｜AI Hackathon Tour 2026 · 浙江大学站",
    date: "2026-01-22",
    summary: "敢想敢做，破局而生",
    imageUrl: "/assets/home/news/103.png",
    link: "https://mp.weixin.qq.com/s/Uw2l-Gkb7XfQHnpsShr6QA",
  },
  {
    id: 104,
    title: "实验室认证为首批“AI+X”产教联盟实训基地",
    date: "2025-12-28",
    summary: "成为花猫学习中心首批AI生态伙伴",
    imageUrl: "/assets/home/news/104.jpeg",
    link: "https://mp.weixin.qq.com/s/n3YcDWVRcvXn6oot29JmBQ",
  },
  {
    id: 105,
    title: "Lab学术快报｜中国数字城市品牌杭州论坛召开",
    date: "2025-11-21",
    summary: "数字城市品牌评估指标体系登台分享",
    imageUrl: "/assets/home/news/105.jpeg",
    link: "https://mp.weixin.qq.com/s/f2r6b_q4X1I-0YBnAlq3mg",
  },
];

// =============================================================================
// 实验室资源区域 (HomeResources)
// =============================================================================

export const FEATURED_MENTOR: Mentor = {
  id: 0,
  name: "邢以群",
  description:
    "启真交叉学科创新创业实验室责任教授, 浙江大学管理学院教授",
  imageUrl: "/assets/home/resources/xyq.png",
};

export const ACADEMIC_MENTORS: Mentor[] = [
  {
    id: 1,
    name: "陈为",
    description: "浙江大学计算机科学与技术学院教授",
    imageUrl: "/assets/home/resources/cw.png",
  },
  {
    id: 2,
    name: "李环",
    description: "浙江大学计算机科学与技术学院百人计划研究员",
    imageUrl: "/assets/home/resources/lh.png",
  },
  {
    id: 3,
    name: "谢天",
    description: "浙江大学计算机辅助设计与图形系统全国重点实验室副研究员",
    imageUrl: "/assets/home/resources/xt.png",
  },
  {
    id: 4,
    name: "崔兆鹏",
    description: "浙江大学计算机科学与技术学院百人计划研究员",
    imageUrl: "/assets/home/resources/czp.png",
  },
  {
    id: 5,
    name: "王冠云",
    description: "浙江大学计算机科学与技术学院百人计划研究员",
    imageUrl: "/assets/home/resources/wgy.png",
  },
  {
    id: 6,
    name: "陈昊",
    description: "浙江大学计算机科学与技术学院百人计划研究员",
    imageUrl: "/assets/home/resources/ch.png",
  },
  {
    id: 7,
    name: "朱闽峰",
    description: "浙江大学软件学院研究员",
    imageUrl: "/assets/home/resources/zmf.png",
  },
  {
    id: 8,
    name: "王文冠",
    description: "浙江大学计算机科学与技术学院百人计划研究员",
    imageUrl: "/assets/home/resources/wwg.png",
  },
  {
    id: 9,
    name: "刘佐珠",
    description: "浙江大学-伊利诺伊大学厄巴纳香槟校区联合学院研究员",
    imageUrl: "/assets/home/resources/lzz.png",
  },
  {
    id: 10,
    name: "应豪超",
    description: "浙江大学医学院公共卫生学院副研究员",
    imageUrl: "/assets/home/resources/yhc.png",
  },
  {
    id: 11,
    name: "黄修齐",
    description: "浙江大学计算机辅助设计与图形系统全国重点实验室助理研究员",
    imageUrl: "/assets/home/resources/hxq.png",
  },
  {
    id: 12,
    name: "朱霖潮",
    description: "浙江大学计算机科学与技术学院百人计划研究员",
    imageUrl: "/assets/home/resources/zlc.png",
  },
  {
    id: 13,
    name: "陈璐",
    description: "浙江大学计算机科学与技术学院百人计划研究员",
    imageUrl: "/assets/home/resources/cl.png",
  },
  {
    id: 14,
    name: "张强",
    description: "浙江大学国际联合学院长聘助理教授、研究员",
    imageUrl: "/assets/home/resources/zq.png",
  },
  {
    id: 15,
    name: "章燕",
    description: "浙江大学传媒与国际文化学院新闻传媒与社会发展研究所副教授",
    imageUrl: "/assets/home/resources/zy.png",
  },
  {
    id: 16,
    name: "李世龙",
    description: "浙江大学信息与电子工程学院百人计划研究员",
    imageUrl: "/assets/home/resources/lsl.png",
  },
  {
    id: 17,
    name: "李宇波",
    description: "浙江大学信息与电子工程学院副教授",
    imageUrl: "/assets/home/resources/lyb.png",
  },
  {
    id: 18,
    name: "施建峰",
    description: "浙江大学化工机械研究所副所长、浙江大学能源工程学院教授",
    imageUrl: "/assets/home/resources/sjf.png",
  },
  {
    id: 19,
    name: "王闻箫",
    description: "浙江大学计算机科学与技术学院研究员",
    imageUrl: "/assets/home/resources/wwx.png",
  },
  {
    id: 20,
    name: "杨照辉",
    description: "浙江大学信息与电子工程学院百人计划研究员",
    imageUrl: "/assets/home/resources/yzh.png",
  },
  {
    id: 21,
    name: "杨宗银",
    description: "浙江大学智能传感和微纳集成系统所副所长，浙江大学信息与电子工程学院长聘教授",
    imageUrl: "/assets/home/resources/yzy.png",
  },
  {
    id: 22,
    name: "赵瑜佩",
    description: "浙江大学传媒与国际文化学院副院长、百人计划研究员",
    imageUrl: "/assets/home/resources/zyp.png",
  },
  {
    id: 23,
    name: "郑刚",
    description: "浙江大学管理学院创新创业与战略学系副主任、科技创业中心主任，浙江大学管理学院教授",
    imageUrl: "/assets/home/resources/zg.png",
  },
  {
    id: 24,
    name: "马耀光",
    description: "浙江大学光电科学与工程学院副教授",
    imageUrl: "/assets/home/resources/myg.png",
  },
  {
    id: 25,
    name: "王颂",
    description: "浙江大学管理学院教授",
    imageUrl: "/assets/home/resources/ws.png",
  },
  {
    id: 26,
    name: "沈睿",
    description: "浙江大学管理学院百人计划研究员",
    imageUrl: "/assets/home/resources/sr.png",
  },
  {
    id: 27,
    name: "张宁",
    description: "浙江大学公共卫生学院百人计划研究员",
    imageUrl: "/assets/home/resources/zn.png",
  },
  {
    id: 28,
    name: "周佳",
    description: "浙江大学历史学院副教授",
    imageUrl: "/assets/home/resources/zj.png",
  },
  {
    id: 29,
    name: "骆季奎",
    description: "浙江大学信息与电子工程学院教授",
    imageUrl: "/assets/home/resources/ljk.png",
  },
  {
    id: 30,
    name: "徐远峰",
    description: "浙江大学物理学院百人计划研究员",
    imageUrl: "/assets/home/resources/xyf.png",
  },
  {
    id: 31,
    name: "徐慈华",
    description: "浙江大学哲学学院副教授",
    imageUrl: "/assets/home/resources/xch.png",
  },
  {
    id: 32,
    name: "郭秀珍",
    description: "浙江大学控制科学与工程学院百人计划研究员",
    imageUrl: "/assets/home/resources/gxz.png",
  },
  {
    id: 33,
    name: "黄正行",
    description: "浙江大学人工智能研究所教授，浙江大学计算机科学与技术学院教授",
    imageUrl: "/assets/home/resources/hzx.png",
  },
];

export const INDUSTRY_MENTORS: Mentor[] = [
  {
    id: 101,
    name: "刘建斌",
    description: "藕舫天使创始人",
    imageUrl: "/assets/home/resources/ljb.png",
  },
  {
    id: 102,
    name: "刘岩",
    description: "浙江大学国家大学科技园党总支副书记、总经理",
    imageUrl: "/assets/home/resources/ly.png",
  },
  // {
  //   id: 103,
  //   name: "卢翰霖",
  //   description: "宁波市镇海区宁波九龙机械制造有限公司总经理、镇海青企协会长",
  //   imageUrl: "/assets/home/resources/lhl.png",
  // },
  {
    id: 104,
    name: "石锦澎",
    description: "浙江大学长三角智慧绿洲创新中心产业总监",
    imageUrl: "/assets/home/resources/sjp.png",
  },
  {
    id: 105,
    name: "苏杰",
    description: "良仓孵化器创始合伙人",
    imageUrl: "/assets/home/resources/sj.png",
  },
  {
    id: 106,
    name: "彭奕然",
    description: "通商律师事务所合伙人",
    imageUrl: "/assets/home/resources/pyr.png",
  },
  {
    id: 107,
    name: "姚翔",
    description: "飞书泛互联网行业负责人",
    imageUrl: "/assets/home/resources/yx.png",
  },
  {
    id: 108,
    name: "尹乐",
    description: "真格基金合伙人",
    imageUrl: "/assets/home/resources/yl.png",
  },
  {
    id: 109,
    name: "智天雨",
    description: "秒针营销科学院副院长、上海负责人",
    imageUrl: "/assets/home/resources/zty.png",
  },
  {
    id: 110,
    name: "李孟韬",
    description: "镇海团区委书记",
    imageUrl: "/assets/home/resources/lmt.jpeg",
  },
  {
    id: 111,
    name: "张加林",
    description: "时代强鹰·杭州创业发展促进会秘书长",
    imageUrl: "/assets/home/resources/zjl.jpeg",
  },
  {
    id: 112,
    name: "张洁",
    description: "每日互动联合创始人、华旦天使投资董事总经理",
    imageUrl: "/assets/home/resources/zjie.png",
  },
  {
    id: 113,
    name: "钱迅雷",
    description: "杭州迅雷控制技术研究所、杭州一统科技有限公司董事长",
    imageUrl: "/assets/home/resources/qxl.png",
  },
];

// ==================== 成员故事 ====================

export const ABOUT_MEMBER_STORIES: MemberStory[] = [];

// ==================== 文章详情数据（模块化导出）====================

// 从 articles 模块统一导出
export {
  // 数据
  LATEST_ARTICLES,
  ACTIVITY_ARTICLES,
  MEDIA_ARTICLES,
  // ID列表
  LATEST_ARTICLE_IDS,
  ACTIVITY_ARTICLE_IDS,
  MEDIA_ARTICLE_IDS,
  // 辅助函数
  getArticlesByCategory,
  getArticleByIdAndCategory,
  getArticleById,
  getArticleIdsByCategory,
  getAllArticles,
  // 映射表
  ARTICLES_BY_CATEGORY,
} from "./articles";
