import { useTranslation } from "react-i18next";
import { BarChart3, Activity, FileText } from "lucide-react";

const PerformanceReporting = () => {
    const { t } = useTranslation('sustainability');
    const summary = (t('page.sections.performance.items', { returnObjects: true }) as string[]) || [];

    return (
        <section id="performance-reporting">
            <div className="section-content">
                <div className="section-header">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                            <BarChart3 className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center">
                            {t('page.sections.performance.title')}
                        </h2>
                    </div>
                    {t('page.sections.performance.description') && (
                        <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center">
                            {t('page.sections.performance.description')}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                    <div className="content-box flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <Activity className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800 break-keep">
                                {t('page.sections.performance.title')}
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {summary.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                    <span className="text-neutral-600 text-sm leading-relaxed break-keep">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="content-box flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800 break-keep">
                                {t('page.sections.performance.title')}
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {summary.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                    <span className="text-neutral-600 text-sm leading-relaxed break-keep">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceReporting;
