import { Shirt } from "lucide-react"

type Team = {
  name: string
  colorName: string
  colorClass: string
}

const teams: Team[] = [
  {
    name: "Beckton Reds",
    colorName: "Burgundy",
    colorClass: "bg-primary",
  },
  {
    name: "Power League Blues",
    colorName: "Navy",
    colorClass: "bg-slate-700",
  },
]

export function TeamsSection() {
  return (
    <section id="teams" className="mx-auto max-w-5xl scroll-mt-8 px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Teams &amp; Players
        </h2>
        <p className="mt-2 text-balance text-3xl font-black uppercase tracking-tight sm:text-4xl">
          Playing this Sunday
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {teams.map((team) => (
          <article
            key={team.name}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <header className="flex items-center gap-4 p-6">
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${team.colorClass} text-white`}
                aria-hidden="true"
              >
                <Shirt className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-xl font-black uppercase tracking-tight">
                  {team.name}
                </h3>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span
                    className={`inline-block h-3 w-3 rounded-full ${team.colorClass}`}
                    aria-hidden="true"
                  />
                  {team.colorName} kit
                </p>
              </div>
            </header>

            <div className="border-t border-border px-6 py-4 text-sm text-muted-foreground">
              Squad to be confirmed
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
