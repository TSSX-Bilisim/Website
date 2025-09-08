import { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDeviceType } from '@/lib';

interface AboutTabsProps {
  onNavigate: (id: string) => void;
  className?: string;
}

const AboutTabs = ({ onNavigate, className }: AboutTabsProps) => {
  const { t } = useTranslation('about');
  const tabs = useMemo(() => ([
    { key: 'overview', label: t('tabs.overview'), target: 'overview' },
    { key: 'timeline', label: t('tabs.timeline'), target: 'timeline' },
    { key: 'success', label: t('tabs.success'), target: 'success' }
  ]), [t]);

  const [visible, setVisible] = useState<string>('overview');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);
  const headerElRef = useRef<HTMLElement | null>(null);
  const device = useDeviceType();

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    headerElRef.current = document.querySelector('.app-header');
    const initialHeaderHeight = headerElRef.current ? headerElRef.current.getBoundingClientRect().height : 0;
    setOffsetTop(initialHeaderHeight);
    let lastY = window.scrollY;

    const calcActive = () => {
      const headerHeight = headerElRef.current ? headerElRef.current.getBoundingClientRect().height : 0;
      const navHeight = navRef.current ? navRef.current.getBoundingClientRect().height : 0;
      const anchor = window.scrollY + headerHeight + navHeight + 4; // a small buffer
      let current = tabs[0].target;
      for (const tab of tabs) {
        const el = document.getElementById(tab.target);
        if (!el) continue;
        if (anchor >= el.offsetTop) {
          current = tab.target;
        } else {
          break;
        }
      }
      setVisible(prev => (prev === current ? prev : current));
    };

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const goingDown = y > lastY;
      if (goingDown) {
        setOffsetTop(0);
      } else {
        const h = headerElRef.current ? headerElRef.current.getBoundingClientRect().height : initialHeaderHeight;
        setOffsetTop(h);
      }
      lastY = y;
      calcActive();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // initial calculation
    calcActive();
    return () => window.removeEventListener('scroll', onScroll);
  }, [tabs]);

  const handleNav = (target: string) => {
    onNavigate(target);
    setOpen(false);
  };

  return (
    <nav
  ref={navRef}
      id="about-tabs"
      aria-label={t('label') + ' tabs'}
      style={{ top: offsetTop }}
      className={
        'w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 sticky z-40 transition-shadow ' +
        (scrolled ? 'shadow-sm ring-1 ring-neutral-200' : '') +
        (className ? ` ${className}` : '')
      }
    >
      {device === 'mobile' && (
        <div className="px-4 py-4">
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls="about-mobile-tablist"
            className="w-full flex items-center justify-between rounded-md border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700 hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
          >
            <span>{tabs.find(t => t.target === visible)?.label}</span>
            <svg className={'w-4 h-4 transition-transform ' + (open ? 'rotate-180' : 'rotate-0')} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className={'overflow-hidden transition-[max-height,opacity] duration-300 ' + (open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')} id="about-mobile-tablist">
            <ul role="listbox" tabIndex={-1} className="mt-2 w-full rounded-md border border-neutral-200 bg-white divide-y divide-neutral-200 shadow-sm">
              {tabs.map(tab => {
                const active = visible === tab.target;
                return (
                  <li key={tab.key} role="option" aria-selected={active}>
                    <button
                      type="button"
                      onClick={() => handleNav(tab.target)}
                      className={'w-full text-left px-4 py-3 text-sm transition-colors ' + (active ? 'text-black font-semibold bg-amber-50 border-l-4 border-amber-500' : 'text-neutral-600 hover:text-black hover:bg-neutral-50')}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      {device === 'desktop' && (
        <div className="w-full flex flex-wrap justify-center gap-x-10 gap-y-3 px-8 xl:px-12 border-t border-neutral-200">
          {tabs.map(tab => {
            const active = visible === tab.target;
            return (
              <button
                key={tab.key}
                type="button"
                aria-selected={active}
                aria-current={active ? 'page' : undefined}
                onClick={() => handleNav(tab.target)}
                className={'relative py-6 text-sm md:text-base font-medium tracking-wide transition-colors px-4 ' + (active ? 'text-black font-semibold after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-amber-500' : 'text-neutral-500 hover:text-black focus-visible:text-black')}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default AboutTabs;
