import { Meta } from "@/components/About";
import { Success, Overview, PageHeader, Team, Timeline } from "@/components/About";
import AboutTabs from "@/components/About/AboutTabs";
import { ContactBanner } from "@/components/Shared";
import { Suspense } from "react";
import LoadingPage from "@/components/ui/LoadingPage";

const AboutPage = () => {
  return (
    <>
      <Meta />
      <main className="app-content">
        <Suspense fallback={<LoadingPage />}>
          <PageHeader />
          <AboutTabs onNavigate={(id) => {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              const offset = 90; // similar offset
              window.scrollTo({ top: window.scrollY + rect.top - offset, behavior: 'smooth' });
            }
          }} />
          <Overview />
          <Team />
          <Timeline />
          <Success />
          <ContactBanner />
        </Suspense>
      </main>
    </>
  );
};

export default AboutPage;
