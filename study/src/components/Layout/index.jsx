import Header from 'components/Header';
import React from 'react';
import styles from './styles.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
