import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CircleCheck as CheckCircle2,
  TriangleAlert as AlertTriangle,
  ShieldCheck,
  Lightbulb,
  Laptop,
  ShoppingBag,
  Palette,
  Briefcase,
  GraduationCap,
  FileBadge,
  Award,
  Smartphone,
  Wallet,
  FileStack,
  Users,
  Sparkles,
  ArrowRight,
  PenTool,
  Cpu,
  Megaphone,
  Camera,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import ServiceLayout from '@/components/ServiceLayout';

const activityIcons: LucideIcon[] = [Cpu, Megaphone, ShoppingBag, Palette, Briefcase];
const requirementIcons: LucideIcon[] = [GraduationCap, FileBadge, Award, Smartphone, Wallet, FileStack];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

export default function FreelanceLicenseAbuDhabi() {
  const { t } = useTranslation();
  const requirementsRef = useRef<HTMLDivElement>(null);

  const scrollToRequirements = () => {
    requirementsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activities = t('FreelanceLicenseAbuDhabi.activities', { returnObjects: true }) as { title: string; description: string }[];
  const requirements = t('FreelanceLicenseAbuDhabi.requirements', { returnObjects: true }) as { title: string; description: string }[];
  const benefits = t('FreelanceLicenseAbuDhabi.benefits', { returnObjects: true }) as string[];
  const targetAudience = t('FreelanceLicenseAbuDhabi.targetAudience', { returnObjects: true }) as string[];
  const ourServices = t('FreelanceLicenseAbuDhabi.ourServices', { returnObjects: true }) as string[];

  return (
    <ServiceLayout
      eyebrow={t('FreelanceLicenseAbuDhabi.eyebrow')}
      title={t('FreelanceLicenseAbuDhabi.title')}
      subtitle={t('FreelanceLicenseAbuDhabi.subtitle')}
    >
      <article>
        {/* Eligibility Alert */}
        <div className="relative overflow-hidden rounded-2xl border border-amber-300/60 bg-gradient-to-br from-amber-50 to-amber-50/30 p-6 sm:p-7">
          <div className="pointer-events-none absolute -end-16 -top-16 h-40 w-40 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/20">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-lg font-bold text-amber-900">
                {t('FreelanceLicenseAbuDhabi.eligibilityAlertTitle')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-amber-800/90">
                {t('FreelanceLicenseAbuDhabi.eligibilityAlertText')}
              </p>
              <button
                type="button"
                onClick={scrollToRequirements}
                className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-600/20 transition-all duration-200 hover:bg-amber-700 hover:shadow-xl"
              >
                {t('FreelanceLicenseAbuDhabi.eligibilityAlertButton')}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>

        {/* What is it */}
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
              <Lightbulb className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {t('FreelanceLicenseAbuDhabi.whatIsItTitle')}
            </h2>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            {t('FreelanceLicenseAbuDhabi.whatIsItText')}
          </p>
        </div>

        {/* Approved Activities */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
              <Laptop className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {t('FreelanceLicenseAbuDhabi.activitiesTitle')}
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            {activities.map((activity, i) => {
              const Icon = activityIcons[i] ?? Laptop;
              return (
                <motion.div
                  key={`activity-${i}`}
                  variants={fadeUp}
                  className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg hover:shadow-slate-900/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                      <Icon className="h-5 w-5 text-teal-600" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-base font-bold text-navy-900">
                        {activity.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-500">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Activities note */}
          <div className="mt-4 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
            <p className="text-sm leading-relaxed text-navy-500">
              {t('FreelanceLicenseAbuDhabi.activitiesNote')}
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div ref={requirementsRef} className="mt-12 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
              <FileStack className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {t('FreelanceLicenseAbuDhabi.requirementsTitle')}
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((req, i) => {
              const Icon = requirementIcons[i] ?? FileStack;
              return (
                <div
                  key={`req-${i}`}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950">
                    <Icon className="h-5 w-5 text-teal-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold text-navy-900">
                    {req.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                    {req.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Warning */}
        <div className="mt-10 rounded-2xl border-2 border-red-200 bg-red-50/60 p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-red-900">
                {t('FreelanceLicenseAbuDhabi.warningTitle')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-red-800/80">
                {t('FreelanceLicenseAbuDhabi.warningText')}
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
              <ShieldCheck className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {t('FreelanceLicenseAbuDhabi.benefitsTitle')}
            </h2>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <li
                key={`benefit-${i}`}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" strokeWidth={2.5} />
                </span>
                <span className="text-sm leading-relaxed text-navy-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Audience */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {t('FreelanceLicenseAbuDhabi.targetAudienceTitle')}
            </h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {targetAudience.map((item, i) => (
              <div
                key={`audience-${i}`}
                className="flex items-center gap-3 rounded-lg bg-navy-950 px-4 py-3.5"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-teal-400" />
                <span className="text-sm font-medium leading-snug text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
              <TrendingUp className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {t('FreelanceLicenseAbuDhabi.ourServicesTitle')}
            </h2>
          </div>

          {/* Timeline-style list */}
          <div className="mt-6 relative">
            <div className="absolute bottom-0 start-5 top-2 w-px bg-teal-200" />
            <ul className="space-y-5">
              {ourServices.map((service, i) => (
                <li key={`service-${i}`} className="relative flex items-start gap-4 ps-0">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-teal-300 bg-white font-display text-sm font-bold text-teal-600 shadow-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1 rounded-lg border border-slate-200 bg-white px-5 py-3.5 shadow-sm">
                    <p className="text-sm leading-relaxed text-navy-600">{service}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 p-8 text-center">
          <PenTool className="h-10 w-10 text-teal-400" strokeWidth={1.5} />
          <h3 className="font-display text-xl font-bold text-white">
            {t('FreelanceLicenseAbuDhabi.eligibilityAlertButton')}
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-slate-300">
            {t('ConsultationForm.subtitle')}
          </p>
          <button
            type="button"
            onClick={scrollToRequirements}
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-3.5 text-base font-semibold text-navy-950 shadow-lg shadow-teal-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/40"
          >
            {t('FreelanceLicenseAbuDhabi.eligibilityAlertButton')}
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
          </button>
        </div>
      </article>
    </ServiceLayout>
  );
}
