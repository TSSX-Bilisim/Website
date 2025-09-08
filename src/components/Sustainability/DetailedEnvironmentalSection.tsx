import { useTranslation } from "react-i18next";
import { Leaf, Zap, Recycle, Car } from "lucide-react";

const DetailedEnvironmentalSection = () => {
    const { t } = useTranslation('sustainability');
    
    return (
        <div className="section-content">
            <div className="vertical-stack">
                <div className="section-header">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-green-100 rounded-full">
                            <Leaf className="w-6 h-6 text-green-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
                            {t("page.sections.environmental.title")}
                        </h2>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Energy Efficiency */}
                    <div className="content-box">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="p-3 bg-yellow-100 rounded-full">
                                <Zap className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800 break-keep">
                                {t("page.sections.environmental.energy.title")}
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {(t("page.sections.environmental.energy.items", { returnObjects: true }) as string[]).map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-neutral-600 break-keep">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Waste Management */}
                    <div className="content-box">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="p-3 bg-green-100 rounded-full">
                                <Recycle className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800 break-keep">
                                {t("page.sections.environmental.waste.title")}
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {(t("page.sections.environmental.waste.items", { returnObjects: true }) as string[]).map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-neutral-600 break-keep">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Carbon Reduction */}
                    <div className="content-box">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <Car className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800 break-keep">
                                {t("page.sections.environmental.carbon.title")}
                            </h3>
                        </div>
                        <ul className="space-y-4">
                            {(t("page.sections.environmental.carbon.items", { returnObjects: true }) as string[]).map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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

export default DetailedEnvironmentalSection;
