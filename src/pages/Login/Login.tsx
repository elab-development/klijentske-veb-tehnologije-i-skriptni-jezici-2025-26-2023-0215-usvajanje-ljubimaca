import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconPaw, IconMail, IconLock } from '@tabler/icons-react';

import { useAuth } from '../../hooks/useAuth';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './Login.module.css';

export const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useLanguage();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    const derivedName = email.split('@')[0];
    login(email, derivedName);
    navigate('/profile');
  };

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <div className={styles.logoArea}>
          <IconPaw size={40} className={styles.logoIcon} />
          <h1 className={styles.title}>{t('login.title')}</h1>
          <p className={styles.subtitle}>{t('login.subtitle')}</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">{t('login.email')}</label>
            <div className={styles.inputWrapper}>
              <IconMail size={18} className={styles.inputIcon} />
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder={t('login.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">{t('login.password')}</label>
            <div className={styles.inputWrapper}>
              <IconLock size={18} className={styles.inputIcon} />
              <input
                id="password"
                type="password"
                className={styles.input}
                placeholder={t('login.passwordPlaceholder')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>{t('login.submit')}</button>
        </form>

        <p className={styles.footer}>
          {t('login.noAccount')}
          <Link to="/signup" className={styles.footerLink}>{t('login.signupLink')}</Link>
        </p>
      </div>
    </div>
  );
};
