import { useTranslation } from "react-i18next";
import { Target, ArrowRight } from "lucide-react";

const FutureGoals = () => {
    const { t } = useTranslation('sustainability');
    
    return (
        <section id="future-goals">
            <div className="section-content">
                <div className="section-header">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-amber-100 rounded-full">
                            <Target className="w-6 h-6 text-amber-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
                            {t("page.sections.future.title")}
                        </h2>
                    </div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(t("page.sections.future.items", { returnObjects: true }) as string[]).map((goal, index) => (
                            <div key={index} className="content-box group hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-neutral-700 leading-relaxed">{goal}</p>
                                        <ArrowRight className="w-4 h-4 text-amber-500 mt-3 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureGoals;
