function StageCard({ phase, title, desc }: { phase: string; title: string; desc: string[] }) {
  return (
    <div
      className="w-[337px] rounded-[14px] bg-[#FCFCFC] p-[20px]"
      style={{ boxShadow: "4px 4px 10px -2px rgba(0, 0, 0, 0.2)" }}
    >
      <p className="mb-[12px] text-[14px] font-black leading-[20px] text-[#0071EF]">
        {phase} {title}
      </p>
      <ul className="space-y-1">
        {desc.map((item, index) => (
          <li key={index} className="ml-[18px] list-disc text-[15px] leading-[24px] text-[#464646]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TalentPath() {
  const stages = [
    { phase: "【大一下—大二上】", title: "实习训练营", desc: ["以朋辈培养模式快速补齐学生基础工程实践能力"] },
    { phase: "【大一暑假】", title: "转正双向选择", desc: ["\"主体性、社会化、使命感、专业性\"四位一体双向选择"] },
    { phase: "【大二上起】", title: "带着学：参与科研/产业实践", desc: ["基于教师指导和产业实践的的项目制实践学习"] },
    { phase: "【大二下—大三上】", title: "干中学：参与学科竞赛与创新创业大赛", desc: ["以大赛作为练兵场，以践促学，提升学生综合素质，验证商业化场景"] },
    { phase: "【大三下—大四下】", title: "社会化创新实践", desc: ["实验室为高年级本科成员打造面向真实社会的实践\"微环境\""] },
    { phase: "【大三—大四】", title: "高质量升学/就业/创业", desc: ["通过一站式的培养，提升学生的升学/就业/创业质量", "通过传帮带，传承与沉淀升学，就业、创业经验"] },
  ];

  const leftStages = [stages[0], stages[2], stages[4]];
  const rightStages = [stages[1], stages[3], stages[5]];
  const stageRows = [0, 1, 2].map((rowIndex) => [leftStages[rowIndex], rightStages[rowIndex]]);

  return (
    <section className="w-full py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-[56px]">
        <div className="mb-[42px] flex items-center gap-[14px]">
          <div className="h-[87px] w-[11px] bg-gradient-to-b from-[#0071EE] to-[#43C5AD]" />
          <div>
            <h2 className="text-[24px] font-bold leading-[44px] text-[#5c5b5b]">人才培养路径</h2>
            <p className="mt-[4px] text-[36px] font-bold leading-[30px] text-[#5c5b5b]">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #0071EF 45%, rgba(20,155,255,.54) 100%)" }}
              >
                技能、研究、实践与大赛
              </span>
              的学生一站式培养机制，创造实际社会价值
            </p>
          </div>
        </div>

        <div className="flex items-start justify-between gap-[26px]">
          <div className="grid w-[700px] grid-cols-2 gap-x-[16px] gap-y-[8px]">
            {stageRows.map((row, rowIndex) =>
              row.filter(Boolean).map((stage) => (
                <StageCard key={`${stage.phase}-${rowIndex}`} phase={stage.phase} title={stage.title} desc={stage.desc} />
              ))
            )}
          </div>

          <div className="w-[527px] pt-[18px] -translate-y-10 -translate-x-10">
            <img
              src="/assets/about/时间轴.svg"
              alt="人才培养路径时间轴"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
