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
          backgroundColor: scrolled ? 'rgba(5, 57, 68, 0.98)' : 'rgba(8, 77, 89, 0.96)',
          borderColor: scrolled ? 'rgba(220, 170, 76, 0.55)' : 'rgba(255, 255, 255, 0.16)',
          boxShadow: scrolled ? '0 10px 34px rgba(3, 39, 47, 0.38)' : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="border-b border-solid backdrop-blur-xl"
      >
        <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link to="/" className="group flex items-center rounded-xl p-1 transition-transform duration-200 hover:scale-[1.02]">
            <img
              src="/images/photo_2026-11-10_12-39-02-removebg-preview.png"
              alt={t('Navbar.logoAlt')}
              className="h-[7rem] w-auto object-contain drop-shadow-[0_5px_14px_rgba(0,0,0,0.22)]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {simpleLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative rounded-lg px-4 py-2.5 text-base font-medium transition-colors duration-200 ${
                    active ? 'text-[#f1c56b]' : 'text-[#edf5f5] hover:text-[#f1c56b]'
                  }`}
                >
                  {t(`Navbar.links.${link.key}`)}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#dca84c]"
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
                    className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-base font-medium transition-colors duration-200 ${
                      active ? 'text-[#f1c56b]' : 'text-[#edf5f5] group-hover:text-[#f1c56b]'
                    }`}
                  >
                    {t(`Navbar.links.${dd.key}`)}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 group-hover:rotate-180 ${
                        active ? 'text-[#f1c56b]' : 'text-[#b9d0d3] group-hover:text-[#f1c56b]'
                      }`}
                    />
                  </Link>
                  {/* Dropdown panel */}
                  <div
                    className={`absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 origin-top transition-all duration-200 ${
                      openDropdown === dd.path
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-1 opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl border border-[#dca84c]/30 bg-[#053944] shadow-2xl shadow-[#032730]/50">
                      {dd.children.slice(0, dd.path === '/services' ? 5 : undefined).map((child) => {
                        const childActive = isActive(child.path);
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block border-b border-[#0f6674] px-5 py-3.5 text-base font-medium transition-colors duration-200 last:border-b-0 ${
                              childActive
                                ? 'bg-[#dca84c]/15 text-[#f1c56b]'
                                : 'text-[#d7e7e8] hover:bg-[#0b5968] hover:text-[#f1c56b]'
                            }`}
                          >
                            {t(`Navbar.dropdowns.${dd.key}.${child.key}`)}
                          </Link>
                        );
                      })}
                      {dd.path === '/services' && (
                        <Link
                          to="/services"
                          className="flex items-center justify-between border-t-2 border-[#dca84c]/50 bg-[#dca84c]/10 px-5 py-3.5 text-base font-bold text-[#f1c56b] transition-colors duration-200 hover:bg-[#dca84c]/20"
                        >
                          {t('Navbar.viewAllServices')}
                          <ArrowRightIcon className="h-5 w-5" />
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
                  className={`relative rounded-lg px-4 py-2.5 text-base font-medium transition-colors duration-200 ${
                    active ? 'text-[#f1c56b]' : 'text-[#edf5f5] hover:text-[#f1c56b]'
                  }`}
                >
                  {t(`Navbar.links.${link.key}`)}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#dca84c]"
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
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#dca84c] to-[#f1c56b] px-6 py-3 text-base font-semibold text-[#053944] shadow-lg shadow-[#dca84c]/25 transition-all duration-200 hover:from-[#edbd5c] hover:to-[#f7d88c] hover:shadow-xl hover:shadow-[#dca84c]/40"
            >
              {t('Navbar.requestQuote')}
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-12 w-12 items-center justify-center rounded-lg text-[#f1c56b] transition-colors hover:bg-white/10"
              aria-label={t('Navbar.toggleMenu')}
            >
              {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
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
            className="fixed inset-0 top-28 z-40 bg-[#032730]/55 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mx-4 mt-2 max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain rounded-2xl border border-[#dca84c]/35 bg-[#f8fbfa] shadow-2xl"
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
                          ? 'bg-[#dca84c]/15 text-[#075667]'
                          : 'text-[#174752] hover:bg-[#eaf3f2] hover:text-[#a96f1f]'
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
                          ? 'bg-[#dca84c]/15 text-[#075667]'
                          : 'text-[#174752] hover:bg-[#eaf3f2] hover:text-[#a96f1f]'
                      }`}
                    >
                      {t(`Navbar.links.${dd.key}`)}
                    </Link>
                    <div className="ms-3 border-s border-[#b8d1d3] ps-3">
                      {dd.children.map((child) => {
                        const active = isActive(child.path);
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block rounded-lg px-4 py-3 text-base transition-colors ${
                              active
                                ? 'bg-[#dca84c]/15 text-[#075667]'
                                : 'text-[#275760] hover:bg-[#eaf3f2] hover:text-[#a96f1f]'
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
                          ? 'bg-[#dca84c]/15 text-[#075667]'
                          : 'text-[#174752] hover:bg-[#eaf3f2] hover:text-[#a96f1f]'
                      }`}
                    >
                      {t(`Navbar.links.${link.key}`)}
                    </Link>
                  );
                })}

                <div className="mt-2 flex items-center gap-3 border-t border-[#c6d9da] pt-3">
                  <a
                    href="https://wa.me/971553735999"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#9bbfc2] text-[#075667] transition-colors hover:border-[#dca84c] hover:text-[#a96f1f]"
                    aria-label={t('Navbar.whatsappLabel')}
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                  <Link
                    to="/contact"
                    className="flex flex-1 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#dca84c] to-[#f1c56b] px-6 py-3 text-base font-semibold text-[#053944] shadow-lg shadow-[#dca84c]/25 hover:from-[#edbd5c] hover:to-[#f7d88c]"
                  >
                    {t('Navbar.requestQuote')}
                    <ArrowRight className="h-5 w-5" />
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
