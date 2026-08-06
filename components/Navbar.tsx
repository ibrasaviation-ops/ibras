/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { RxCross1 } from 'react-icons/rx';
import { IoMenu } from 'react-icons/io5';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Fleet', id: 'fleet' },
  { label: 'Programs', id: 'programs' },
  { label: 'Instructors', id: 'experience' },
  { label: 'TSA', href: '/tsa' },
  { label: 'Contact', id: 'contact' },
  { label: 'Fly With Us', href: '/DiscoveryFlights' },
];

const NAVBAR_HEIGHT = 80;

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Mark when client-side rendering starts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Set active state for external pages based on pathname
  useEffect(() => {
    if (!isClient) return;

    // Check if we're on TSA page
    if (pathname === '/tsa') {
      setActiveId('tsa');
    }
    // Check if we're on Discovery Flights page
    else if (pathname === '/DiscoveryFlights') {
      setActiveId('discoveryflights');
    }
    // Check if we're on the homepage with a hash
    else if (pathname === '/') {
      const hash = window.location.hash.replace('#', '');
      if (hash && NAV_LINKS.some((link) => link.id === hash)) {
        setActiveId(hash);
      } else {
        setActiveId(null);
      }
    } else {
      setActiveId(null);
    }
  }, [pathname, isClient]);

  // Click outside effect
  useEffect(() => {
    if (!mobileOpen || !isClient) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen, isClient]);

  // Hash navigation effect
  useEffect(() => {
    if (!isClient || pathname !== '/') return;

    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const timer = setTimeout(() => {
      const container = document.getElementById('scroll-container');
      const section = document.getElementById(hash);

      if (!container || !section) return;

      container.scrollTo({
        top: section.offsetTop - NAVBAR_HEIGHT,
        behavior: 'smooth',
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, isClient]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    setActiveId(id);

    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }

    const container = document.getElementById('scroll-container');
    const section = document.getElementById(id);

    if (!container || !section) return;

    container.scrollTo({
      top: section.offsetTop - NAVBAR_HEIGHT,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', `#${id}`);
  };

  const scrollToTop = () => {
    setMobileOpen(false);
    setActiveId(null);

    if (pathname !== '/') {
      router.push('/');
      return;
    }

    const container = document.getElementById('scroll-container');
    if (!container) return;

    container.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', window.location.pathname);
  };

  const renderLinks = (mobile = false) =>
    NAV_LINKS.map(({ label, id, href }, index) => {
      // Check if this link should be active
      let isActive = false;

      if (id) {
        isActive = activeId === id;
      } else if (href) {
        // For external pages, check if current pathname matches
        if (href === '/tsa') {
          isActive = pathname === '/tsa';
        } else if (href === '/DiscoveryFlights') {
          isActive = pathname === '/DiscoveryFlights';
        }
      }

      if (mobile) {
        const baseClassName =
          'block w-full rounded-xl px-4 py-3.5 text-left text-[15px] font-medium tracking-wide transition-all duration-300 ease-out active:scale-[0.98]';

        // Mobile: active white background
        const bgEffectClass = `relative overflow-hidden before:absolute before:inset-0 before:rounded-xl before:transition-all before:duration-300
      before:bg-white/0
      hover:before:bg-white/15
      active:before:bg-white/20
      ${isActive ? 'before:bg-white! text-primary' : 'text-muted'}`;

        const className = `${baseClassName} ${bgEffectClass}`;

        const style = {
          transitionDelay: mobileOpen ? `${index * 40}ms` : '0ms',
        };

        if (href) {
          return (
            <Link
              key={label}
              href={href}
              onClick={() => {
                setMobileOpen(false);
                // Set active state for external pages
                if (href === '/tsa') {
                  setActiveId('tsa');
                } else if (href === '/DiscoveryFlights') {
                  setActiveId('discoveryflights');
                }
              }}
              className={`${className} ${
                mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              } transition-[opacity,transform,background-color,color]`}
              style={style}
            >
              <span className="relative z-10">{label}</span>
            </Link>
          );
        }

        return (
          <button
            key={label}
            onClick={() => scrollToSection(id!)}
            className={`${className} ${
              mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            } transition-[opacity,transform,background-color,color]`}
            style={style}
          >
            <span className="relative z-10">{label}</span>
          </button>
        );
      }

      // Desktop: active white background
      const desktopClassName = `group relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 ease-out cursor-pointer
    before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300
    before:bg-white/0
    hover:before:bg-white/12
    active:before:bg-white/20 active:scale-[0.97]
    ${isActive ? 'before:bg-white! text-primary' : 'text-muted '}`;

      if (href) {
        return (
          <Link
            key={label}
            href={href}
            className={desktopClassName}
            onClick={() => {
              // Set active state for external pages
              if (href === '/tsa') {
                setActiveId('tsa');
              } else if (href === '/DiscoveryFlights') {
                setActiveId('discoveryflights');
              }
            }}
          >
            <span className="relative z-10">{label}</span>
          </Link>
        );
      }

      return (
        <button key={label} onClick={() => scrollToSection(id!)} className={desktopClassName}>
          <span className="relative z-10">{label}</span>
        </button>
      );
    });

  // Always render with solid style
  return (
    <header
      ref={menuRef}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-500 ease-out md:px-6 md:pt-5"
    >
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between rounded-3xl bg-background/85 px-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl md:h-17 md:px-8">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="relative flex cursor-pointer items-center transition-transform duration-300 ease-out hover:scale-[1.03]"
          aria-label="Go to top"
        >
          <div className="absolute inset-0 -m-2 rounded-full bg-highlight/10 blur-xl" />
          <Image
            src="/logo.png"
            alt="Ibras Aviation Logo"
            width={90}
            height={90}
            className="relative object-contain"
            priority
          />
        </button>

        {/* Desktop Navigation - Always Visible */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {renderLinks()}

          <Link
            href="/application"
            className="relative ml-3 overflow-hidden rounded-xl px-5 py-2.5 text-[13px] font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_12px_rgba(31,78,154,0.45)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_20px_rgba(93,132,214,0.55)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-highlight"
            style={{
              background:
                'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
            }}
          >
            <span className="relative z-10">Apply</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 ease-out hover:opacity-100" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-xl p-2 text-muted transition-all duration-300 ease-out hover:bg-elevated/60 hover:text-foreground lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span className="relative block h-5 w-5">
            <RxCross1
              size={20}
              className={`absolute inset-0 transition-all duration-300 ease-out ${
                mobileOpen ? 'rotate-0 opacity-100' : 'rotate-45 opacity-0'
              }`}
            />
            <IoMenu
              size={24}
              className={`absolute inset-0 -m-0.5 transition-all duration-300 ease-out ${
                mobileOpen ? '-rotate-45 opacity-0' : 'rotate-0 opacity-100'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mx-auto max-w-screen-2xl overflow-hidden transition-all duration-500 ease-out lg:hidden ${
          mobileOpen ? 'mt-2 max-h-150 opacity-100' : 'mt-0 max-h-0 opacity-0'
        }`}
      >
        <div
          className="space-y-1 rounded-3xl px-4 py-5 shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
          style={{
            background: 'color-mix(in srgb, var(--color-background) 85%, transparent)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          {renderLinks(true)}

          <div className="mt-3 border-t border-white/10 pt-4">
            <Link
              href="/application"
              onClick={() => {
                setMobileOpen(false);
                setActiveId(null);
              }}
              className="block rounded-xl px-4 py-3.5 text-center text-sm font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_12px_rgba(31,78,154,0.4)] transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
              }}
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
