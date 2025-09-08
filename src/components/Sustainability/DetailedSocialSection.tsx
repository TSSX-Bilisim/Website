import { useTranslation } from "react-i18next";
import { Users, Heart, GraduationCap } from "lucide-react";

const DetailedSocialSection = () => {
    const { t } = useTranslation('sustainability');
    
    return (
        <>
            <div className="section-header">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                        <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
                        {t("page.sections.social.title")}
                    </h2>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Employee Rights */}
                <div className="content-box">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                            <GraduationCap className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-800 break-keep">
                            {t("page.sections.social.employee.title")}
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        {(t("page.sections.social.employee.items", { returnObjects: true }) as string[]).map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-neutral-600 break-keep">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Community Engagement */}
                <div className="content-box">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-purple-100 rounded-full">
                            <Heart className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-800 break-keep">
                            {t("page.sections.social.community.title")}
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        {(t("page.sections.social.community.items", { returnObjects: true }) as string[]).map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-neutral-600 break-keep">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Diversity & Inclusion */}
                <div className="content-box">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-pink-100 rounded-full">
                            <Users className="w-6 h-6 text-pink-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-800 break-keep">
                            {t("page.sections.social.diversity.title")}
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        {(t("page.sections.social.diversity.items", { returnObjects: true }) as string[]).map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-neutral-600 break-keep">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DetailedSocialSection;
