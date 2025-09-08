// Stateless full-width tab bar; content handled by parent page

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

    return (
            <nav
            id="sustainability-tabs"
            aria-label="Sürdürülebilirlik sekmeleri"
            className={"w-full " + (className || "")}
        >
                    <div className="w-full border-b border-neutral-800/60 flex flex-wrap justify-center gap-x-10 gap-y-3 px-4 md:px-8">
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
                                    "relative pb-4 pt-5 text-sm md:text-base font-medium tracking-wide transition-colors px-1 " +
                                (active
                                        ? "text-neutral-100 font-semibold after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-amber-500 after:rounded-sm"
                                    : "text-neutral-400 hover:text-neutral-600 focus-visible:text-neutral-100")
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
