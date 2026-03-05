"use client";

import { useState } from "react";

const DEPARTMENTS = [
  {
    id: "operate",
    name: "运营团队",
    slogan: "孵化实验台 新媒全矩阵",
    introduction:
      "运营团队对内负责实验室的日常运行，包括打卡、物资、财务、内建、活动策划等，对外担任项目、竞赛经理，推进项目高质量完成，搭建新媒体矩阵，实现品牌构建。",
    departmentImageUrl: "/assets/about/team/Operate.svg",
    branch: ["项目管理", "人力资源", "财务管理", "产品经理", "品牌策略"],
    branchIcon: [
      "/assets/about/team/branchIcon1_1.svg",
      "/assets/about/team/branchIcon1_2.svg",
      "/assets/about/team/branchIcon1_3.svg",
      "/assets/about/team/branchIcon1_4.svg",
      "/assets/about/team/branchIcon1_5.svg",
    ],
    artTextUrl: "/assets/about/team/OperateTxt.svg",
  },
  {
    id: "design",
    name: "设计团队",
    slogan: "全流程设计 多样化领域",
    introduction:
      "设计团队专注于视觉，交互，工业，服务设计四大领域，不断实践和创新，可以提供全流程多样化设计方案，包含：高质量的产品模型设计，静态/动态产品展示；企业级视觉识别系统，标识设计，宣传物料设计；完备的低/高保真交互原型设计，ui设计等。",
    departmentImageUrl: "/assets/about/team/Design.svg",
    branch: ["工业设计", "交互设计", "视觉设计"],
    branchIcon: [
      "/assets/about/team/branchIcon2_1.svg",
      "/assets/about/team/branchIcon2_2.svg",
      "/assets/about/team/branchIcon2_3.svg",
    ],
    artTextUrl: "/assets/about/team/DesignTxt.svg",
  },
  {
    id: "hardware",
    name: "硬件团队",
    slogan: "未来工业宇宙的开拓者",
    introduction:
      "硬件团队负责实验室硬件技术领域的研发。主要涉及硬件电路设计，嵌入式开发，机械设计，算法开发等等硬件技术领域。硬件技术团队的定位是通过自身的知识打造出有意义的硬件产品，将有价值以及未来可能有价值的产品研发并落地。",
    departmentImageUrl: "/assets/about/team/Hardware.svg",
    branch: ["嵌入式", "嵌入式(L)", "硬件电路", "机电一体"],
    branchIcon: [
      "/assets/about/team/branchIcon3_1.svg",
      "/assets/about/team/branchIcon3_2.svg",
      "/assets/about/team/branchIcon3_3.svg",
      "/assets/about/team/branchIcon3_4.svg",
    ],
    artTextUrl: "/assets/about/team/HardwareTxt.svg",
  },
  {
    id: "software",
    name: "软件团队",
    slogan: "未来软件生态的执匙者",
    introduction:
      "软件团队负责工作以全流程软件开发为主，包括前端开发、后端开发、客户端开发，也包含一定的运维工作。软件团队拥有完备的培养路径，使得成员在开发过程中能够实现学练结合，在熟悉现代化的开发工具及流程的同时提升自己的能力水平及编码素养。",
    departmentImageUrl: "/assets/about/team/Software.svg",
    branch: ["前端开发", "后端开发", "运营维护"],
    branchIcon: [
      "/assets/about/team/branchIcon4_1.svg",
      "/assets/about/team/branchIcon4_2.svg",
      "/assets/about/team/branchIcon4_3.svg",
    ],
    artTextUrl: "/assets/about/team/SoftwareTxt.svg",
  },
];

export function HomeTeamContainer() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="w-full bg-[#001731] text-white">
      <div className="w-full h-250 max-w-[1440px] mx-auto px-[56px] py-[72px] flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-2.5">
          <img
            src="/assets/about/team/OurTeamIcon.svg"
            alt="团队图标"
            className="w-10 h-10 mt-2"
          />
          <h1 className="text-3xl leading-[44px] font-bold">我们的团队</h1>
          <h2 className="text-sm leading-[21px] font-light opacity-70">
            四大团队｜全员本科生｜学科交叉融合
          </h2>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {DEPARTMENTS.map((team, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={team.id}
                type="button"
                className={`w-24 h-10 border-none text-white text-sm font-medium cursor-pointer transition-colors ${
                  isSelected ? "text-white" : "bg-transparent"
                }`}
                style={
                  isSelected
                    ? {
                        background:
                          "linear-gradient(90deg, #0071ef 0%, #149bff 100%) bottom no-repeat",
                        backgroundSize: "auto 1px",
                      }
                    : {}
                }
                onClick={() => setSelectedIndex(index)}
              >
                {team.name}
              </button>
            );
          })}
        </div>

        <div className="mt-9 w-full overflow-hidden">
          <div
            className="flex transition-transform duration-[420ms] ease-out will-change-transform"
            style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
          >
            {DEPARTMENTS.map((team) => (
              <div key={team.id} className="min-w-full">
                <div className="w-full flex flex-row items-center justify-between gap-6">
                  <div className="w-[40%] min-w-[440px] flex flex-col items-start gap-5 text-left">
                    <div className="text-2xl leading-[35px] font-bold">
                      {team.slogan}
                    </div>
                    <div className="flex gap-2.5 flex-wrap overflow-hidden pb-1.5 justify-start">
                      {team.branch.map((label, index) => (
                        <div
                          key={`${team.id}-${label}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-sm whitespace-nowrap"
                        >
                          <img
                            src={team.branchIcon[index]}
                            alt=""
                            className="w-[18px] h-[18px]"
                          />
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                    <p
                      className="text-sm leading-[21px] opacity-70 text-justify w-full"
                      style={{ textIndent: "28px" }}
                    >
                      {team.introduction}
                    </p>
                    <div>
                      <img
                        src={team.artTextUrl}
                        alt=""
                        className="h-[124px] w-auto mt-2"
                      />
                    </div>
                  </div>

                  <div className="w-[55%] flex justify-center">
                    <img
                      src={team.departmentImageUrl}
                      alt={team.name}
                      className="w-full max-w-[600px] h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
