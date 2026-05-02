export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For YouTubers, Newsletter Writers &amp; Course Creators
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Creator Burnout<br />
          <span className="text-[#58a6ff]">Before It Happens</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Our ML engine monitors your posting frequency, engagement trends, and content quality signals to warn you 2–4 weeks before burnout hits — so you can course-correct, not crash.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Predicting — $12/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No credit card required for trial.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📉", title: "Engagement Drop Alerts", desc: "Detects declining view/open rates before your audience notices." },
            { icon: "📅", title: "Posting Cadence Tracking", desc: "Flags irregular schedules that historically precede burnout." },
            { icon: "🧠", title: "Content Quality Score", desc: "NLP analysis of your content sentiment and effort over time." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-sm text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "YouTube + Substack auto-sync",
              "ML burnout risk score (updated daily)",
              "Email + Slack alerts at 70% risk threshold",
              "90-day historical trend dashboard",
              "Personalized recovery recommendations"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the burnout prediction actually work?",
              a: "We analyze your historical posting cadence, engagement rate trends, and NLP-derived content quality scores. A gradient-boosted model trained on creator burnout patterns outputs a daily risk score from 0–100."
            },
            {
              q: "Which platforms are supported?",
              a: "YouTube and Substack are supported at launch via their official APIs. Twitter/X, Ghost, and Patreon integrations are on the roadmap for Q3."
            },
            {
              q: "What happens when my risk score gets high?",
              a: "You receive an email (and optional Slack message) with your current score, the top contributing factors, and a personalized action plan — like scheduling a content break or batching future posts."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Burnout Predictor. Built for creators who want to last.
      </footer>
    </main>
  );
}
