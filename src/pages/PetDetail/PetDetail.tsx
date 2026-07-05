import { useParams, useNavigate } from 'react-router-dom';
import { IconArrowLeft, IconMapPin } from '@tabler/icons-react';

import { TagBadge } from '../../components/ui/TagBadge/TagBadge';
import { HeartButton } from '../../components/ui/HeartButton/HeartButton';
import { useLanguage } from '../../hooks/useLanguage';
import { mockPets } from '../../data/pets';
import {
  getPetTypeLabel,
  getPetAgeLabel,
  getPetSizeLabel,
  getPetGenderLabel,
  getPetTemperamentLabel,
} from '../../utils/petHelpers';
import styles from './PetDetail.module.css';

export const PetDetail = (): JSX.Element => {
  const { petIdentifier } = useParams<{ petIdentifier: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const pet = mockPets.find((p) => p.identifier === petIdentifier);

  if (!pet) {
    return (
      <div className={styles.page}>
        <p>{petIdentifier} not found</p>
      </div>
    );
  }

  const formattedDate = new Date(pet.createdAt).toLocaleDateString(
    language === 'sr' ? 'sr-RS' : 'en-GB'
  );

  return (
    <div className={styles.page}>
      <button className={styles.backLink} onClick={() => navigate(-1)}>
        <IconArrowLeft size={16} />
        {t('detail.back')}
      </button>

      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={pet.imageUrl} alt={pet.name} />
          <div className={styles.typeBadge}>
            <TagBadge label={getPetTypeLabel(pet.type, language)} variant="primary" />
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.headerRow}>
            <div>
              <h1 className={styles.name}>{pet.name}</h1>
              <p className={styles.breed}>{pet.breed}</p>
            </div>
            <HeartButton petIdentifier={pet.identifier} />
          </div>

          <p className={styles.location}>
            <IconMapPin size={16} />
            {pet.location}
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaBox}>
              <p className={styles.metaLabel}>{t('detail.age')}</p>
              <p className={styles.metaValue}>{getPetAgeLabel(pet.age, language)}</p>
            </div>
            <div className={styles.metaBox}>
              <p className={styles.metaLabel}>{t('detail.size')}</p>
              <p className={styles.metaValue}>{getPetSizeLabel(pet.size, language)}</p>
            </div>
            <div className={styles.metaBox}>
              <p className={styles.metaLabel}>{t('detail.gender')}</p>
              <p className={styles.metaValue}>{getPetGenderLabel(pet.gender, language)}</p>
            </div>
            <div className={styles.metaBox}>
              <p className={styles.metaLabel}>{t('detail.posted')}</p>
              <p className={styles.metaValue}>{formattedDate}</p>
            </div>
          </div>

          <div>
            <p className={styles.sectionLabel}>{t('detail.temperament')}</p>
            <div className={styles.temperamentTags}>
              {pet.temperament.map((temp) => (
                <TagBadge key={temp} label={getPetTemperamentLabel(temp, language)} variant="accent" />
              ))}
            </div>
          </div>

          <div>
            <p className={styles.sectionLabel}>{t('detail.description')}</p>
            <p className={styles.description}>{pet.description}</p>
          </div>

          <div>
            <p className={styles.sectionLabel}>{t('detail.health')}</p>
            <TagBadge
              label={pet.isVaccinated ? t('detail.vaccinated') : t('detail.notVaccinated')}
              variant={pet.isVaccinated ? 'primary' : 'muted'}
            />
          </div>

          <div className={styles.actions}>
            <button className={styles.contactButton}>{t('detail.contact')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
