import { useTranslation } from "react-i18next";
import { TrendingUp, Shield, DollarSign } from "lucide-react";

const DetailedEconomicSection = () => {
    const { t } = useTranslation('sustainability');
    
    return (
        <div className="section-content">
            <div className="vertical-stack">
                <div className="section-header">
                    <div className="horizontal-stack justify-center gap-3 mb-4">
                        <div className="p-3 bg-amber-100 rounded-full items-center flex">
                            <TrendingUp className="w-8 h-8 text-amber-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center">
                            {t("page.sections.economic.title")}
                        </h2>
                    </div>
                </div>              
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Ethics */}
                    <div className="content-box">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="p-3 bg-amber-100 rounded-full">
                                <Shield className="w-6 h-6 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800 break-keep">
                                {t("page.sections.economic.ethics.title")}
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {(t("page.sections.economic.ethics.items", { returnObjects: true }) as string[]).map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-neutral-600 break-keep">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Financial Stability */}
                    <div className="content-box">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="p-3 bg-green-100 rounded-full">
                                <DollarSign className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800 break-keep">
                                {t("page.sections.economic.stability.title")}
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {(t("page.sections.economic.stability.items", { returnObjects: true }) as string[]).map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-neutral-600 break-keep">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedEconomicSection;
