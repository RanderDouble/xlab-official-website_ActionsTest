import type { CSSProperties } from "react";

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
  const stageVars = {
    "--org-scale": "min(1, calc((100vw - 32px) / 1120))",
    height: "calc(900px * var(--org-scale))",
  } as CSSProperties;

  return (
    <section className="w-full bg-white py-[40px]">
      <div className="mx-auto w-full max-w-[1440px] h-300 px-4 lg:px-[56px]">
        <div className="mx-auto flex w-full justify-center overflow-hidden" style={stageVars}>
          <div className="w-[1120px] origin-top scale-[var(--org-scale)]">
            <div className="mt-[100px] flex justify-center">
              <ChartCard
                name="组织架构"
                englishName="Organizational Structure"
                width="340px"
                height="112px"
                chineseSize="text-[32px]"
                englishSize="text-[16px]"
                chineseTracking="tracking-[3px]"
                englishTracking="tracking-[1px]"
              />
            </div>

            <svg
              className="mt-[-2px] w-full"
              width="1120"
              height="128"
              viewBox="0 0 1120 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M560 0 C560 52 430 18 180 78" stroke="#0071EF" strokeWidth="5" fill="none" />
              <path d="M560 0 C560 52 690 18 940 78" stroke="#0071EF" strokeWidth="5" fill="none" />
            </svg>

            <div className="mt-[-58px] grid grid-cols-2 justify-between">
              <div>
                <ChartCard
                  name="实验室管理委员会"
                  englishName="X-Lab Management Committee"
                  chineseSize="text-[32px]"
                  englishSize="text-[16px]"
                  width="360px"
                  height="120px"
                />
              </div>
              <div className="justify-self-end">
                <ChartCard
                  name="实验室指导委员会"
                  englishName="X-Lab Steering Committee"
                  chineseSize="text-[32px]"
                  englishSize="text-[16px]"
                  width="360px"
                  height="120px"
                />
              </div>
            </div>

            <div className="mt-[60px] grid grid-cols-[740px_360px] items-start justify-between">
              <div className="flex flex-col">
                <div>
                  <ChartCard
                    name="本科生体系"
                    englishName="Undergraduates System"
                    width="600px"
                    height="120px"
                    chineseSize="text-[32px]"
                    englishSize="text-[16px]"
                    chineseTracking="tracking-[0.96px]"
                  />
                </div>

                <svg
                  className="w-[740px]"
                  width="740"
                  height="64"
                  viewBox="0 0 740 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M300 0 C300 30 215 18 80 64" stroke="#0071EF" strokeWidth="5" fill="none" />
                  <path d="M300 0 C300 20 280 20 270 64" stroke="#0071EF" strokeWidth="5" fill="none" />
                  <path d="M300 0 C300 20 360 20 470 64" stroke="#0071EF" strokeWidth="5" fill="none" />
                  <path d="M300 0 C300 30 385 18 660 64" stroke="#0071EF" strokeWidth="5" fill="none" />
                </svg>

                <div className="mt-[-4px] flex w-[740px] items-center justify-between">
                  {teamOrder.map((team) => (
                    <div
                      key={team}
                      className="flex h-[170px] w-[170px] shrink-0 flex-col items-center justify-center rounded-[25px] border-[5px] border-[#0071EF] bg-black"
                    >
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

              <div className="flex flex-col gap-[60px]">
                <ChartCard
                  name="研究生体系"
                  englishName="Graduates System"
                  width="360px"
                  height="120px"
                  chineseSize="text-[32px]"
                  englishSize="text-[16px]"
                  chineseTracking="tracking-[0.96px]"
                />
                <ChartCard
                  name="创投体系"
                  englishName="Venture Capital System"
                  width="360px"
                  height="120px"
                  chineseSize="text-[32px]"
                  englishSize="text-[16px]"
                  chineseTracking="tracking-[0.96px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
