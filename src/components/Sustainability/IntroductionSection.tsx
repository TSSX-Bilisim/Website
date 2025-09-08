import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";

const IntroductionSection = () => {
    const { t } = useTranslation('sustainability');
    
    return (
        <section id="sustainability-introduction">
            <div className="section-content">
                <div className="max-w-4xl mx-auto">
                    <div className="content-box bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-100 rounded-full">
                                <FileText className="w-6 h-6 text-green-600" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                                {t("page.sections.introduction.title")}
                            </h2>
                        </div>
                        
                        <div className="prose prose-lg max-w-none">
                            <p className="text-neutral-700 leading-relaxed text-lg break-keep">
                                {t("page.sections.introduction.description")}
                            </p>
                        </div>
                        
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-green-100">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="font-medium text-neutral-800 break-keep">{t("page.sections.introduction.pillars.environmental")}</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-blue-100">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span className="font-medium text-neutral-800 break-keep">{t("page.sections.introduction.pillars.social")}</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-amber-100">
                                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                                <span className="font-medium text-neutral-800 break-keep">{t("page.sections.introduction.pillars.economic")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
