import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";
import { 
  Meta, 
  PageHeader, 
  IntroductionSection,
  SustainabilityTabs
} from "@/components/Sustainability";
import { ContactBanner } from "@/components/Shared";

const SustainabilityPage = () => {
  return (
    <>
      <Meta />
      <main className="app-content">
        <Suspense fallback={<LoadingPage />}>
          <PageHeader />
          <IntroductionSection />
          <SustainabilityTabs />
          <ContactBanner />
        </Suspense>
      </main>
    </>
  );
};

export default SustainabilityPage;
