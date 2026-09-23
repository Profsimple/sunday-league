import {
  MapPin,
  Clock,
  Users,
  Trophy,
  Phone,
  Banknote,
  Timer,
  MessageCircle,
  CalendarDays,
  ArrowRight,
} from "lucide-react"

const PHONE = "447480796567"
const PHONE_DISPLAY = "+44 7480 796567"
const WHATSAPP = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi Jordan, I'd like to join Sunday League football.",
)}`
const SPOTS_LEFT = 8

function getNextSunday() {
  const now = new Date()
  const daysUntil = (7 - now.getDay()) % 7 // 0 = today is Sunday
  const next = new Date(now)
  next.setDate(now.getDate() + daysUntil)
  return next.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })
}

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
          className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-background/90"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 py-24">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground" />
            </span>
            7-a-side · Every Sunday
          </span>

          <h1 className="max-w-3xl text-balance text-6xl font-black uppercase leading-[0.9] tracking-tight text-primary-foreground sm:text-8xl">
            Sunday League
          </h1>

          <p className="mt-6 max-w-xl text-balance text-2xl font-bold uppercase leading-tight tracking-tight text-primary-foreground/90 sm:text-3xl">
            Sunday Football.
            <br className="hidden sm:block" /> Every Week. No Excuses.
          </p>

          {/* Key info strip */}
          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {[
              { icon: CalendarDays, label: "Next game", value: getNextSunday() },
              { icon: Clock, label: "Kick-off", value: "7:00 PM" },
              { icon: MapPin, label: "Venue", value: "Beckton Power League" },
              { icon: Users, label: "Spaces left", value: `${SPOTS_LEFT} spots` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </dt>
                <dd className="text-base font-bold leading-tight text-primary-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-base font-bold uppercase tracking-wide text-primary shadow-lg transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Join this Sunday
            </a>
            <a
              href="#details"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/40 px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              View fixtures
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="mx-auto max-w-4xl scroll-mt-8 px-6 py-20">
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
            href={WHATSAPP}
            className="mt-4 inline-flex items-center gap-2 text-lg font-semibold tracking-wide text-primary-foreground/90 underline-offset-4 hover:underline"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        Sunday League · Beckton Power League, IG11 0AD
      </footer>
    </main>
  )
}
