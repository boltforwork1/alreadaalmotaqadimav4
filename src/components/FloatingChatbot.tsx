import { useState, useRef, useEffect, useMemo, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  MessageSquare,
  X,
  Send,
  Hand,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  Sparkles,
  Calculator,
  Scale,
  Building2,
  UserCheck,
  Clock,
  Headset,
  type LucideIcon,
} from 'lucide-react';

type ActionType = 'link' | 'external';

type ActionDef = {
  labelKey: string;
  type: ActionType;
  href: string;
};

type ReplyId =
  | 'costFreeZone'
  | 'costMainland'
  | 'costGeneral'
  | 'legal'
  | 'compare'
  | 'sponsor'
  | 'timeline'
  | 'goldenVisa'
  | 'visa'
  | 'bank'
  | 'liquidation'
  | 'license'
  | 'consultant'
  | 'fallback';

type ActionDefResolved = { label: string; type: ActionType; href: string };

type Reply = {
  id: ReplyId;
  textKey: string;
  actions?: ActionDef[];
};

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actions?: ActionDefResolved[];
};

type QuickOption = {
  id: string;
  chipKey: string;
  icon: LucideIcon;
  reply: Reply;
};

const WHATSAPP_URL = 'https://wa.me/971504229389';

/* ------------------------------------------------------------------ */
/* Knowledge base (keys only — text resolved at render time)          */
/* ------------------------------------------------------------------ */

const costFreeZone: Reply = {
  id: 'costFreeZone',
  textKey: 'FloatingChatbot.replies.costFreeZone',
  actions: [
    { labelKey: 'FloatingChatbot.replies.costFreeZone_actions.openCostCalculator', type: 'link', href: '/cost-calculator' },
    { labelKey: 'FloatingChatbot.replies.costFreeZone_actions.freeZoneBenefits', type: 'link', href: '/free-zone' },
  ],
};

const costMainland: Reply = {
  id: 'costMainland',
  textKey: 'FloatingChatbot.replies.costMainland',
  actions: [
    { labelKey: 'FloatingChatbot.replies.costMainland_actions.openCostCalculator', type: 'link', href: '/cost-calculator' },
    { labelKey: 'FloatingChatbot.replies.costMainland_actions.exploreMainlandSetup', type: 'link', href: '/mainland' },
  ],
};

const costGeneral: Reply = {
  id: 'costGeneral',
  textKey: 'FloatingChatbot.replies.costGeneral',
  actions: [
    { labelKey: 'FloatingChatbot.replies.costGeneral_actions.openCostCalculator', type: 'link', href: '/cost-calculator' },
    { labelKey: 'FloatingChatbot.replies.costGeneral_actions.talkOnWhatsApp', type: 'external', href: WHATSAPP_URL },
  ],
};

const legalReply: Reply = {
  id: 'legal',
  textKey: 'FloatingChatbot.replies.legal',
  actions: [
    { labelKey: 'FloatingChatbot.replies.legal_actions.exploreMainlandSetup', type: 'link', href: '/mainland' },
    { labelKey: 'FloatingChatbot.replies.legal_actions.freeZoneBenefits', type: 'link', href: '/free-zone' },
  ],
};

const compareReply: Reply = {
  id: 'compare',
  textKey: 'FloatingChatbot.replies.compare',
  actions: [
    { labelKey: 'FloatingChatbot.replies.compare_actions.mainlandSetup', type: 'link', href: '/mainland' },
    { labelKey: 'FloatingChatbot.replies.compare_actions.freeZoneSetup', type: 'link', href: '/free-zone' },
  ],
};

const sponsorReply: Reply = {
  id: 'sponsor',
  textKey: 'FloatingChatbot.replies.sponsor',
  actions: [
    { labelKey: 'FloatingChatbot.replies.sponsor_actions.exploreMainlandSetup', type: 'link', href: '/mainland' },
    { labelKey: 'FloatingChatbot.replies.sponsor_actions.talkOnWhatsApp', type: 'external', href: WHATSAPP_URL },
  ],
};

const timelineReply: Reply = {
  id: 'timeline',
  textKey: 'FloatingChatbot.replies.timeline',
  actions: [
    { labelKey: 'FloatingChatbot.replies.timeline_actions.freeZoneSetup', type: 'link', href: '/free-zone' },
    { labelKey: 'FloatingChatbot.replies.timeline_actions.mainlandSetup', type: 'link', href: '/mainland' },
  ],
};

const goldenVisaReply: Reply = {
  id: 'goldenVisa',
  textKey: 'FloatingChatbot.replies.goldenVisa',
  actions: [
    { labelKey: 'FloatingChatbot.replies.goldenVisa_actions.goldenVisaDetails', type: 'link', href: '/services/golden-visa' },
    { labelKey: 'FloatingChatbot.replies.goldenVisa_actions.talkOnWhatsApp', type: 'external', href: WHATSAPP_URL },
  ],
};

const visaReply: Reply = {
  id: 'visa',
  textKey: 'FloatingChatbot.replies.visa',
  actions: [
    { labelKey: 'FloatingChatbot.replies.visa_actions.goldenVisaDetails', type: 'link', href: '/services/golden-visa' },
    { labelKey: 'FloatingChatbot.replies.visa_actions.immigrationServices', type: 'link', href: '/services/immigration' },
  ],
};

const bankReply: Reply = {
  id: 'bank',
  textKey: 'FloatingChatbot.replies.bank',
  actions: [{ labelKey: 'FloatingChatbot.replies.bank_actions.bankAccountService', type: 'link', href: '/services/bank-account' }],
};

const liquidationReply: Reply = {
  id: 'liquidation',
  textKey: 'FloatingChatbot.replies.liquidation',
  actions: [{ labelKey: 'FloatingChatbot.replies.liquidation_actions.liquidationService', type: 'link', href: '/services/liquidation' }],
};

const licenseReply: Reply = {
  id: 'license',
  textKey: 'FloatingChatbot.replies.license',
  actions: [{ labelKey: 'FloatingChatbot.replies.license_actions.tradeLicenseService', type: 'link', href: '/services/trade-license' }],
};

const consultantReply: Reply = {
  id: 'consultant',
  textKey: 'FloatingChatbot.replies.consultant',
  actions: [{ labelKey: 'FloatingChatbot.replies.consultant_actions.connectViaWhatsApp', type: 'external', href: WHATSAPP_URL }],
};

const fallbackReply: Reply = {
  id: 'fallback',
  textKey: 'FloatingChatbot.replies.fallback',
  actions: [{ labelKey: 'FloatingChatbot.replies.fallback_actions.connectViaWhatsApp', type: 'external', href: WHATSAPP_URL }],
};

const quickOptions: QuickOption[] = [
  { id: 'cost', chipKey: 'FloatingChatbot.quickOptions.cost', icon: Calculator, reply: costGeneral },
  { id: 'legal', chipKey: 'FloatingChatbot.quickOptions.legal', icon: Scale, reply: legalReply },
  { id: 'compare', chipKey: 'FloatingChatbot.quickOptions.compare', icon: Building2, reply: compareReply },
  { id: 'sponsor', chipKey: 'FloatingChatbot.quickOptions.sponsor', icon: UserCheck, reply: sponsorReply },
  { id: 'time', chipKey: 'FloatingChatbot.quickOptions.time', icon: Clock, reply: timelineReply },
  { id: 'consultant', chipKey: 'FloatingChatbot.quickOptions.consultant', icon: Headset, reply: consultantReply },
];

type KeywordEntry = { keywords: string[]; reply: Reply };

const keywordMap: KeywordEntry[] = [
  { keywords: ['how much free', 'free zone cost', 'free zone price', 'freezone cost', 'free zone price'], reply: costFreeZone },
  { keywords: ['how much mainland', 'mainland cost', 'mainland price', 'mainland license'], reply: costMainland },
  { keywords: ['cost of visa', 'visa cost', 'visa price', 'how much visa'], reply: visaReply },
  { keywords: ['price', 'cost', 'pricing', 'fee', 'fees', 'how much', 'سعر', 'تكلفة'], reply: costGeneral },
  { keywords: ['visa', 'golden', 'residency', 'immigration', 'فيزا', 'إقامة'], reply: visaReply },
  { keywords: ['golden visa', '10 year', '10-year'], reply: goldenVisaReply },
  { keywords: ['sponsor', 'local sponsor', 'partner', 'كفيل', 'شريك'], reply: sponsorReply },
  { keywords: ['how long', 'time', 'timeline', 'duration', 'how fast', 'days', 'وقت', 'مدة'], reply: timelineReply },
  { keywords: ['legal', 'law', 'ownership', 'condition', 'conditions', 'قانون', 'شروط'], reply: legalReply },
  { keywords: ['mainland', 'free zone', 'freezone', 'compare', 'jurisdiction', 'منطقة'], reply: compareReply },
  { keywords: ['bank', 'account', 'banking', 'حساب', 'بنك'], reply: bankReply },
  { keywords: ['liquidation', 'close', 'cancel', 'deregister', 'إلغاء', 'تصفية'], reply: liquidationReply },
  { keywords: ['license', 'trade', 'renewal', 'رخصة', 'تجارية'], reply: licenseReply },
  { keywords: ['whatsapp', 'contact', 'consultant', 'call', 'talk', 'speak', 'واتساب', 'اتصال'], reply: consultantReply },
];

/* ------------------------------------------------------------------ */
/* Smart typing suggestions                                            */
/* ------------------------------------------------------------------ */

type Suggestion = { labelKey: string; reply: Reply };

const suggestionPool: { triggers: string[]; labelKey: string; reply: Reply }[] = [
  { triggers: ['how much', 'cost', 'price', 'fee'], labelKey: 'FloatingChatbot.suggestionLabels.howMuchFreeZone', reply: costFreeZone },
  { triggers: ['how much', 'cost', 'price', 'fee'], labelKey: 'FloatingChatbot.suggestionLabels.howMuchMainland', reply: costMainland },
  { triggers: ['how much', 'cost', 'price', 'fee', 'visa'], labelKey: 'FloatingChatbot.suggestionLabels.costOfVisa', reply: visaReply },
  { triggers: ['visa', 'golden', 'residency'], labelKey: 'FloatingChatbot.suggestionLabels.whatIsGoldenVisa', reply: goldenVisaReply },
  { triggers: ['sponsor', 'partner', 'ownership'], labelKey: 'FloatingChatbot.suggestionLabels.needLocalSponsor', reply: sponsorReply },
  { triggers: ['time', 'how long', 'days', 'fast', 'timeline'], labelKey: 'FloatingChatbot.suggestionLabels.howLongSetupTake', reply: timelineReply },
  { triggers: ['mainland', 'free zone', 'freezone', 'compare'], labelKey: 'FloatingChatbot.suggestionLabels.mainlandVsFreeZone', reply: compareReply },
  { triggers: ['bank', 'account'], labelKey: 'FloatingChatbot.suggestionLabels.howToOpenBankAccount', reply: bankReply },
  { triggers: ['legal', 'law', 'condition', 'ownership'], labelKey: 'FloatingChatbot.suggestionLabels.legalConditions', reply: legalReply },
  { triggers: ['license', 'trade', 'renew'], labelKey: 'FloatingChatbot.suggestionLabels.howToGetTradeLicense', reply: licenseReply },
  { triggers: ['close', 'cancel', 'liquidation'], labelKey: 'FloatingChatbot.suggestionLabels.howToCloseCompany', reply: liquidationReply },
  { triggers: ['consultant', 'whatsapp', 'talk', 'speak', 'contact'], labelKey: 'FloatingChatbot.suggestionLabels.speakWithConsultant', reply: consultantReply },
];

function getSuggestions(query: string): Suggestion[] {
  const lower = query.toLowerCase().trim();
  if (lower.length < 2) return [];
  const seen = new Set<string>();
  const results: Suggestion[] = [];
  for (const item of suggestionPool) {
    if (seen.has(item.labelKey)) continue;
    if (item.triggers.some((t) => lower.includes(t))) {
      seen.add(item.labelKey);
      results.push({ labelKey: item.labelKey, reply: item.reply });
    }
  }
  return results.slice(0, 4);
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

let messageCounter = 0;
const nextId = () => `msg-${messageCounter++}`;

function parseInput(text: string): Reply {
  const lower = text.toLowerCase().trim();
  for (const entry of keywordMap) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.reply;
    }
  }
  return fallbackReply;
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function FloatingChatbot() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => getSuggestions(input), [input]);

  const welcomeMessage: Message = useMemo(
    () => ({ id: 'welcome', sender: 'bot', text: t('FloatingChatbot.welcome') }),
    [t],
  );

  useEffect(() => {
    setMessages([welcomeMessage]);
  }, [welcomeMessage]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping, open]);

  const resolveReply = (reply: Reply): { text: string; actions: ActionDefResolved[] } => ({
    text: t(reply.textKey),
    actions: (reply.actions ?? []).map((a) => ({ label: t(a.labelKey), type: a.type, href: a.href })),
  });

  const pushBotReply = (reply: Reply) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const resolved = resolveReply(reply);
      setMessages((prev) => [...prev, { id: nextId(), sender: 'bot', text: resolved.text, actions: resolved.actions }]);
    }, 650);
  };

  const sendUserMessage = (text: string, reply: Reply) => {
    setMessages((prev) => [...prev, { id: nextId(), sender: 'user', text }]);
    pushBotReply(reply);
  };

  const handleQuickOption = (option: QuickOption) =>
    sendUserMessage(t(option.chipKey), option.reply);

  const handleSuggestion = (s: Suggestion) => {
    sendUserMessage(t(s.labelKey), s.reply);
    setInput('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    sendUserMessage(text, parseInput(text));
    setInput('');
  };

  const handleNewChat = () => {
    setMessages([welcomeMessage]);
    setInput('');
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex h-[31rem] w-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:w-96"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-navy-950 px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/15">
                  <Hand className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white">{t('FloatingChatbot.header.title')}</p>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    <span className="text-xs font-medium text-slate-400">{t('FloatingChatbot.header.online')}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleNewChat}
                  aria-label={t('FloatingChatbot.aria.newChat')}
                  title={t('FloatingChatbot.aria.newChatTitle')}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-navy-800 hover:text-teal-400"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label={t('FloatingChatbot.aria.closeChat')}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-navy-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4">
              {messages.map((msg) => (
                <div key={msg.id} className={msg.sender === 'user' ? 'flex flex-col items-end' : 'flex flex-col items-start'}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'bot'
                        ? 'rounded-ss-sm bg-white text-navy-700'
                        : 'rounded-se-sm bg-teal-500 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.actions.map((action) =>
                        action.type === 'link' ? (
                          <Link
                            key={action.label}
                            to={action.href}
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-100"
                          >
                            {action.label}
                            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                          </Link>
                        ) : (
                          <a
                            key={action.label}
                            href={action.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-100"
                          >
                            {action.label}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-ss-sm bg-white px-4 py-3 shadow-sm">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick chips (only on fresh chat) */}
            {messages.length <= 1 && !isTyping && (
              <div className="flex flex-wrap gap-2 border-t border-slate-100 bg-white px-4 py-3">
                {quickOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleQuickOption(option)}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-navy-700 transition-colors hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                    >
                      <Icon className="me-1.5 h-4 w-4 shrink-0 text-teal-600" />
                      {t(option.chipKey)}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Smart typing suggestions */}
            <AnimatePresence>
              {suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-slate-100 bg-slate-50 px-4 pt-2.5"
                >
                  <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    <Sparkles className="h-3 w-3 text-teal-500" />
                    {t('FloatingChatbot.suggestions')}
                  </div>
                  <div className="flex flex-wrap gap-2 pb-2.5">
                    {suggestions.map((s) => (
                      <button
                        key={s.labelKey}
                        onClick={() => handleSuggestion(s)}
                        className="rounded-full border border-teal-200 bg-white px-3 py-1.5 text-xs font-medium text-teal-700 transition-colors hover:bg-teal-50"
                      >
                        {t(s.labelKey)}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-slate-100 bg-white p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('FloatingChatbot.placeholder')}
                  dir="auto"
                  className="min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-start text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
                <button
                  type="submit"
                  aria-label={t('FloatingChatbot.aria.sendMessage')}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-lg shadow-teal-500/25 transition-transform duration-200 hover:scale-105"
                >
                  <Send className="h-4.5 w-4.5 rtl:rotate-180" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t('FloatingChatbot.aria.closeAssistant') : t('FloatingChatbot.aria.openAssistant')}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white shadow-xl shadow-teal-500/40 transition-all duration-200 hover:scale-110 hover:bg-teal-600"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>

        {!open && (
          <span className="absolute -end-0.5 -top-0.5 flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-75" />
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-teal-400 text-[10px] font-bold text-white">
              1
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
