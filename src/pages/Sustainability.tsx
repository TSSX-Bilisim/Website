import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";
import { Meta, PageHeader, PolicySection, FutureGoals, CollaborationSection } from "@/components/Sustainability";
import { ContactBanner } from "@/components/Shared";

const SustainabilityPage = () => {
  return (
    <>
      <Meta />
      <main className="app-content">
        <Suspense fallback={<LoadingPage />}>
          <PageHeader />
          <PolicySection />
          <FutureGoals />
          <CollaborationSection />
          <ContactBanner />
        </Suspense>
      </main>
    </>
  );
};

export default SustainabilityPage;
