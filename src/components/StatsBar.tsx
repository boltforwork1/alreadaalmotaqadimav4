import { useTranslation } from 'react-i18next';
import AnimatedCounter from '@/components/AnimatedCounter';

type Stat = {
  endValue: number;
  suffix?: string;
  labelKey: string;
};

const defaultStats: Stat[] = [
  { endValue: 2500, suffix: '+', labelKey: 'StatsBar.defaults.clientsServed' },
  { endValue: 12, suffix: '+', labelKey: 'StatsBar.defaults.yearsOfExperience' },
  { endValue: 50, suffix: '+', labelKey: 'StatsBar.defaults.freeZonePartners' },
  { endValue: 100, suffix: '%', labelKey: 'StatsBar.defaults.complianceRate' },
];

type StatsBarProps = {
  stats?: Stat[];
};

export default function StatsBar({ stats = defaultStats }: StatsBarProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-navy-950 p-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.labelKey} className="text-center">
          <p className="font-display text-3xl font-bold text-teal-400">
            <AnimatedCounter endValue={stat.endValue} suffix={stat.suffix} />
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
            {t(stat.labelKey)}
          </p>
        </div>
      ))}
    </div>
  );
}
