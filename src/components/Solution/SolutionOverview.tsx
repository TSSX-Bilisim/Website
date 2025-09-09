import { CheckCircle } from "lucide-react";
import type { DetailedSolution } from "@/types/solution";
import { useTranslation } from "react-i18next";

interface SolutionOverviewProps {
  solution: DetailedSolution;
}

const SolutionOverview = ({ solution }: SolutionOverviewProps) => {
  const { t } = useTranslation();
  // Get top 6 benefits for display
  const topBenefits = solution.benefits.slice(0, 6);

  return (
    <section id="overview" className="animate-section">
      <div className="section-content">
        <div className="vertical-stack">
          {/* Header */}
          <h2 className="title-section md:text-center">{t("solution_overview_why_choose")}</h2>
          <p className="text-body">
            {solution.detailedDescription}
          </p>
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 horizontal-stack"
              >
                {/* Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <p className="text-neutral-700 leading-relaxed group-hover:text-neutral-800 transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
