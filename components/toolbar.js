import React from 'react';
import Link from 'next/link';
import styles from './toolbar.module.css';

const Toolbar = () => {
  
    return (
        <div className={styles['flex-container']}>
            <div className={styles['flex-item']}><Link href="/rankings">rankings</Link></div>
            <div className={styles['flex-item']}><Link href="/matchups">matchups</Link></div>
            <div className={styles['flex-item']}><Link href="/about">about</Link></div>
        </div>
    );
}

export default Toolbar