import { useTranslation } from "react-i18next";
import { Accordion, AccordionItem, NavItem, RouterLink } from "@/components/Shared";
import { buildPath } from "@/lib";
import { slugs } from "@/routes/slugs";

type MobileMenuProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t, i18n } = useTranslation("common");
  const lang = i18n.language.startsWith('tr') ? 'tr' : 'en';

  const links = {
    about: buildPath(lang, 'about'),
    references: buildPath(lang, 'references'),
    partners: buildPath(lang, 'partners'),
    contact: buildPath(lang, 'contact'),
    sustainability: buildPath(lang, 'sustainability'),
    solutions: slugs[lang].solutions,
  } as const;

  const solutionItems = Object.entries(slugs[lang].solutionList).map(([key, path]) => ({
    href: `/${lang}/${links.solutions}/${path}`,
    label: t(`header.solutionLinks.links.${key}`)
  }));
  return (
    <div className={`mobile-menu ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <nav className="mobile-nav">
        <ul className="nav-list flex-col">
          <Accordion label={t("header.nav.solutions")}>
            {solutionItems.map(item => (
              <AccordionItem key={item.href} to={item.href} label={item.label} onClick={onClose} />
            ))}
          </Accordion>
          <NavItem to={links.about}          onClick={onClose} label={t("header.nav.aboutUs")}          className="border-b border-neutral-700"/>
          <NavItem to={links.sustainability} onClick={onClose} label={t("header.nav.sustainability")} className="border-b border-neutral-700"/>
          <NavItem to={links.references}     onClick={onClose} label={t("header.nav.references")}     className="border-b border-neutral-700"/>
          <NavItem to={links.partners}       onClick={onClose} label={t("header.nav.partners")}/>
          <li className="nav-item"><RouterLink to={links.contact} onClick={onClose} className="header-cta w-full">{t("header.contactUs")}</RouterLink></li>
        </ul>
      </nav>
    </div>
  );
};
