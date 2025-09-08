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
          <section id="overview" className="section-content space-y-24">
            <PolicySection />
            <CollaborationSection />
          </section>
          <section id="environmental" className="section-content">
            <DetailedEnvironmentalSection />
          </section>
          <section id="social" className="section-content">
            <DetailedSocialSection />
          </section>
          <section id="economic" className="section-content">
            <DetailedEconomicSection />
          </section>
          <section id="future" className="section-content">
            <FutureGoals />
          </section>
          <section id="reporting" className="section-content">
            <PerformanceReporting />
          </section>
          <ContactBanner />
        </Suspense>
      </main>
    </>
  );
};

export default SustainabilityPage;
