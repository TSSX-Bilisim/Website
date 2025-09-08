import { useTranslation } from 'react-i18next';
import { Users } from "lucide-react";
import { SectionLabel } from "@/components/Shared";
import AnimatedStat from '../ui/AnimatedStat';
import { Zap, Shield, Clock } from "lucide-react";

const PageHeader = () => {
  const { t } = useTranslation('about');
  
  return (
    <section id='about-header' className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 text-white">
      <div className='section-content'>
        <div className="vertical-stack mx-auto items-center gap-block max-w-xs md:max-w-xl xl:max-w-5xl">
          <SectionLabel icon={<Users className="size-4" />}>{t('label')}</SectionLabel>
          <div className="vertical-stack gap-element items-center">
            <h1 className="title-hero text-center mb-element break-keep">
              {t('title.part1')} <span className="text-amber-500">{t('title.part2')} </span>{t('title.part3')}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <AnimatedStat
              icon={<Zap size={20} />}
              value="2 Min."
              label={t("stats.faster")}
          />
          <AnimatedStat
              icon={<Shield size={20} />}
              value="100%"
              label={t("stats.compliance")}
          />
          <AnimatedStat
              icon={<Shield size={20} />}
              value="94%"
              label={t("stats.vulnerabilities")}
          />
          <AnimatedStat
              icon={<Clock size={20} />}
              value="1/999%"
              label={t("stats.patch")}
          />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;