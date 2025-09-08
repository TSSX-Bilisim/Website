import { useTranslation } from 'react-i18next';
import { Handshake } from "lucide-react";
import { SectionLabel } from "@/components/Shared";

const PartnersHeader = () => {
  const { t } = useTranslation('partners');
  
  return (
    <section id='partners-header' className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 text-white">
      <div className='section-content'>
        <div className="vertical-stack mx-auto items-center gap-block max-w-xs md:max-w-xl xl:max-w-5xl">
          <SectionLabel icon={<Handshake className="size-4" />}>{t('label')}</SectionLabel>
          <div className="vertical-stack gap-element items-center">
            <h1 className="title-hero text-center mb-element break-keep">
              {t('title.part1')} <span className="text-amber-500">{t('title.part2')} </span>{t('title.part3')}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHeader; 