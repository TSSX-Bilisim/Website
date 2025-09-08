import LoadingPage from "@/components/ui/LoadingPage";
import { Suspense } from "react";
import Meta from "@/components/Sustainability/Meta";
import PageHeader from "@/components/Sustainability/PageHeader";
import ContactBanner from "@/components/Shared/ContactBanner";

const SustainabilityPage = () => {
  return (
    <>
      <Meta />
      <main className="app-content">
        <Suspense fallback={<LoadingPage />}>
          <PageHeader />
          <ContactBanner />
        </Suspense>
      </main>
    </>
  );
};

export default SustainabilityPage;
