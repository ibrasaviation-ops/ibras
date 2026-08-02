'use client';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const AIRPORTS = [
  'North Perry Airport (HWO)',
  'Fort Lauderdale Executive Airport (FXE)',
  'Miami Executive Airport (TMB)',
  'Lantana Airport (LNA)',
];

const Footer = () => {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  return (
    <footer
      className={`relative overflow-hidden border-t border-border bg-background px-6 pb-6 pt-12 text-foreground md:px-12 lg:px-20 lg:pt-16 ${
        pathname === '/' && 'snap-start'
      }`}
    >
      {/* ── Simplified ambient effects ────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-highlight/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/[0.05] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ── Compact Brand header with larger logo ──────────────────────── */}
        <div className="mb-10 flex flex-col items-start gap-6 border-b border-border pb-8 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex items-center gap-5">
            <div className="relative shrink-0 group">
              <Image
                src="/logo.png"
                alt="Ibras Aviation Logo"
                width={100}
                height={100}
                className="relative object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 -m-4 rounded-full bg-highlight/5 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-highlight">
                Ibras Aviation
              </p>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                FAA Part 61 Flight Training
              </h3>
            </div>
          </div>
          <p className="max-w-sm text-pretty text-xs leading-relaxed text-muted md:text-right">
            Personalized FAA Part 61 flight training, helping students become safe, confident, and
            professional pilots.
          </p>
        </div>

        {/* ── Main grid ─────────────────────────────────────────────────── */}
        <div className="mb-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-subtle">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="footer-link text-muted">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link text-muted">
                  Services
                </a>
              </li>
              <li>
                <a href="#programs" className="footer-link text-muted">
                  Training Programs
                </a>
              </li>
              <li>
                <Link href="/fleet" className="footer-link text-muted">
                  Aircraft &amp; Simulator
                </Link>
              </li>
              <li>
                <a href="#FAQ" className="footer-link text-muted">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link text-muted">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info - Enhanced with proper links */}
          <div>
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-subtle">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="group flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Phone className="h-4 w-4 text-accent" />
                </span>
                <div className="pt-0.5">
                  <a
                    href="tel:+19547992097"
                    className="text-xs text-muted transition-colors hover:text-foreground hover:underline cursor-pointer"
                  >
                    +1 (954) 799-2097
                  </a>
                </div>
              </li>
              <li className="group flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Mail className="h-4 w-4 text-accent" />
                </span>
                <div className="pt-0.5">
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:Ibrasaviation@gmail.com"
                      className="text-xs text-muted transition-colors hover:text-foreground hover:underline cursor-pointer"
                    >
                      Ibrasaviation@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="group flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <MapPin className="h-4 w-4 text-accent" />
                </span>
                <div className="pt-0.5">
                  <a
                    href="https://www.google.com/maps/place/Miami,+FL,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs capitalize leading-relaxed text-muted transition-colors hover:text-foreground hover:underline"
                  >
                    Miami, South Florida, USA
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Training Locations */}
          <div>
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-subtle">
              Training Locations
            </h4>
            <ul className="space-y-1.5">
              {AIRPORTS.map((airport) => (
                <li key={airport}>
                  <span className="group flex cursor-pointer items-center gap-2 py-1.5 text-xs text-muted transition-colors hover:text-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-highlight/60 transition-colors group-hover:bg-highlight" />
                    {airport}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media - Enhanced with hover effects */}
          <div>
            <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-subtle">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-elevated/50 text-muted transition-all duration-300 hover:border-highlight/50 hover:bg-highlight/10 hover:text-foreground hover:shadow-lg hover:shadow-highlight/10"
                aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4 transition-all duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://www.instagram.com/pilotibrahimm?igsh=MWtzcTJhc296dDMwMg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-elevated/50 text-muted transition-all duration-300 hover:border-highlight/50 hover:bg-highlight/10 hover:text-foreground hover:shadow-lg hover:shadow-highlight/10"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4 transition-all duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://www.tiktok.com/@pilotibrahim1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-elevated/50 text-muted transition-all duration-300 hover:border-highlight/50 hover:bg-highlight/10 hover:text-foreground hover:shadow-lg hover:shadow-highlight/10"
                aria-label="Tiktok"
              >
                <FaTiktok className="h-4 w-4 transition-all duration-300 group-hover:scale-110" />
              </a>
            </div>
            <p className="mt-2 text-[10px] text-subtle">Connect with us for updates and news</p>
          </div>
        </div>

        {/* ── Bottom Bar ────────────────────────────────────────────────── */}
        <div className="relative pt-6">
          <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-[10px] text-subtle">
              © {new Date().getFullYear()} Ibras Aviation. All rights reserved.
            </p>
            <div className="flex gap-4 text-[10px]">
              <a href="#" className="footer-link text-muted">
                Privacy Policy
              </a>
              <a href="#" className="footer-link text-muted">
                Terms of Service
              </a>
              <a href="#" className="footer-link text-muted">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          position: relative;
          display: inline-block;
          transition: color 0.2s ease;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background: var(--color-highlight);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .footer-link:hover {
          color: var(--color-foreground);
        }
        .footer-link:hover::after {
          transform: scaleX(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-link {
            transition: none !important;
          }
          .footer-link::after {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
