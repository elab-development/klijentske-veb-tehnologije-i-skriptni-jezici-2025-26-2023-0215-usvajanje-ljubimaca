import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconPaw, IconUser, IconMail, IconLock } from '@tabler/icons-react';

import { useAuth } from '../../hooks/useAuth';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './SignUp.module.css';

export const SignUp = (): JSX.Element => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    login(email, name);
    navigate('/profile');
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <div className={styles.logoArea}>
          <IconPaw size={40} className={styles.logoIcon} />
          <h1 className={styles.title}>{t('signup.title')}</h1>
          <p className={styles.subtitle}>{t('signup.subtitle')}</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">{t('signup.name')}</label>
            <div className={styles.inputWrapper}>
              <IconUser size={18} className={styles.inputIcon} />
              <input
                id="name"
                type="text"
                className={styles.input}
                placeholder={t('signup.namePlaceholder')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">{t('signup.email')}</label>
            <div className={styles.inputWrapper}>
              <IconMail size={18} className={styles.inputIcon} />
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder={t('signup.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">{t('signup.password')}</label>
            <div className={styles.inputWrapper}>
              <IconLock size={18} className={styles.inputIcon} />
              <input
                id="password"
                type="password"
                className={styles.input}
                placeholder={t('signup.passwordPlaceholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>{t('signup.submit')}</button>
        </form>

        <p className={styles.footer}>
          {t('signup.hasAccount')}
          <Link to="/login" className={styles.footerLink}>{t('signup.loginLink')}</Link>
        </p>
      </div>
    </div>
  );
};
