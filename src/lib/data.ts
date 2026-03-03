import type { NewsItem } from "@/types";

import { ResearchTeamProject } from "@/types/index";

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
    link: "https://ucns4q7cn89b.feishu.cn/wiki/Hdpmww0KHiEo22k4fbKcsGAPnRd"
  },
  {
    id: 2,
    title: "Delta X 迭代未来与Datawhale社区正式达成深度合作",
    brief: "2026年伊始，Delta X 迭代未来与国内领先的AI开源学习社区Datawhale正式达成深度战略合作。Datawhale作为国内领先AI开源学习社区，致力于降低AI学习门槛，连接高校、产业与学习者。Delta X则作为其核心商业化运营与孵化执行伙伴，承接社区溢出的优秀人才与项目，共同构建“学习者→开发者→创业者”的人才全链路。",
    image: "innovation/partner_news/Datawhale.png",
    link: "https://ucns4q7cn89b.feishu.cn/wiki/AiedwEEg4iBbokkzBZLc5webnpf"
  },
  {
    id: 3,
    title: "实验室正式成为“花猫学习中心首批AI生态伙伴”",
    brief: "12月28日，株洲AI创新大会暨AI花猫社区启动仪式举行，浙江大学启真交叉学科创新创业实验室正式成为“花猫学习中心首批AI生态伙伴”，并被认证为首批“AI+X产教联盟实训基地”。",
    image: "innovation/partner_news/HuaMao.png",
    link: "https://zju-xlab.feishu.cn/wiki/ZOBPw8HzMi8GFVk7jkicteq5nWc"
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

export const TESTIMONIALS = [
  {
    id: 1,
    content: "天南海北的比赛是共同奋战的印记，实验室也逐渐走向更远的地方。如果坚定这件事是对的，那就坚定走下去。",
    author: "王振阳",
    role: "X-lab创始人",
  },
  {
    id: 2,
    content: "后来，我渐渐的看到越来越多的实验室的大小朋友，选择在自己的领域内走上一条独一无二的道路。在孤独的前进路上，有一群孤独的人相伴，彼此相依也便不孤独。",
    author: "黄睿哲",
    role: "X-laber",
  },
  {
    id: 3,
    content: "总得来说X-Lab将会是我们这批人在浙大所能留下的，最浓墨厚彩的一笔；但是 “革命尚未成功，同志仍需努力！”",
    author: "文豪",
    role: "X-laber",
  },
  {
    id: 4,
    content: "就像那句话说的一样，“在卓越气息弥漫的地方，永远有在家之感 ”。",
    author: "马卓涵",
    role: "X-laber",
  },
  {
    id: 5,
    content: "如今，Lab于我而言，像是校园里的一个小小港湾。累了可以来歇脚，迷茫时可以在这里静静思考。",
    author: "骆佳静",
    role: "X-laber",
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