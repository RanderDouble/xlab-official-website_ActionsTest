function ChartCard({
  name,
  englishName,
  width,
  height,
  chineseSize = "text-[32px]",
  englishSize = "text-[20px]",
  chineseTracking = "tracking-[1px]",
  englishTracking = "tracking-[0.6px]",
  englishLeading = "leading-[1.2]",
}: {
  name: string;
  englishName: string;
  width: string;
  height: string;
  chineseSize?: string;
  englishSize?: string;
  chineseTracking?: string;
  englishTracking?: string;
  englishLeading?: string;
}) {
  return (
    <div
      className="flex shrink-0 flex-col items-center justify-center rounded-[25px] border-[5px] border-[#0071EF] bg-black"
      style={{ width, height }}
    >
      <p className={`${chineseSize} ${chineseTracking} text-center font-bold leading-[1.25] text-white`}>
        {name}
      </p>
      <p
        className={`mt-[4px] bg-clip-text text-center font-bold text-transparent ${englishSize} ${englishTracking} ${englishLeading}`}
        style={{ backgroundImage: "linear-gradient(90deg, #0071EF 0%, #149BFF 100%)" }}
      >
        {englishName}
      </p>
    </div>
  );
}

export function OrganizationStructure() {
  const teamEnglishMap: Record<string, string> = {
    硬件团队: "Hardware Group",
    软件团队: "Software Group",
    运营团队: "Operation Group",
    设计团队: "Design Group",
  };

  const teamOrder = ["硬件团队", "软件团队", "运营团队", "设计团队"];

  return (
    <section className="w-full bg-white py-[40px]">
      <div className="mx-auto w-full max-w-[1440px] px-[56px]">
        <div className="mx-auto h-[780px] w-[1120px]">
          <div className="relative h-full w-full">
            <div className="absolute left-[310px] top-0">
              <ChartCard
                name="组织架构"
                englishName="Organizational Structure"
                width="499px"
                height="197px"
                chineseSize="text-[48px]"
                englishSize="text-[24px]"
                chineseTracking="tracking-[7px]"
                englishTracking="tracking-[2.4px]"
              />
            </div>

            <svg
              className="absolute left-0 top-[197px]"
              width="1120"
              height="128"
              viewBox="0 0 1120 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M560 0 C560 52 408 18 205.5 78" stroke="#0071EF" strokeWidth="5" fill="none" />
              <path d="M560 0 C560 52 712 18 914.5 78" stroke="#0071EF" strokeWidth="5" fill="none" />
            </svg>

            <div className="absolute left-[-44px] top-[236px]">
              <ChartCard
                name="实验室管理委员会"
                englishName="X-Lab Management Committee"
                width="499px"
                height="148px"
              />
            </div>

            <div className="absolute left-[665px] top-[236px]">
              <ChartCard
                name="实验室指导委员会"
                englishName="X-Lab Steering Committee"
                width="499px"
                height="148px"
              />
            </div>

            <div className="absolute left-[-44px] top-[420px]">
              <ChartCard
                name="本科生体系"
                englishName="Undergraduates System"
                width="780px"
                height="125px"
                chineseSize="text-[32px]"
                englishSize="text-[20px]"
                chineseTracking="tracking-[0.96px]"
              />
            </div>

            <div className="absolute left-[776px] top-[420px]">
              <ChartCard
                name="研究生体系"
                englishName="Graduates System"
                width="395px"
                height="125px"
                chineseSize="text-[32px]"
                englishSize="text-[20px]"
                chineseTracking="tracking-[0.96px]"
              />
            </div>

            <div className="absolute left-[776px] top-[610px]">
              <ChartCard
                name="创投体系"
                englishName="Venture Capital System"
                width="395px"
                height="125px"
                chineseSize="text-[32px]"
                englishSize="text-[20px]"
                chineseTracking="tracking-[0.96px]"
              />
            </div>

            <svg
              className="absolute left-[-44px] top-[545px]"
              width="780"
              height="64"
              viewBox="0 0 780 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M390 0 C390 30 265 18 90 64" stroke="#0071EF" strokeWidth="5" fill="none" />
              <path d="M390 0 C390 20 345 20 290 64" stroke="#0071EF" strokeWidth="5" fill="none" />
              <path d="M390 0 C390 20 435 20 490 64" stroke="#0071EF" strokeWidth="5" fill="none" />
              <path d="M390 0 C390 30 515 18 690 64" stroke="#0071EF" strokeWidth="5" fill="none" />
            </svg>

            <div className="absolute left-[-44px] top-[610px] flex w-[780px] items-center justify-between">
              {teamOrder.map((team) => (
                <div key={team} className="flex h-[180px] w-[180px] shrink-0 flex-col items-center justify-center rounded-[25px] border-[5px] border-[#0071EF] bg-black">
                  <p className="text-[32px] font-bold leading-[40px] tracking-[1.6px] text-white">{team}</p>
                  <p
                    className="mt-[6px] bg-clip-text text-center text-[20px] font-bold leading-[25px] tracking-[0.4px] text-transparent"
                    style={{ backgroundImage: "linear-gradient(90deg, #0071EF 0%, #149BFF 100%)" }}
                  >
                    {(teamEnglishMap[team] ?? "Team Group").split(" ")[0]}
                    <br />
                    {(teamEnglishMap[team] ?? "Team Group").split(" ").slice(1).join(" ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
