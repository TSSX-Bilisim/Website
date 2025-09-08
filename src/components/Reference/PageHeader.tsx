import { useTranslation } from 'react-i18next';
import { Building2 } from "lucide-react";
import { SectionLabel } from "@/components/Shared";
import AnimatedStat from '../ui/AnimatedStat';
import { Award, BarChart4, Code, Users } from "lucide-react";

const PageHeader = () => {
  const { t } = useTranslation('references');
  
  return (
    <section id='references-header' className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 text-white">
      <div className='section-content'>
        <div className="vertical-stack mx-auto items-center gap-block max-w-xs md:max-w-xl xl:max-w-5xl">
          <SectionLabel icon={<Building2 className="size-4" />}>{t('label')}</SectionLabel>
          <div className="vertical-stack gap-element items-center">
            <h1 className="title-hero text-center mb-element break-keep">
              {t('title.part1')} <span className="text-amber-500">{t('title.part2')} </span>{t('title.part3')}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <AnimatedStat icon={<Users className="size-6" />} value="15+" label={t("stats.team")} />
            <AnimatedStat icon={<Award className="size-6" />} value="10+" label={t("stats.experience")} />
            <AnimatedStat icon={<Code className="size-6" />} value="100+" label={t("stats.projects")} />
            <AnimatedStat icon={<BarChart4 className="size-6" />} value="98%" label={t("stats.satisfaction")} />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;