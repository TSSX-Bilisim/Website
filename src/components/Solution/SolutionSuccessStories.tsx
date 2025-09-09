import CaseStudy from "@/components/About/Success/SuccessCard";
import type { DetailedSolution } from "@/types/solution";
import { useTranslation } from 'react-i18next';

interface SolutionSuccessStoriesProps {
  solution: DetailedSolution;
}

const SolutionSuccessStories = ({ solution }: SolutionSuccessStoriesProps) => {
  const { t } = useTranslation();

  return (
  <section id="success-stories" className="py-20 bg-gradient-to-r from-amber-50/30 via-white to-amber-50/30 animate-section">
      <div className="section-content">
        <div className="vertical-stack">
          <h2 className="title-section md:text-center">{t('solution_success_stories_title')}</h2>
          <p className="text-body md:text-center">{t('solution_success_stories_description')}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solution.examples.map((example, index) => (
              <CaseStudy
                key={index}
                title={t('solution_success_story')}
                subtitle={example.title}
                icon={solution.icon}
                image={solution.image}
                description={example.description}
                points={example.metrics || []}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSuccessStories;
