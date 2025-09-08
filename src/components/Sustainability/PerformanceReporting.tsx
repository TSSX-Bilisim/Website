import { useTranslation } from "react-i18next";
import { BarChart3, FileBarChart } from "lucide-react";

const PerformanceReporting = () => {
    const { t } = useTranslation('sustainability');
    
    return (
        <section id="performance-reporting">
            <div className="section-content">
                <div className="max-w-4xl mx-auto">
                    <div className="content-box bg-gradient-to-r from-neutral-50 to-blue-50 border-blue-200">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <BarChart3 className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                                    {t("page.sections.performance.title")}
                                </h2>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {(t("page.sections.performance.items", { returnObjects: true }) as string[]).map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg border border-blue-100">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <FileBarChart className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-neutral-700 break-keep">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceReporting;
