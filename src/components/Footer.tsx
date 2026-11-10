import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, Send, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TiktokIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.589 6.826a4.993 4.993 0 0 1-3.076-1.074 5.026 5.026 0 0 1-1.708-2.684 5.02 5.02 0 0 1-.087-.748v-.394H11.45v12.95a2.898 2.898 0 0 1-2.898 2.898 2.898 2.898 0 1 1 .804-5.683V9.015a6.753 6.753 0 0 0-1.054-.082 6.75 6.75 0 1 0 6.75 6.75V9.155a8.153 8.153 0 0 0 4.537 1.375V6.826h-.001z" />
    </svg>
  );
}

const quickLinkKeys = [
  { key: 'home', path: '/' },
  { key: 'businessSetup', path: '/business-setup' },
  { key: 'services', path: '/services' },
  { key: 'aboutUs', path: '/about' },
  { key: 'contact', path: '/contact' },
];

const socials = [
  { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/alreyada.almotaqdima?stkn=MjRsd2E2bzdyYmVw' },
  { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/share/1F49H8fJWm/' },
  { name: 'TikTok', icon: TiktokIcon, href: 'https://www.tiktok.com/@alreyadaalmotaqdima?_r=1&_t=ZS-9A7NIBoY0tJ' },
];

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden bg-[#053944] text-[#d7e7e8]">
      {/* Decorative top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#dca84c] to-transparent" />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#0f7888]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#dca84c]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Column 1: Logo & Tagline */}
          <div className="lg:pe-4">
            <Link to="/" className="inline-flex items-center rounded-xl p-1 transition-transform duration-200 hover:scale-[1.02]">
              <img
                src="/images/photo_2026-11-10_12-39-02-removebg-preview.png"
                alt="Trend Group"
                className="h-24 w-auto object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.22)]"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#b9d0d3]">
              {t('Footer.tagline')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:ps-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-[#f1c56b]">
              {t('Footer.quickLinks')}
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinkKeys.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-[#b9d0d3] transition-colors hover:text-[#f1c56b]"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-[#dca84c] transition-transform duration-200 group-hover:translate-x-0.5" />
                    {t(`Footer.links.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:ps-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-[#f1c56b]">
              {t('Footer.contactInfo')}
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-[#b9d0d3]">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#dca84c]" />
                <span>
                  {t('Footer.address.line1')}
                  <br />
                  {t('Footer.address.line2')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#dca84c]" />
                <a href="tel:+971502507774" className="transition-colors hover:text-[#f1c56b]">
                  <bdi>{t('Footer.call')}</bdi>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-[#dca84c]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c 0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a href="https://wa.me/971504229389" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f1c56b]">
                  <bdi>{t('Footer.whatsapp')}</bdi>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#dca84c]" />
                <a href="mailto:info@alreyada-almotaqdima.ae" className="transition-colors hover:text-[#f1c56b]">
                  {t('Footer.email')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social + Newsletter */}
          <div className="lg:ps-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-[#f1c56b]">
              {t('Footer.stayConnected')}
            </h4>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2c6974] bg-[#0a4c59] text-[#d7e7e8] transition-all duration-200 hover:border-[#dca84c]/70 hover:bg-[#dca84c]/10 hover:text-[#f1c56b]"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>

            <form onSubmit={handleSubscribe} className="mt-6">
              <label className="text-xs font-medium text-[#b9d0d3]">{t('Footer.newsletter')}</label>
              <div className="mt-2 flex items-center gap-2 rounded-full border border-[#2c6974] bg-[#0a4c59] p-1.5 transition-colors focus-within:border-[#dca84c]/70">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('Footer.newsletterPlaceholder')}
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white placeholder:text-[#8fb6ba] focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label={t('Footer.newsletter')}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#dca84c] to-[#f1c56b] text-[#053944] transition-transform duration-200 hover:scale-105"
                >
                  {subscribed ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-[#f1c56b]"
                >
                  {t('Footer.subscribed')}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#2c6974] pt-8 sm:flex-row">
          <p className="text-sm text-[#8fb6ba]">
            © {new Date().getFullYear()} Al REYADA AL MOTAQADIMA. {t('Footer.rights')}
          </p>
          <div className="flex items-center gap-6 text-sm text-[#8fb6ba]">
            <a href="#" className="transition-colors hover:text-[#f1c56b]">
              {t('Footer.privacyPolicy')}
            </a>
            <a href="#" className="transition-colors hover:text-[#f1c56b]">
              {t('Footer.termsOfService')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
