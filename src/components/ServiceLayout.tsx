import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import ConsultationForm from '@/components/ConsultationForm';

type ServiceLayoutProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function ServiceLayout({ eyebrow, title, subtitle, children }: ServiceLayoutProps) {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20">
        {/* Geometric gradient pattern */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-teal-400">
              {eyebrow}
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-snug text-white lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Split content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left: content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              {children}
            </motion.div>

            {/* Right: sticky sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <ConsultationForm />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
