function FeatureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="h-[116px] w-[416px] rounded-[13px] bg-[#FCFCFC] p-[14px]"
      style={{
        boxShadow: "4px 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h4 className="mt-2 ml-1 mb-2 text-[15px] font-bold leading-[20px] text-[#464646]">
        {title.includes("科研灵感") ? (
          <>
            {title.split("科研灵感")[0]}
            <span className="text-[#0071EF]">科研灵感</span>
            {title.split("科研灵感")[1]}
          </>
        ) : title.includes("有组织的学生助研") ? (
          <>
            {title.split("有组织的学生助研")[0]}
            <span className="text-[#0071EF]">有组织的学生助研</span>
            {title.split("有组织的学生助研")[1]}
          </>
        ) : title.includes("有实际社会意义的研究成果") ? (
          <>
            {title.split("有实际社会意义的研究成果")[0]}
            <span className="text-[#0071EF]">有实际社会意义的研究成果</span>
            {title.split("有实际社会意义的研究成果")[1]}
          </>
        ) : (
          title
        )}
      </h4>
      <ul className="space-y-[2px]">
        {items.map((item) => (
          <li key={item} className="ml-[18px] list-disc text-[12px] leading-[16px] text-[#464646]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StudentStageCard({ phase, title, desc }: { phase: string; title: string; desc: string }) {
  return (
    <div
      className="h-[110px] w-[320px] rounded-[13px] bg-[#FCFCFC] p-[14px]"
      style={{
        boxShadow: "4px 4px 10px rgba(0,0,0,0.1)", // 添加阴影效果
      }}
    >
      <h4 className="mb-[6px] text-[15px] font-black leading-[20px] text-[#0071EF]">
        {phase}
        {title}
      </h4>
      <ul>
        <li className="ml-[18px] list-disc text-[12px] leading-[16px] text-[#464646]">
          {desc}
        </li>
      </ul>
    </div>
  );
}

export function ResearchModel() {
  return (
    <section className="w-full bg-white py-[72px]">
      <div className="mx-auto w-full max-w-[1440px] px-[56px]">
        <div className="mb-[34px] flex items-center gap-[14px]">
          <div className="h-[87px] w-[11px] bg-gradient-to-b from-[#0071EE] to-[#43C5AD]" />
          <h2
            className="bg-clip-text text-[42px] font-bold leading-[52px] text-transparent"
            style={{ backgroundImage: "linear-gradient(180deg, #0071EF 40%, rgba(20,155,255,.54) 100%)" }}
          >
            师生共创的科研模式探索
          </h2>
        </div>

        <div className="mb-[24px] flex items-end gap-[26px]">
          <p
            className="bg-clip-text text-[44px] font-black leading-[1] text-transparent"
            style={{ backgroundImage: "linear-gradient(180deg, #0071EF 40%, rgba(20,155,255,.54) 100%)" }}
          >
            对学生
          </p>
          <p
            className="bg-clip-text translate-y-1 text-[36px] font-bold text-transparent"
            style={{ backgroundImage: "linear-gradient(180deg, #0071EF 40%, rgba(20,155,255,.54) 100%)" }}
          >
            "1+1+1+1"
          </p>
          <p className="pb-[5px] text-[15px] font-bold text-[#464646]">
            从大二开始，正式成员参加一个工程、一次科研、一次学科竞赛、一次创业实践（创新大赛） 每年立项20+项目
          </p>
        </div>

        <div className="mb-[18px] flex justify-between">
          <StudentStageCard
            phase="【大二上起】"
            title="带着学：参与科研/产业实践"
            desc="基于教师指导和产业实践的的项目制实践学习"
          />
          <StudentStageCard
            phase="【大二下—大三上】"
            title="干中学：参与学科竞赛与创新创业大赛"
            desc="以大赛作为练兵场，以践促学，提升学生综合素质，验证商业化场景"
          />
          <StudentStageCard
            phase="【大三下—大四下】"
            title="社会化创新实践"
            desc="实验室为高年级本科成员打造面向真实社会的实践“微环境”"
          />
          <StudentStageCard
            phase="【大三—大四】"
            title="高质量升学/就业/创业"
            desc="通过一站式的培养，提升学生的升学/就业/创业质量"
          />
        </div>

        <div className="relative mb-[30px] h-[48px] w-full">
          <div className="absolute left-[150px] top-[8px] h-[17px] w-[17px] rounded-full bg-[#0B84F3]" />
          <div className="absolute left-[480px] top-[8px] h-[17px] w-[17px] rounded-full bg-[#0B84F3]" />
          <div className="absolute left-[810px] top-[8px] h-[17px] w-[17px] rounded-full bg-[#0B84F3]" />
          <div className="absolute left-[1140px] top-[8px] h-[17px] w-[17px] rounded-full bg-[#0B84F3]" />

          <div className="absolute left-[24px] top-[35px] h-[10px] w-[1260px] bg-gradient-to-r from-[#ffffff] via-[#4A96F3] via-[50%] to-[#0071EF]" />
          <div className="absolute left-[1280px] top-[28px] h-0 w-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-[#0071EF]" />
        </div>

        <div className="mb-[24px] flex items-end gap-[26px]">
          <p
            className="bg-clip-text text-[44px] font-black leading-[1] text-transparent"
            style={{ backgroundImage: "linear-gradient(180deg, #0071EF 40%, rgba(20,155,255,.54) 100%)" }}
          >
            对教师
          </p>
          <p
            className="bg-clip-text translate-y-1 text-[30px] font-bold text-transparent"
            style={{ backgroundImage: "linear-gradient(180deg, #0071EF 40%, rgba(20,155,255,.54) 100%)" }}
          >
            "科研灵感-科研过程-科研产出"
          </p>
          <p className="pb-[5px] text-[15px] font-bold text-[#464646]">
            优化传统科研路径
          </p>
        </div>

        <div className="flex items-center justify-between">
          <FeatureCard
            title="1.师生共创助推高质量科研灵感诞生"
            items={[
              "以交叉学科的背景学生团队，推动跨领域交流，产生交叉学科灵感",
              "以产业中的实际场景需求为导向，做有实际落地价值、带有工程属性的研究"
            ]}
          />
          <FeatureCard
            title="2.有组织的学生助研让师生共成长"
            items={[
              "学生自己做项目经理，在教师指导下自组织、自管理",
              "向外输出项目管理方法，帮助更多教师课题组高效管理"
            ]}
          />
          <FeatureCard
            title="3.师生共创一系列有实际社会意义的研究成果"
            items={[
              "一系列富有社会意义和影响力的成果",
              "以师生创业推动成果转化"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
