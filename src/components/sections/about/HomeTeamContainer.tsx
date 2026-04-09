"use client";

import { useState } from "react";

const DEPARTMENTS = [
  {
    id: "operate",
    name: "运营团队",
    slogan: "孵化实验台 新媒全矩阵",
    introduction:
      "培养具有创新能力创业实力的创业者、管理者，用商学赋能科技，用思维促进变革",
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
      "培养多元的设计技能技巧，塑造专业的设计思维思考，用设计赋能创造与表达，力图打造审美天花板",
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
      "培养专业且全栈的硬件开发能力，用自己的技能创造出有意义的产品",
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
      "培养技术过硬、视野开阔、思考全面、勇于创新的大学生开发者",
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
            学科交叉｜项目实际
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
