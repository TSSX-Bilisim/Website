import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const COMPANY_NAME = "TSS-X";

const Meta = () => {
  const { t } = useTranslation('sustainability');

  return (
    <Helmet>
        <title>{t("title")} | {COMPANY_NAME}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="keywords" content={t("meta.keywords")} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tssx.com/about" />
        <meta property="og:title" content="About TSS-X | IT Infrastructure & Automation Experts" />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:image" content="https://tssx.com/img/tssx/about-og.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tssx.com/about" />
        <meta name="twitter:title" content="About TSS-X | IT Infrastructure & Automation Experts" />
        <meta name="twitter:description" content={t("meta.description")} />
        <meta name="twitter:image" content="https://tssx.com/img/tssx/about-og.png" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://tssx.com/about" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TSS-X Information Technologies" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Istanbul" />
    </Helmet>
  );
};

export default Meta;