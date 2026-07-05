import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/useAuth';
import { useSaved } from '../../../hooks/useSaved';
import { useLanguage } from '../../../hooks/useLanguage';
import styles from './HeartButton.module.css';

interface HeartButtonProps {
  petIdentifier: string;
}

export const HeartButton = ({ petIdentifier }: HeartButtonProps): JSX.Element => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { isPetSaved, toggleSave } = useSaved();
  const { t } = useLanguage();

  const isSaved = isPetSaved(petIdentifier);

  const handleClick = (event: React.MouseEvent): void => {
    event.stopPropagation();

    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    toggleSave(petIdentifier);
  };

  return (
    <button
      className={`${styles.button} ${isSaved ? styles.saved : ''}`}
      onClick={handleClick}
      aria-label={isSaved ? t('heart.unsave') : t('heart.save')}
      title={isSaved ? t('heart.unsave') : t('heart.save')}
    >
      {isSaved ? <IconHeartFilled size={16} /> : <IconHeart size={16} />}
    </button>
  );
};
