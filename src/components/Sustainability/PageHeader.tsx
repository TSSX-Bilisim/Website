import { Leaf } from "lucide-react";
import { SectionLabel } from "@/components/Shared";
import { useTranslation } from "react-i18next";

const PageHeader = () => {
    const { t } = useTranslation('sustainability');

    return (
        <section id="sustainability-header">
            <div className="section-content">
                <div className="vertical-stack mx-auto items-center gap-block max-w-xs md:max-w-xl xl:max-w-5xl">
                    <SectionLabel icon={<Leaf className="size-4" />}>{t('label')}</SectionLabel>
                    <div className="vertical-stack gap-element items-center">
                        <h1 className="title-hero text-center mb-element break-keep">
                            {t('title.part1')} <span className="text-amber-500">{t('title.part2')} </span>{t('title.part3')}
                        </h1>
                        <p className="text-body text-center w-2/3 md:w-full text-white/80 break-keep">
                            {t('description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeader;
