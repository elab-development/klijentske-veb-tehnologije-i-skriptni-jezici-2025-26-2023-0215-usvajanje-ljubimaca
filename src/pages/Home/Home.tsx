import { Link } from 'react-router-dom';
import { IconSearch, IconHeart, IconShieldCheck, IconSparkles } from '@tabler/icons-react';

import { PetCard } from '../../components/ui/PetCard/PetCard';
import { StatBar } from '../../components/ui/StatBar/StatBar';
import { useLanguage } from '../../hooks/useLanguage';
import { mockPets } from '../../data/pets';
import styles from './Home.module.css';

const FEATURED_PETS_COUNT = 6;

const homeStats = [
  { count: 12, translationKey: 'stats.pets' },
  { count: 6, translationKey: 'stats.cities' },
  { count: 4, translationKey: 'stats.types' },
];

export const Home = (): JSX.Element => {
  const { t } = useLanguage();
  const featuredPets = mockPets.slice(0, FEATURED_PETS_COUNT);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.pill}>
            <IconSparkles size={16} />
            {mockPets.length} {t('hero.pill')}
          </div>
          <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
          <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>
          <div className={styles.heroCtas}>
            <Link to="/browse" className={styles.btnPrimary}>{t('hero.browseCta')}</Link>
            <Link to="/signup" className={styles.btnGhost}>{t('hero.addCta')}</Link>
          </div>
        </div>
      </section>

      <StatBar stats={homeStats} />

      <div className={styles.section}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><IconSearch size={20} /></div>
            <h3 className={styles.featureTitle}>{t('features.search.title')}</h3>
            <p className={styles.featureDescription}>{t('features.search.description')}</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><IconHeart size={20} /></div>
            <h3 className={styles.featureTitle}>{t('features.save.title')}</h3>
            <p className={styles.featureDescription}>{t('features.save.description')}</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}><IconShieldCheck size={20} /></div>
            <h3 className={styles.featureTitle}>{t('features.trust.title')}</h3>
            <p className={styles.featureDescription}>{t('features.trust.description')}</p>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('section.featuredPets')}</h2>
          <Link to="/browse" className={styles.seeAll}>{t('section.seeAll')} →</Link>
        </div>

        <div className={styles.petsGrid}>
          {featuredPets.map((pet) => (
            <PetCard key={pet.identifier} pet={pet} />
          ))}
        </div>
      </div>
    </main>
  );
};
