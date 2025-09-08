import { Link } from "react-router";
import { Settings } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import DecorativeBackground from "@/components/ui/DecorativeBackground";
import AnimatedText from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/Shared";
import type { DetailedSolution } from "@/types/solution";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router";
import { buildPath } from "@/lib";
import AnimatedStat from "../ui/AnimatedStat";

interface SolutionHeroProps {
  solution: DetailedSolution;
}

const SolutionHero = ({ solution }: SolutionHeroProps) => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const { lng } = useParams();
  const lang = lng === "en" ? "en" : "tr";

  // Use heroMetrics from solution if available, otherwise fallback to default
  const metrics = solution.heroMetrics || [];

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <DecorativeBackground
      variant="dark"
      className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 text-white"
    >
      <div ref={heroRef} className="section-content">

        {/* Header Section - vertical stack layout */}
        <div className="vertical-stack mx-auto items-center gap-block max-w-xs md:max-w-xl xl:max-w-5xl">
          <SectionLabel icon={<Settings className="size-4" />}>{t('nav_solutions')}</SectionLabel>
          <div className="vertical-stack gap-element items-center">
            <h1 className="title-hero text-center mb-element break-keep">
              <AnimatedText text={solution.title} />
              {solution.titleTr && (
                <div className="text-xl text-amber-400 mt-2">
                  {solution.titleTr}
                </div>
              )}
            </h1>
            <p className="text-body text-center w-2/3 md:w-full text-white/80 break-keep">
              {solution.detailedDescription}
            </p>
            <div className="text-center lg:text-left">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to={buildPath(lang, "contact")}
                  className="bg-amber-500 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors text-center"
                >
                  {t('connect_with_expert')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {metrics.map((metric, index) => (
                <AnimatedStat
                    key={index}
                    icon={metric.icon}
                    value={metric.value}
                    label={metric.label}
                />
            ))}
        </div>
      </div>
    </DecorativeBackground>
  );
};

export default SolutionHero;
