import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  FileCheck2,
  Globe2,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Stamp,
  Users,
  WalletCards,
  type LucideIcon,
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const heroImage =
  'https://images.pexels.com/photos/36765718/pexels-photo-36765718.jpeg?auto=compress&cs=tinysrgb&w=1800';

const services: { icon: LucideIcon; title: string; description: string; href: string }[] = [
  {
    icon: Building2,
    title: 'Company Formation',
    description: 'Build the right UAE business structure with clear guidance from first decision to final licence.',
    href: '/business-setup',
  },
  {
    icon: Stamp,
    title: 'PRO Services',
    description: 'Keep government applications, renewals, approvals, and document processing moving smoothly.',
    href: '/pro-services',
  },
  {
    icon: Plane,
    title: 'Visa & Immigration',
    description: 'Simplify investor, employee, family, residency, and Emirates ID requirements in one place.',
    href: '/services/immigration',
  },
  {
    icon: Landmark,
    title: 'Trade Licences',
    description: 'Get the right licence, manage changes, and stay ready for every stage of business growth.',
    href: '/services/trade-license',
  },
  {
    icon: WalletCards,
    title: 'Corporate Banking',
    description: 'Prepare your company profile and documents for a more confident corporate account journey.',
    href: '/services/bank-account',
  },
  {
    icon: FileCheck2,
    title: 'Government Approvals',
    description: 'Coordinate the specialist approvals your activity needs across the UAE government landscape.',
    href: '/services',
  },
];

const stats = [
  { value: 2500, suffix: '+', label: 'Businesses supported' },
  { value: 12, suffix: '+', label: 'Years of local expertise' },
  { value: 50, suffix: '+', label: 'Business setup pathways' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
];

const processSteps = [
  { number: '01', title: 'Tell us your goal', text: 'Share what you want to build, where you want to operate, and what support you need.' },
  { number: '02', title: 'Get a clear plan', text: 'Our specialists compare the practical options and outline the documents, costs, and next steps.' },
  { number: '03', title: 'We handle the details', text: 'From applications to government follow-up, we keep the process organised and transparent.' },
];

const values = [
  { icon: ShieldCheck, title: 'Built on trust', text: 'Straightforward advice, transparent communication, and no unnecessary complexity.' },
  { icon: Globe2, title: 'UAE expertise', text: 'Local knowledge that helps international founders make confident decisions.' },
  { icon: Users, title: 'Human support', text: 'A responsive team that stays close to your business beyond the first application.' },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '' });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;
    setSubmitted(true);
    setForm({ name: '', contact: '' });
  };

  return (
    <div className="overflow-hidden bg-[#f7faf9] text-[#103f49]">
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#053944] lg:min-h-[760px]">
        <img
          src={heroImage}
          alt="Business professionals discussing strategy in a modern office"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[#032b35]/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#032b35] via-[#053944]/90 to-[#053944]/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#032b35] via-transparent to-[#053944]/20" />
        <div className="pointer-events-none absolute -end-28 top-24 h-80 w-80 rounded-full border border-[#dca84c]/25 sm:h-[28rem] sm:w-[28rem]" />
        <div className="pointer-events-none absolute -end-12 top-40 h-56 w-56 rounded-full border border-[#dca84c]/15" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[760px] lg:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#dca84c]/45 bg-[#053944]/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f1c56b] backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              Your UAE business starts with clarity
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-7 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl"
            >
              Make your next move <span className="text-[#e3b45c]">count.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-[#d7e7e8] sm:text-xl"
            >
              Trend Group helps founders, investors, and growing companies establish, manage, and expand their businesses across the UAE.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#dca84c] to-[#f1c56b] px-6 py-3.5 text-sm font-bold text-[#053944] shadow-xl shadow-[#dca84c]/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-[#edbd5c] hover:to-[#f7d88c]"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/business-setup"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-[#f1c56b] hover:bg-white/10 hover:text-[#f1c56b]"
              >
                Explore our services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.34 }}
              className="mt-14 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/20 pt-6 sm:grid-cols-3"
            >
              {[
                { icon: BadgeCheck, label: 'Trusted guidance' },
                { icon: MapPin, label: 'UAE-wide support' },
                { icon: MessageCircle, label: 'Clear communication' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm font-medium text-white">
                  <item.icon className="h-5 w-5 shrink-0 text-[#f1c56b]" />
                  {item.label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 start-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#b9d0d3] lg:flex">
          <span className="h-px w-14 bg-[#dca84c]" />
          UAE business made simpler
          <span className="h-px w-14 bg-[#dca84c]" />
        </div>
      </section>

      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a96f1f]">About Trend Group</span>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight tracking-tight text-[#063d49] sm:text-5xl">
              The steady hand behind your UAE business journey.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#53727a]">
              Setting up a company should feel like the beginning of an opportunity, not a maze of paperwork. Trend Group brings company formation, government services, and ongoing business support together under one experienced team.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#53727a]">
              We make complex processes easier to understand, easier to manage, and easier to move forward with.
            </p>
            <Link to="/about" className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#a96f1f] transition-colors hover:text-[#075667]">
              Learn more about Trend Group
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -start-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-[#dca84c]" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`rounded-2xl border border-[#dbe8e8] bg-[#f7faf9] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#dca84c]/60 hover:shadow-xl ${index === 2 ? 'sm:col-span-2 sm:max-w-[calc(50%-0.5rem)]' : ''}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f1f0] text-[#075667]">
                    <value.icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#063d49]">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#53727a]">{value.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f2f7f6] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a96f1f]">What we do</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-[#063d49] sm:text-5xl">One partner. Every important detail.</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#53727a]">Practical business support for the decisions that shape your company, your people, and your next stage of growth.</p>
            </div>
            <Link to="/services" className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#a96f1f] hover:text-[#075667]">
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                className="group flex min-h-[245px] flex-col rounded-2xl border border-[#dbe8e8] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#dca84c]/60 hover:shadow-xl hover:shadow-[#0a4c59]/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f1f0] text-[#075667] transition-colors group-hover:bg-[#dca84c]/20 group-hover:text-[#a96f1f]">
                    <service.icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <span className="font-display text-sm font-bold text-[#c6d7d8]">0{index + 1}</span>
                </div>
                <h3 className="mt-7 font-display text-xl font-bold text-[#063d49]">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#53727a]">{service.description}</p>
                <Link to={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#a96f1f] transition-colors hover:text-[#075667]">
                  Explore service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#053944] py-20 sm:py-24">
        <div className="pointer-events-none absolute -end-24 -top-24 h-80 w-80 rounded-full border border-[#dca84c]/20" />
        <div className="pointer-events-none absolute -start-32 bottom-0 h-72 w-72 rounded-full bg-[#0f7888]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border-s border-[#dca84c]/50 ps-5 first:border-s-0 sm:first:border-s"
              >
                <p className="font-display text-5xl font-bold tracking-tight text-[#f1c56b]">
                  <AnimatedCounter endValue={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-[#b9d0d3]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a96f1f]">How it works</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-[#063d49] sm:text-5xl">A clearer path to getting started.</h2>
              <p className="mt-5 text-base leading-relaxed text-[#53727a]">From your first question to your next milestone, we keep the process focused, responsive, and easy to follow.</p>
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#075667]"><Check className="h-5 w-5 text-[#dca84c]" /> Transparent support at every stage</div>
            </div>
            <div className="divide-y divide-[#dbe8e8] border-y border-[#dbe8e8]">
              {processSteps.map((step) => (
                <div key={step.number} className="grid gap-4 py-7 sm:grid-cols-[72px_1fr] sm:items-start">
                  <span className="font-display text-sm font-bold tracking-[0.16em] text-[#dca84c]">{step.number}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#063d49]">{step.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#53727a]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eef5f3] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-y-0 end-0 w-1/3 bg-gradient-to-l from-[#dca84c]/10 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a96f1f]">Let’s talk</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-[#063d49] sm:text-5xl">Your next chapter deserves a strong start.</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#53727a]">Tell us a little about your plans and a Trend Group specialist will get back to you with a practical next step.</p>
            <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold text-[#075667]">
              <a href="mailto:info@alreyada-almotaqdima.ae" className="inline-flex items-center gap-2 hover:text-[#a96f1f]"><Mail className="h-4 w-4 text-[#dca84c]" /> Email our team</a>
              <a href="https://wa.me/971504229389" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#a96f1f]"><MessageCircle className="h-4 w-4 text-[#dca84c]" /> WhatsApp us</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-[#dbe8e8] bg-white p-6 shadow-xl shadow-[#0a4c59]/10 sm:p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f1f0] text-[#075667]"><MessageCircle className="h-6 w-6" /></div>
            <h3 className="font-display text-2xl font-bold text-[#063d49]">Request a consultation</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#53727a]">A few details are enough for us to start.</p>
            <div className="mt-6 space-y-4">
              <input
                type="text"
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Your full name"
                className="w-full rounded-xl border border-[#cbdedf] bg-[#f8fbfa] px-4 py-3 text-sm text-[#063d49] outline-none transition-colors placeholder:text-[#78969b] focus:border-[#dca84c] focus:ring-2 focus:ring-[#dca84c]/20"
              />
              <input
                type="text"
                required
                value={form.contact}
                onChange={(event) => setForm({ ...form, contact: event.target.value })}
                placeholder="Email or phone number"
                className="w-full rounded-xl border border-[#cbdedf] bg-[#f8fbfa] px-4 py-3 text-sm text-[#063d49] outline-none transition-colors placeholder:text-[#78969b] focus:border-[#dca84c] focus:ring-2 focus:ring-[#dca84c]/20"
              />
              <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#dca84c] to-[#f1c56b] px-5 py-3.5 text-sm font-bold text-[#053944] shadow-lg shadow-[#dca84c]/20 transition-all hover:from-[#edbd5c] hover:to-[#f7d88c]">
                {submitted ? 'Thank you — we’ll be in touch' : 'Request my consultation'}
                {!submitted && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
