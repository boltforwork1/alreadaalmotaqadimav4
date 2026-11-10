import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  className?: string;
};

export default function Tabs({ tabs, className = '' }: TabsProps) {
  const [active, setActive] = useState(tabs[0]?.id);

  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div className={className}>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-1 border-b border-slate-200">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative px-5 py-3 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? 'border-b-2 border-teal-500 text-teal-600'
                  : 'border-b-2 border-transparent text-navy-500 hover:text-navy-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab?.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="pt-6"
        >
          {activeTab?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
