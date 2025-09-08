import { useTranslation } from "react-i18next";
import { Handshake, MessageSquare, Users } from "lucide-react";

const CollaborationSection = () => {
    const { t } = useTranslation('sustainability');
    
    return (
        <div className="max-w-4xl mx-auto">
            <div className="content-box bg-gradient-to-r from-amber-50 to-neutral-50 border-amber-200">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-amber-100 rounded-full">
                            <Handshake className="w-6 h-6 text-amber-600" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                            {t("page.sections.contact.title")}
                        </h2>
                    </div>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto break-keep">
                        {t("page.sections.contact.description")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(t("page.sections.contact.items", { returnObjects: true }) as string[]).map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg border border-amber-100">
                            <div className="p-3 bg-amber-100 rounded-full">
                                {index === 0 ? <MessageSquare className="w-5 h-5 text-amber-600" /> : <Users className="w-5 h-5 text-amber-600" />}
                            </div>
                            <div>
                                <p className="text-neutral-700 break-keep">{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollaborationSection;
