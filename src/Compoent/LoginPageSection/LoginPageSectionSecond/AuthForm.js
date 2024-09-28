import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import GuestForm from './GuestForm';
import styles from './AuthForm.module.css';
import { activeTabState } from '../../Recoil/Recoil';
import { useRecoilState } from 'recoil';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);


  const renderForm = () => {
    if (activeTab === 'login') return <LoginForm />;
    if (activeTab === 'register') return <RegisterForm />;
    return <GuestForm />;
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.tabContainer}>
        <div 
          className={`${styles.tab} ${activeTab === 'login' && styles.activeTab}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </div>
        <div 
          className={`${styles.tab} ${activeTab === 'register' && styles.activeTab}`}
          onClick={() => setActiveTab('register')}
        >
          Register
        </div>
        <div 
          className={`${styles.tab} ${activeTab === 'guest' && styles.activeTab}`}
          onClick={() => setActiveTab('guest')}
        >
          Guest
        </div>
      </div>
      {renderForm()}
    </div>
  );
};

export default AuthForm;
