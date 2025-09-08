import { useTranslation } from "react-i18next";
import { Leaf, Users, TrendingUp } from "lucide-react";

const PolicySection = () => {
    const { t } = useTranslation('sustainability');
    
    return (
        <section id="sustainability-policy">
            <div className="section-content">
                <div className="section-header">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center">
                        {t("page.sections.policy.title")}
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Environmental Responsibility */}
                    <div className="content-box flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-green-100 rounded-full">
                                <Leaf className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800">
                                {t("page.sections.policy.environmental.title")}
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {(t("page.sections.policy.environmental.items", { returnObjects: true }) as string[]).map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-neutral-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Responsibility */}
                    <div className="content-box flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800">
                                {t("page.sections.policy.social.title")}
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {(t("page.sections.policy.social.items", { returnObjects: true }) as string[]).map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-neutral-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Economic Sustainability */}
                    <div className="content-box flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-amber-100 rounded-full">
                                <TrendingUp className="w-6 h-6 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-800">
                                {t("page.sections.policy.economic.title")}
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {(t("page.sections.policy.economic.items", { returnObjects: true }) as string[]).map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-neutral-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PolicySection;
