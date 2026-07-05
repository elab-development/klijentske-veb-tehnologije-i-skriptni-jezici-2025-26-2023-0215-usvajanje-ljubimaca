import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconLogout } from '@tabler/icons-react';

import { PetCard } from '../../components/ui/PetCard/PetCard';
import { useAuth } from '../../hooks/useAuth';
import { useSaved } from '../../hooks/useSaved';
import { useLanguage } from '../../hooks/useLanguage';
import { mockPets } from '../../data/pets';
import styles from './Profile.module.css';

type ActiveTab = 'saved' | 'ads';

const getAvatarInitial = (name: string): string => name.charAt(0).toUpperCase();

export const Profile = (): JSX.Element => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const { savedPetIdentifiers, savedCount } = useSaved();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ActiveTab>('saved');

  if (!isAuthenticated || !user) {
    navigate('/login');
    return <></>;
  }

  const savedPets = mockPets.filter((pet) => savedPetIdentifiers.includes(pet.identifier));

  const handleLogout = (): void => {
    logout();
    navigate('/');
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>{getAvatarInitial(user.name)}</div>
          <div>
            <p className={styles.name}>{user.name}</p>
            <p className={styles.email}>{user.email}</p>
          </div>
        </div>

        <button className={styles.logoutButton} onClick={handleLogout}>
          <IconLogout size={16} />
          {t('profile.logout')}
        </button>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'saved' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          {t('profile.savedTab')} ({savedCount})
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'ads' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('ads')}
        >
          {t('profile.adsTab')}
        </button>
      </div>

      {activeTab === 'saved' && (
        savedPets.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🐾</div>
            <p className={styles.emptyText}>{t('profile.emptyState.saved')}</p>
            <Link to="/browse" className={styles.ctaButton}>{t('profile.browseCta')}</Link>
          </div>
        ) : (
          <div className={styles.grid}>
            {savedPets.map((pet) => <PetCard key={pet.identifier} pet={pet} />)}
          </div>
        )
      )}

      {activeTab === 'ads' && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📋</div>
          <p className={styles.emptyText}>{t('profile.emptyState.ads')}</p>
          <Link to="/signup" className={styles.ctaButton}>{t('profile.addCta')}</Link>
        </div>
      )}
    </div>
  );
};
