import { useNavigate } from 'react-router-dom';
import { IconMapPin } from '@tabler/icons-react';

import { TagBadge } from '../TagBadge/TagBadge';
import { HeartButton } from '../HeartButton/HeartButton';
import { useLanguage } from '../../../hooks/useLanguage';
import { getPetTypeLabel, getPetAgeLabel, getPetSizeLabel, getPetGenderLabel } from '../../../utils/petHelpers';
import type { Pet } from '../../../types';
import styles from './PetCard.module.css';

interface PetCardProps {
  pet: Pet;
}

export const PetCard = ({ pet }: PetCardProps): JSX.Element => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleCardClick = (): void => {
    navigate(`/pet/${pet.identifier}`);
  };

  return (
    <article className={styles.card} onClick={handleCardClick} role="button" tabIndex={0}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={pet.imageUrl} alt={pet.name} loading="lazy" />
        <div className={styles.typeBadge}>
          <TagBadge label={getPetTypeLabel(pet.type, language)} variant="primary" />
        </div>
        <div className={styles.heartButton}>
          <HeartButton petIdentifier={pet.identifier} />
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{pet.name}</h3>
        <p className={styles.breed}>{pet.breed}</p>
        <p className={styles.location}>
          <IconMapPin size={14} />
          {pet.location}
        </p>
        <div className={styles.tags}>
          <TagBadge label={getPetAgeLabel(pet.age, language)} variant="muted" />
          <TagBadge label={getPetSizeLabel(pet.size, language)} variant="muted" />
          <TagBadge label={getPetGenderLabel(pet.gender, language)} variant="muted" />
        </div>
      </div>
    </article>
  );
};
