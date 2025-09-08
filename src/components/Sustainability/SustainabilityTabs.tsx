// Stateless full-width tab bar; content handled by parent page
import { useState, useEffect, useRef } from "react";

interface SustainabilityTabsProps {
    value: string;
    onChange: (val: string) => void;
    className?: string;
}

const SustainabilityTabs = ({ value, onChange, className }: SustainabilityTabsProps) => {
    const tabs: { key: string; label: string }[] = [
        { key: 'overview', label: 'Genel Bakış' },
        { key: 'environmental', label: 'Çevresel' },
        { key: 'social', label: 'Sosyal' },
        { key: 'economic', label: 'Ekonomik' },
        { key: 'future', label: 'Hedefler' },
        { key: 'reporting', label: 'Raporlama' }
    ];

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [offsetTop, setOffsetTop] = useState(0);
    const headerElRef = useRef<HTMLElement | null>(null);
        const activeTab = tabs.find(t => t.key === value);

        useEffect(() => {
            headerElRef.current = document.querySelector('.app-header');
            const headerHeight = headerElRef.current ? headerElRef.current.getBoundingClientRect().height : 0;
            // initial offset: header visible
            setOffsetTop(headerHeight);
            let lastY = window.scrollY;
            const onScroll = () => {
                const y = window.scrollY;
                setScrolled(y > 40);
                const goingDown = y > lastY;
                // When scrolling down, collapse offset (header hides via its own transform). Scrolling up: restore.
                if (goingDown) {
                    setOffsetTop(0);
                } else {
                    // restore header height (re-measure in case of responsive changes)
                    const h = headerElRef.current ? headerElRef.current.getBoundingClientRect().height : headerHeight;
                    setOffsetTop(h);
                }
                lastY = y;
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            return () => window.removeEventListener('scroll', onScroll);
        }, []);

        return (
            <nav
                id="sustainability-tabs"
                aria-label="Sürdürülebilirlik sekmeleri"
                style={{ top: offsetTop }}
                className={
                    "w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 sticky z-40 transition-shadow " +
                    (scrolled ? "shadow-sm ring-1 ring-neutral-200" : "") +
                    (className ? ` ${className}` : "")
                }
            >
                {/* Mobile Dropdown */}
                        <div className="md:hidden px-4 py-4">
                            <button
                                type="button"
                                onClick={() => setOpen(o => !o)}
                                aria-haspopup="listbox"
                                aria-expanded={open}
                                aria-controls="sustainability-mobile-tablist"
                            className="w-full flex items-center justify-between rounded-md border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700 hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                            >
                                <span>{activeTab?.label}</span>
                                <svg
                                    className={"w-4 h-4 transition-transform " + (open ? "rotate-180" : "rotate-0")}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            <div
                                className={
                                    "overflow-hidden transition-[max-height,opacity] duration-300 " +
                                    (open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
                                }
                                id="sustainability-mobile-tablist"
                            >
                                            <ul
                                                role="listbox"
                                                tabIndex={-1}
                                                className="mt-2 w-full rounded-md border border-neutral-200 bg-white divide-y divide-neutral-200 shadow-sm"
                                            >
                                    {tabs.map(tab => {
                                        const active = tab.key === value;
                                        return (
                                            <li key={tab.key} role="option" aria-selected={active}>
                                                <button
                                                    type="button"
                                                    onClick={() => { onChange(tab.key); setOpen(false); }}
                                                                className={"w-full text-left px-4 py-3 text-sm transition-colors " + (active ? "text-black font-semibold bg-amber-50 border-l-4 border-amber-500" : "text-neutral-600 hover:text-black hover:bg-neutral-50")}
                                                >
                                                    {tab.label}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                {/* Desktop Tab Bar */}
                <div className="hidden md:flex w-full flex-wrap justify-center gap-x-10 gap-y-3 px-6 md:px-10 border-t border-neutral-200">
                    {tabs.map(tab => {
                        const active = value === tab.key;
                        return (
                            <button
                                key={tab.key}
                                type="button"
                                aria-selected={active}
                                aria-current={active ? 'page' : undefined}
                                onClick={() => onChange(tab.key)}
                                className={
                                    "relative py-6 text-sm md:text-base font-medium tracking-wide transition-colors px-4 " +
                                    (active
                                        ? "text-black font-semibold after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-amber-500"
                                        : "text-neutral-500 hover:text-black focus-visible:text-black")
                                }
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </nav>
        );
};

export default SustainabilityTabs;
