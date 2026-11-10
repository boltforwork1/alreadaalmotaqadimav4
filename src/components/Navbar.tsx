import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MessageCircle, ArrowRight, ChevronDown, ArrowRight as ArrowRightIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type SimpleLink = { path: string; key: string };
type DropdownLink = { path: string; key: string };
type DropdownItem = { path: string; key: string; children: DropdownLink[] };

const simpleLinks: SimpleLink[] = [
  { key: 'home', path: '/' },
];

const dropdowns: DropdownItem[] = [
  {
    key: 'businessSetup',
    path: '/business-setup',
    children: [
      { key: 'mainlandLicense', path: '/mainland' },
      { key: 'freeZoneLicense', path: '/free-zone' },
      { key: 'freelanceLicenseAbuDhabi', path: '/freelance-license-abu-dhabi' },
      { key: 'eTraderLicenseDubai', path: '/e-trader-license' },
    ],
  },
  {
    key: 'services',
    path: '/services',
    children: [
      { key: 'monthlyProContract', path: '/monthly-contract' },
      { key: 'tradeLicense', path: '/services/trade-license' },
      { key: 'mohreServices', path: '/mohre-services' },
      { key: 'emiratesIdServices', path: '/emirates-id' },
      { key: 'uaeGoldenVisa', path: '/services/golden-visa' },
      { key: 'proServices', path: '/pro-services' },
      { key: 'corporateBankAccount', path: '/services/bank-account' },
      { key: 'immigrationRegistration', path: '/services/immigration' },
      { key: 'companyLiquidation', path: '/services/liquidation' },
      { key: 'gdrfaServices', path: '/gdrfa-services' },
      { key: 'rtaServices', path: '/rta-services' },
      { key: 'siraServices', path: '/sira-services' },
      { key: 'notaryPublicServices', path: '/notary-services' },
    ],
  },
];

const trailingLinks: SimpleLink[] = [
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (d: DropdownItem) =>
    d.path === location.pathname || d.children.some((c) => c.path === location.pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.94)',
          borderColor: scrolled ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.08)',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.4)' : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="border-b backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link to="/" className="group flex items-center">
            <img src="/logo4.png" alt={t('Navbar.logoAlt')} className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {simpleLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? 'text-teal-400' : 'text-slate-200 hover:text-teal-400'
                  }`}
                >
                  {t(`Navbar.links.${link.key}`)}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-teal-500"
                    />
                  )}
                </Link>
              );
            })}

            {dropdowns.map((dd) => {
              const active = isDropdownActive(dd);
              return (
                <div
                  key={dd.path}
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(dd.path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={dd.path}
                    className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      active ? 'text-teal-400' : 'text-slate-200 group-hover:text-teal-400'
                    }`}
                  >
                    {t(`Navbar.links.${dd.key}`)}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 group-hover:rotate-180 ${
                        active ? 'text-teal-400' : 'text-slate-400 group-hover:text-teal-400'
                      }`}
                    />
                  </Link>
                  {/* Dropdown panel */}
                  <div
                    className={`absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 origin-top transition-all duration-200 ${
                      openDropdown === dd.path
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-1 opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl border border-navy-700/80 bg-navy-950 shadow-2xl shadow-black/50">
                      {dd.children.slice(0, dd.path === '/services' ? 5 : undefined).map((child) => {
                        const childActive = isActive(child.path);
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block border-b border-navy-800 px-5 py-3 text-sm font-medium transition-colors duration-200 last:border-b-0 ${
                              childActive
                                ? 'bg-teal-500/10 text-teal-400'
                                : 'text-slate-300 hover:bg-navy-800 hover:text-teal-400'
                            }`}
                          >
                            {t(`Navbar.dropdowns.${dd.key}.${child.key}`)}
                          </Link>
                        );
                      })}
                      {dd.path === '/services' && (
                        <Link
                          to="/services"
                          className="flex items-center justify-between border-t-2 border-teal-500/30 bg-teal-500/5 px-5 py-3 text-sm font-bold text-teal-400 transition-colors duration-200 hover:bg-teal-500/15"
                        >
                          {t('Navbar.viewAllServices')}
                          <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {trailingLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? 'text-teal-400' : 'text-slate-200 hover:text-teal-400'
                  }`}
                >
                  {t(`Navbar.links.${link.key}`)}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-teal-500"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-all duration-200 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/40"
            >
              {t('Navbar.requestQuote')}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-100 transition-colors hover:bg-white/10"
              aria-label={t('Navbar.toggleMenu')}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 bg-navy-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mx-4 mt-2 max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain rounded-2xl border border-navy-100 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col p-3">
                {simpleLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active
                          ? 'bg-teal-50 text-teal-600'
                          : 'text-navy-700 hover:bg-navy-50 hover:text-teal-500'
                      }`}
                    >
                      {t(`Navbar.links.${link.key}`)}
                    </Link>
                  );
                })}

                {dropdowns.map((dd) => (
                  <div key={dd.path} className="flex flex-col">
                    <Link
                      to={dd.path}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isDropdownActive(dd)
                          ? 'bg-teal-50 text-teal-600'
                          : 'text-navy-700 hover:bg-navy-50 hover:text-teal-500'
                      }`}
                    >
                      {t(`Navbar.links.${dd.key}`)}
                    </Link>
                    <div className="ms-3 border-s border-navy-100 ps-3">
                      {dd.children.map((child) => {
                        const active = isActive(child.path);
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                              active
                                ? 'bg-teal-50 text-teal-600'
                                : 'text-navy-600 hover:bg-navy-50 hover:text-teal-500'
                            }`}
                          >
                            {t(`Navbar.dropdowns.${dd.key}.${child.key}`)}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {trailingLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        active
                          ? 'bg-teal-50 text-teal-600'
                          : 'text-navy-700 hover:bg-navy-50 hover:text-teal-500'
                      }`}
                    >
                      {t(`Navbar.links.${link.key}`)}
                    </Link>
                  );
                })}

                <div className="mt-2 flex items-center gap-3 border-t border-navy-100 pt-3">
                  <a
                    href="https://wa.me/971504229389"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-teal-400 hover:text-teal-600"
                    aria-label={t('Navbar.whatsappLabel')}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <Link
                    to="/contact"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 hover:bg-teal-600"
                  >
                    {t('Navbar.requestQuote')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
