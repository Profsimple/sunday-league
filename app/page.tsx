import { MapPin, Clock, Users, Trophy, Phone, Banknote, Timer } from "lucide-react"

const PHONE = "447480796567"
const PHONE_DISPLAY = "+44 7480 796567"
const WHATSAPP = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi Jordan, I'd like to join Sunday League football.",
)}`

const details = [
  {
    icon: MapPin,
    label: "Where",
    value: "Beckton Power League",
    sub: "IG11 0AD",
  },
  {
    icon: Clock,
    label: "When",
    value: "Every Sunday",
    sub: "7:00 PM",
  },
  {
    icon: Trophy,
    label: "What",
    value: "7 / 8-a-side football",
    sub: "Competitive & casual",
  },
  {
    icon: Users,
    label: "Who",
    value: "Everyone welcome",
    sub: "All abilities",
  },
  {
    icon: Banknote,
    label: "Cost",
    value: "£6 per person",
    sub: "Per game",
  },
  {
    icon: Timer,
    label: "Duration",
    value: "1 hour per game",
    sub: "Full 60 minutes",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src="/players.png"
          alt="Seven footballers competing with a ball on a floodlit pitch at night"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[85vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
          <span className="mb-6 inline-flex items-center rounded-full border border-primary-foreground/30 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-primary-foreground/90">
            Every Sunday · 7PM
          </span>
          <h1 className="text-balance text-5xl font-extrabold uppercase leading-none tracking-tight text-primary-foreground sm:text-7xl">
            Sunday League
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-primary-foreground/80">
            7/8-a-side football at Beckton Power League. Open to everyone — just £6 per person, per game.
          </p>
          <a
            href={WHATSAPP}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-base font-semibold text-primary shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Sign up now
          </a>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          The details
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {details.map(({ icon: Icon, label, value, sub }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 text-lg font-bold leading-tight">{value}</p>
                <p className="text-sm text-muted-foreground">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sign up */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Ready to play?
          </h2>
          <p className="mt-4 max-w-md text-pretty text-primary-foreground/80">
            Spots are £6 per person, per game — first come, first served. Message Jordan Bantu to grab yours for this Sunday.
          </p>
          <a
            href={WHATSAPP}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-base font-semibold text-primary shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Message Jordan Bantu
          </a>
          <a
            href={`tel:+${PHONE}`}
            className="mt-4 text-lg font-semibold tracking-wide text-primary-foreground/90 underline-offset-4 hover:underline"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Sunday League · Beckton Power League, IG11 0AD
      </footer>
    </main>
  )
}
