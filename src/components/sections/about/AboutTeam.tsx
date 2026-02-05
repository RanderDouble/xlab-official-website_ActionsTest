import { TEAM_LIST } from "@/lib/data";

export function AboutTeam() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-full">
            <div className="w-full aspect-[4/3] bg-gray-200 border rounded flex items-center justify-center text-sm text-gray-600">
              团队合照占位
            </div>
          </div>
          <div className="space-y-4">
            {TEAM_LIST.map((team) => (
              <div
                key={team.id}
                className="group border rounded-lg p-4 transition-colors hover:bg-gray-50"
              >
                <div className="text-lg font-semibold text-gray-800">{team.name}</div>
                <p className="text-sm text-gray-600 mt-2 leading-6">{team.description}</p>
                <div className="text-sm text-blue-600 mt-3 inline-flex items-center gap-1 transition-transform group-hover:translate-x-1">
                  learn more <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
