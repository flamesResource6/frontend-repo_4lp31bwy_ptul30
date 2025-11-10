import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ShieldCheck, GraduationCap, LineChart, Wallet, Users, Trophy, Phone } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium bg-white/60 text-slate-700 shadow-sm ring-1 ring-white/40 backdrop-blur">
      <Sparkles className="h-3.5 w-3.5 text-indigo-600" /> {children}
    </span>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl bg-white/60 p-6 shadow ring-1 ring-white/40 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 p-3 text-white shadow-sm">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/60 p-4 text-center shadow ring-1 ring-white/40 backdrop-blur">
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-xs text-slate-600">{label}</div>
    </div>
  )
}

export default function App() {
  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-sky-50 to-white text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/40 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 shadow-sm" />
            <span className="text-lg font-extrabold tracking-tight">GenZ Money</span>
            <span className="ml-2 text-xs rounded-full bg-indigo-600/10 text-indigo-700 px-2 py-0.5">India</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollToId('pillars')} className="hover:text-indigo-600">Pillars</button>
            <button onClick={() => scrollToId('play')} className="hover:text-indigo-600">Play</button>
            <button onClick={() => scrollToId('planner')} className="hover:text-indigo-600">Planner</button>
            <button onClick={() => scrollToId('mentor')} className="hover:text-indigo-600">Mentor</button>
            <button onClick={() => scrollToId('insurance')} className="hover:text-indigo-600">Insurance 101</button>
            <button onClick={() => scrollToId('community')} className="hover:text-indigo-600">Community</button>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollToId('cta')} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-slate-800">
              Get Early Access <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <Badge>For education only — not investment advice</Badge>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Learn. Play. Plan. Protect. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Money made GenZ</span> 🪙
            </motion.h1>
            <p className="mt-4 text-slate-600 text-lg">
              A fun, safe finance app for India’s youth. Micro-lessons, dummy stock trading, smart salary planning, mentor guidance, and insurance basics — all in one place.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3" id="cta">
              <a href="#early-access" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:opacity-95">
                Join the Waitlist <ArrowRight className="h-5 w-5" />
              </a>
              <button onClick={() => scrollToId('pillars')} className="inline-flex items-center justify-center gap-2 rounded-full bg-white/70 px-6 py-3 text-slate-900 font-semibold shadow ring-1 ring-white/50 backdrop-blur hover:bg-white">
                Explore Features
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Stat label="Virtual Cash" value="₹1,00,000" />
              <Stat label="Lessons" value="100+" />
              <Stat label="Mentors" value="Verified" />
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] w-full">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/40 bg-white/40 backdrop-blur">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* Soft gradient highlight overlay (non-blocking) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section id="pillars" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Core Pillars</h2>
          <Badge>Built for students and young professionals</Badge>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={GraduationCap} title="Learn" desc="Bite-sized lessons on money, budgeting, credit, and investing. Gamified quizzes, streaks, and progress badges keep it fun." />
          <Feature icon={LineChart} title="Play" desc="Practice with ₹1L virtual cash in a dummy stock market. No real money — just safe, hands-on learning." />
          <Feature icon={Wallet} title="Planner" desc="Track salary, visualize expenses, and get personalized saving recommendations for your goals." />
          <Feature icon={Users} title="Mentor" desc="Connect with verified finance mentors for 1:1 educational sessions. No tips or stock calls — only learning." />
          <Feature icon={ShieldCheck} title="Insurance 101" desc="Understand the importance of protection and connect with IRDAI-licensed advisors through a compliant referral model." />
          <Feature icon={Trophy} title="Community & Challenges" desc="Join fun challenges, share wins, and climb leaderboards with fellow GenZ learners." />
        </div>
      </section>

      {/* Play - Dummy Trading */}
      <section id="play" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold">Play with ₹1,00,000 Virtual Cash</h3>
            <p className="mt-3 text-slate-600">Learn markets by doing — without risk. Build a mock portfolio, try strategies, and understand how compounding works.</p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>• Real-time like experience, purely educational</li>
              <li>• No real trading. No investment recommendations</li>
              <li>• Clear disclaimers and safety-first approach</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <button onClick={() => scrollToId('community')} className="rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold">Join Challenges</button>
              <button onClick={() => scrollToId('pillars')} className="rounded-full bg-white/70 px-5 py-2.5 text-sm font-semibold shadow ring-1 ring-white/50">Learn More</button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-3xl bg-white/60 p-2 shadow ring-1 ring-white/40">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-600/10 to-blue-600/10 p-6">
                <div className="grid grid-cols-3 gap-3">
                  <Stat label="Starter Cash" value="₹1L" />
                  <Stat label="Mock Trades" value="Unlimited" />
                  <Stat label="Risk" value="Zero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planner */}
      <section id="planner" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl bg-white/60 p-8 shadow ring-1 ring-white/40 backdrop-blur">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold">Salary Planner that actually vibes 💸</h3>
              <p className="mt-3 text-slate-600">Track inflows and outflows, spot spending patterns, and get smart suggestions to hit your saving goals.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <Stat label="Smart Rules" value="50/30/20" />
                <Stat label="Insights" value="Auto" />
                <Stat label="Goals" value="Custom" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-dashed border-slate-200 p-6 text-sm text-slate-600">
                <p className="font-semibold text-slate-800">What you’ll get</p>
                <ul className="mt-2 space-y-1">
                  <li>✅ Salary tracking</li>
                  <li>✅ Expense insights</li>
                  <li>✅ Savings recommendations</li>
                  <li>✅ Goal planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section id="mentor" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Learn 1:1 from Verified Mentors 👩‍🏫</h3>
            <p className="mt-3 text-slate-600">Book educational sessions with vetted finance coaches. No stock tips, only learning and clarity.</p>
            <div className="mt-6 flex gap-3">
              <a href="#early-access" className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-5 py-2.5 text-sm font-semibold shadow">Find a Mentor</a>
              <a href="#be-mentor" className="rounded-full bg-white/70 px-5 py-2.5 text-sm font-semibold shadow ring-1 ring-white/50">Become a Mentor</a>
            </div>
          </div>
          <div>
            <div className="rounded-3xl bg-white/60 p-6 shadow ring-1 ring-white/40">
              <div className="grid sm:grid-cols-2 gap-4">
                <Feature icon={Users} title="Verified Profiles" desc="Thorough checks ensure mentors are authentic and qualified educators." />
                <Feature icon={GraduationCap} title="Education-first" desc="Clear boundaries — no recommendations, only concepts and frameworks." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance 101 */}
      <section id="insurance" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 ring-1 ring-orange-100">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Insurance 101 — Protect what matters 🛡️</h3>
              <p className="mt-3 text-slate-700">Learn the basics of health, term, and motor insurance. Connect with IRDAI-licensed advisors via a compliant referral model.</p>
              <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                <li>• Education-first content</li>
                <li>• Verified, licensed partners</li>
                <li>• Transparent disclaimers</li>
              </ul>
            </div>
            <div>
              <div className="grid sm:grid-cols-3 gap-3">
                <Stat label="Advisors" value="IRDAI" />
                <Stat label="Purpose" value="Education" />
                <Stat label="Compliance" value="Strict" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Challenges */}
      <section id="community" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold">Community & Challenges</h3>
          <Badge>Leaderboards, streaks, and memes 🤝</Badge>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={Trophy} title="Weekly Challenges" desc="Complete tasks, earn badges, and share wins with friends." />
          <Feature icon={Users} title="Campus Clubs" desc="College tie-ups and branded programs for real-world learning." />
          <Feature icon={Sparkles} title="Streaks & Rewards" desc="Keep the habit alive with daily streaks and surprise drops." />
        </div>
      </section>

      {/* Revenue & Safety */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-white/60 p-8 shadow ring-1 ring-white/40">
            <h4 className="text-xl font-bold">How we sustain</h4>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>• Commission on mentor sessions (educational calls)</li>
              <li>• Subscription plans for premium lessons and webinars</li>
              <li>• Referral commissions from verified insurance partners</li>
              <li>• College tie-ups and branded educational programs</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white/60 p-8 shadow ring-1 ring-white/40">
            <h4 className="text-xl font-bold">Compliance & Safety</h4>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>• No real trading or investment recommendations</li>
              <li>• Clear disclaimers: For education only, not investment advice</li>
              <li>• Mentors and insurance advisors are verified professionals</li>
              <li>• IRDAI-compliant referral model for insurance partnerships</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/50 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-sm text-slate-600">“To become India’s #1 youth finance app that empowers every young person to learn, plan, and protect their financial future — safely and smartly.”</p>
            <p className="mt-3 text-xs text-slate-500">Disclaimer: GenZ Money is for education only and does not provide investment advice. Markets are risky — do your own research.</p>
          </div>
          <div className="md:justify-self-end">
            <a href="#early-access" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white text-sm font-semibold shadow hover:bg-slate-800">
              Get Early Access <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
