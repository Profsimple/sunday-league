import {
  Users,
  Timer,
  ArrowLeftRight,
  Clock,
  Flag,
  ShieldAlert,
  Hand,
  SquareStack,
  BadgeCheck,
  AlarmClock,
  CalendarX,
  Banknote,
  UserX,
  Handshake,
} from "lucide-react"

type Rule = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  text: string
}

const rules: Rule[] = [
  {
    icon: Users,
    title: "Number of players",
    text: "Games are 7 or 8-a-side. Each team fields one goalkeeper plus outfield players. Aim to arrive with a full squad so games kick off on time.",
  },
  {
    icon: Timer,
    title: "Match duration",
    text: "Every game lasts a full 60 minutes, usually played as two halves with a short break to switch ends.",
  },
  {
    icon: ArrowLeftRight,
    title: "Substitutions",
    text: "Rolling substitutions are allowed at any time. Subs come on only once the player they replace is off the pitch.",
  },
  {
    icon: Clock,
    title: "Kick-off times",
    text: "Kick-off is 7:00 PM every Sunday. Be changed and pitch-side by 6:45 PM so we can start promptly.",
  },
  {
    icon: Flag,
    title: "Fouls & free-kicks",
    text: "Standard football rules apply. Free-kicks are awarded for fouls; keep a fair distance from the ball until it is back in play.",
  },
  {
    icon: ShieldAlert,
    title: "Tackles",
    text: "No slide tackles. Play the ball, not the player. Reckless or dangerous challenges will be penalised.",
  },
  {
    icon: Hand,
    title: "Goalkeeper rules",
    text: "Keepers can use hands inside their area only. No back-passes to be picked up, and distribution should be quick to keep the game flowing.",
  },
  {
    icon: SquareStack,
    title: "Yellow & red cards",
    text: "A yellow is a warning for persistent or reckless play. A red means you leave the pitch, and your team plays a player down.",
  },
  {
    icon: BadgeCheck,
    title: "Player eligibility",
    text: "Open to everyone, all abilities. You must confirm your spot in advance so we can balance the teams fairly.",
  },
  {
    icon: AlarmClock,
    title: "Punctuality",
    text: "Turn up on time. Late arrivals may miss the start and can be held back until there is a natural break to sub in.",
  },
  {
    icon: CalendarX,
    title: "Cancellations",
    text: "Let Jordan know as early as possible if you can't make it. Games only get cancelled in extreme weather or if numbers fall short.",
  },
  {
    icon: Banknote,
    title: "Payment",
    text: "It's £6 per person, per game, paid before or on the day. Your spot is confirmed once you've let Jordan know you're in.",
  },
  {
    icon: UserX,
    title: "No-shows",
    text: "If you confirm and don't turn up without notice, you may still owe your £6 and could drop down the list for future weeks.",
  },
  {
    icon: Handshake,
    title: "Sportsmanship",
    text: "Respect teammates, opponents and everyone around. No abuse, no arguments — it's a friendly, competitive community game.",
  },
]

export function RulesSection() {
  return (
    <section id="rules" className="scroll-mt-8 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Rules &amp; Guidelines
          </h2>
          <p className="mt-2 text-balance text-3xl font-black uppercase tracking-tight sm:text-4xl">
            How we play
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {rules.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {index + 1}
                </span>
              </span>
              <div>
                <h3 className="text-base font-bold leading-tight">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
