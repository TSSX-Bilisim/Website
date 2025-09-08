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
          <section id="overview" className="section-content space-y-24 pt-6">
            <PolicySection />
            <CollaborationSection />
          </section>
          <section id="environmental" className="section-content pt-12">
            <DetailedEnvironmentalSection />
          </section>
          <section id="social" className="section-content pt-12">
            <DetailedSocialSection />
          </section>
          <section id="economic" className="section-content pt-12">
            <DetailedEconomicSection />
          </section>
          <section id="future" className="section-content pt-12">
            <FutureGoals />
          </section>
          <section id="reporting" className="section-content pt-12">
            <PerformanceReporting />
          </section>
          <ContactBanner />
        </Suspense>
      </main>
    </>
  );
};

export default SustainabilityPage;
