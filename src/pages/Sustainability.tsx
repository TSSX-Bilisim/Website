import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";
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
  // Tabs now just anchor-scroll; no internal state
  const handleTabNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const absoluteY = window.scrollY + rect.top - 90; // offset for sticky bars
      window.scrollTo({ top: absoluteY, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Meta />
      <main className="app-content">
        <Suspense fallback={<LoadingPage />}>
          <PageHeader />
          <SustainabilityTabs value="overview" onChange={handleTabNavigate} />
          {/* Overview: intro policy + collaboration */}
          <section id="overview" className="section-content">
            <PolicySection />
            <CollaborationSection />
          </section>
          {/* Pillars: wrap environmental/social/economic */}
          <section id="pillars" className="section-content">
            <div id="environmental"><DetailedEnvironmentalSection /></div>
            <div id="social"><DetailedSocialSection /></div>
            <div id="economic"><DetailedEconomicSection /></div>
          </section>
          {/* Progress: future goals + reporting */}
          <section id="progress" className="section-content">
            <div id="reporting"><PerformanceReporting /></div>
            <div id="future"><FutureGoals /></div>
          </section>
          {/* Commitment: contact + conclusion already appended inside reporting previously */}
          <ContactBanner />
        </Suspense>
      </main>
    </>
  );
};

export default SustainabilityPage;
