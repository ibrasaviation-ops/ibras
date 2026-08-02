'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { RxCross1 } from 'react-icons/rx';
import { IoMenu } from 'react-icons/io5';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Fleet', id: 'fleet' },
  { label: 'Programs', id: 'programs' },
  { label: 'Instructors', id: 'instructors' },
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
  const [isNavigating, setIsNavigating] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
    };
  }, []);

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

  // Scroll-spy effect with improved performance
  useEffect(() => {
    if (!isClient || pathname !== '/') {
      setActiveId(null);
      return;
    }

    const container = document.getElementById('scroll-container');
    if (!container) return;

    const sectionIds = NAV_LINKS.filter((l) => l.id).map((l) => l.id as string);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    let currentActiveId: string | null = null;
    let rafId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        // Use requestAnimationFrame for smoother updates
        if (rafId) cancelAnimationFrame(rafId);

        rafId = requestAnimationFrame(() => {
          const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visibleSections.length > 0) {
            const targetId = visibleSections[0].target.id;
            if (currentActiveId !== targetId) {
              currentActiveId = targetId;
              setActiveId(targetId);
            }
          } else if (container.scrollTop <= 0) {
            if (currentActiveId !== null) {
              currentActiveId = null;
              setActiveId(null);
            }
          }
        });
      },
      {
        root: container,
        rootMargin: `-${NAVBAR_HEIGHT + 10}px 0px -40% 0px`,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isClient, pathname]);

  // Optimized scroll to section with prefetching
  const scrollToSection = useCallback(
    (id: string) => {
      setMobileOpen(false);
      setIsNavigating(true);

      if (pathname !== '/') {
        // Prefetch the home page before navigating
        router.prefetch('/');

        // Use setTimeout to allow the menu to close smoothly
        if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
        navigationTimeoutRef.current = setTimeout(() => {
          router.push(`/#${id}`);
          // Reset navigation state after a delay
          setTimeout(() => setIsNavigating(false), 500);
        }, 150);
        return;
      }

      const container = document.getElementById('scroll-container');
      const section = document.getElementById(id);

      if (!container || !section) {
        setIsNavigating(false);
        return;
      }

      // Smooth scroll with requestAnimationFrame for better performance
      const targetPosition = section.offsetTop - NAVBAR_HEIGHT;

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        container.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Update URL without full page reload
        window.history.pushState(null, '', `#${id}`);

        // Reset navigation state after scroll completes
        setTimeout(() => setIsNavigating(false), 800);
      }, 50);
    },
    [pathname, router]
  );

  const scrollToTop = useCallback(() => {
    setMobileOpen(false);
    setIsNavigating(true);

    if (pathname !== '/') {
      router.prefetch('/');
      if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
      navigationTimeoutRef.current = setTimeout(() => {
        router.push('/');
        setTimeout(() => setIsNavigating(false), 500);
      }, 150);
      return;
    }

    const container = document.getElementById('scroll-container');
    if (!container) {
      setIsNavigating(false);
      return;
    }

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', window.location.pathname);
      setTimeout(() => setIsNavigating(false), 500);
    }, 50);
  }, [pathname, router]);

  // Memoize link rendering for better performance
  const renderLinks = useCallback(
    (mobile = false) => {
      return NAV_LINKS.map(({ label, id, href }, index) => {
        const isActive = pathname === '/' && id && activeId === id;
        const isCurrentPage = href && pathname === href;

        if (mobile) {
          const baseClassName =
            'block w-full rounded-xl px-4 py-3.5 text-left text-[15px] font-medium tracking-wide transition-all duration-300 ease-out active:scale-[0.98]';

          const shouldShowActive = isActive || isCurrentPage;

          const bgEffectClass = `relative overflow-hidden before:absolute before:inset-0 before:rounded-xl before:transition-all before:duration-300
    before:bg-white/0
    hover:before:bg-white/15
    active:before:bg-white/20
    ${!shouldShowActive ? ' text-muted' : 'before:bg-white! text-primary'}`;

          const className = `${baseClassName} ${bgEffectClass}`;

          const style = {
            transitionDelay: mobileOpen ? `${index * 40}ms` : '0ms',
          };

          if (href) {
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`${className} ${
                  mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                } transition-[opacity,transform,background-color,color]`}
                style={style}
                prefetch={true}
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
              disabled={isNavigating}
            >
              <span className="relative z-10">{label}</span>
            </button>
          );
        }

        // Desktop
        const shouldShowActive = isActive || isCurrentPage;

        const desktopClassName = `group relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 ease-out cursor-pointer
  before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300
  before:bg-white/0
  hover:before:bg-white/12
  active:before:bg-white/20 active:scale-[0.97]
  ${!shouldShowActive ? 'text-muted ' : 'before:bg-white! text-primary'}
  ${isNavigating ? 'pointer-events-none opacity-50' : ''}`;

        if (href) {
          return (
            <Link key={label} href={href} className={desktopClassName} prefetch={true}>
              <span className="relative z-10">{label}</span>
            </Link>
          );
        }

        return (
          <button
            key={label}
            onClick={() => scrollToSection(id!)}
            className={desktopClassName}
            disabled={isNavigating}
          >
            <span className="relative z-10">{label}</span>
          </button>
        );
      });
    },
    [pathname, activeId, mobileOpen, scrollToSection, isNavigating]
  );

  // Memoize desktop links
  const desktopLinks = useMemo(() => renderLinks(false), [renderLinks]);
  // Memoize mobile links
  const mobileLinks = useMemo(() => renderLinks(true), [renderLinks]);

  return (
    <header
      ref={menuRef}
      className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-500 ease-out md:px-6 md:pt-5 ${
        isNavigating ? 'pointer-events-none' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between rounded-full bg-background/95 px-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl md:h-17 md:px-8">
        <button
          onClick={scrollToTop}
          className="relative flex cursor-pointer items-center transition-transform duration-300 ease-out hover:scale-[1.03]"
          aria-label="Go to top"
          disabled={isNavigating}
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

        <nav className="hidden items-center gap-0.5 lg:flex">
          {desktopLinks}

          <Link
            href="/application"
            className="relative ml-3 overflow-hidden rounded-xl px-5 py-2.5 text-[13px] font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_12px_rgba(31,78,154,0.45)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_20px_rgba(93,132,214,0.55)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-highlight"
            style={{
              background:
                'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
            }}
            prefetch={true}
          >
            <span className="relative z-10">Apply</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 ease-out hover:opacity-100" />
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-xl p-2 text-muted transition-all duration-300 ease-out hover:bg-elevated/60 hover:text-foreground lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          disabled={isNavigating}
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
          {mobileLinks}

          <div className="mt-3 border-t border-white/10 pt-4">
            <Link
              href="/application"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3.5 text-center text-sm font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_12px_rgba(31,78,154,0.4)] transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
              }}
              prefetch={true}
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
