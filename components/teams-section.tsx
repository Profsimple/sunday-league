import { Shirt, Crown } from "lucide-react"

type Player = {
  name: string
  number: number
  position: string
  captain?: boolean
}

type Team = {
  name: string
  colorName: string
  colorClass: string
  ringClass: string
  players: Player[]
}

const teams: Team[] = [
  {
    name: "Beckton Reds",
    colorName: "Burgundy",
    colorClass: "bg-primary",
    ringClass: "ring-primary/30",
    players: [
      { name: "Jordan Bantu", number: 10, position: "Midfield", captain: true },
      { name: "Marcus Idris", number: 1, position: "Goalkeeper" },
      { name: "Danny Cole", number: 4, position: "Defender" },
      { name: "Reece Owusu", number: 6, position: "Defender" },
      { name: "Sam Patel", number: 8, position: "Midfield" },
      { name: "Leon Baptiste", number: 9, position: "Forward" },
      { name: "Kai Nguyen", number: 11, position: "Forward" },
    ],
  },
  {
    name: "Power League Blues",
    colorName: "Navy",
    colorClass: "bg-slate-700",
    ringClass: "ring-slate-400/30",
    players: [
      { name: "Tariq Hassan", number: 7, position: "Midfield", captain: true },
      { name: "Josh Bennett", number: 12, position: "Goalkeeper" },
      { name: "Andre Silva", number: 3, position: "Defender" },
      { name: "Mo Farah", number: 5, position: "Defender" },
      { name: "Ethan Clarke", number: 14, position: "Midfield" },
      { name: "Deniz Yilmaz", number: 17, position: "Forward" },
      { name: "Chris Adeyemi", number: 19, position: "Forward" },
    ],
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

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
        {teams.map((team) => {
          const captain = team.players.find((p) => p.captain)
          return (
            <article
              key={team.name}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* Header */}
              <header className="flex items-center gap-4 border-b border-border p-6">
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
                <span className="ml-auto shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                  {team.players.length} players
                </span>
              </header>

              {/* Captain */}
              {captain && (
                <div className="flex items-center gap-2 bg-accent/50 px-6 py-3 text-sm">
                  <Crown className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="font-semibold">Captain:</span>
                  <span className="text-muted-foreground">
                    {captain.name} · #{captain.number}
                  </span>
                </div>
              )}

              {/* Players */}
              <ul className="divide-y divide-border">
                {team.players.map((player) => (
                  <li key={player.number} className="flex items-center gap-4 px-6 py-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold text-foreground ring-2 ${team.ringClass}`}
                      aria-hidden="true"
                    >
                      {initials(player.name)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1.5 truncate font-semibold leading-tight">
                        {player.name}
                        {player.captain && (
                          <Crown
                            className="h-3.5 w-3.5 shrink-0 text-primary"
                            aria-label="Captain"
                          />
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">{player.position}</p>
                    </div>
                    <span className="shrink-0 text-lg font-black tabular-nums text-muted-foreground">
                      #{player.number}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
