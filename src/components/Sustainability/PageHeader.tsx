import { useTranslation } from 'react-i18next';
import AnimatedTitle from '../Shared/AnimatedTitle';

const PageHeader = () => {
  const { t } = useTranslation('sustainability');

  return (
    <section id='sustainability-header'>
      <div className='section-content'>
        <AnimatedTitle
          title={t('page.header')}
          description={t('page.intro')}
          className='px-6 text-center break-keep'
        />
      </div>
    </section>
  );
};

export default PageHeader;