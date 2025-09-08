import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense, useState } from "react";
import {
  Meta,
  PageHeader,
  SustainabilityTabs,
  PolicySection,
  DetailedEnvironmentalSection,
  DetailedSocialSection,
  DetailedEconomicSection,
  PerformanceReporting,
  FutureGoals,
  CollaborationSection
} from "@/components/Sustainability";
import { ContactBanner } from "@/components/Shared";

const SustainabilityPage = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-16">
            <PolicySection />
            <CollaborationSection />
          </div>
        );
      case "environmental":
        return <DetailedEnvironmentalSection />;
      case "social":
        return <DetailedSocialSection />;
      case "economic":
        return <DetailedEconomicSection />;
      case "future":
        return <FutureGoals />;
      case "reporting":
        return <PerformanceReporting />;
      default:
        return null;
    }
  };

  return (
    <>
      <Meta />
      <main className="app-content">
        <Suspense fallback={<LoadingPage />}>
          <PageHeader />
          <SustainabilityTabs value={activeTab} onChange={setActiveTab} />
          <section className="section-content">
            {renderContent()}
          </section>
          <ContactBanner />
        </Suspense>
      </main>
    </>
  );
};

export default SustainabilityPage;
