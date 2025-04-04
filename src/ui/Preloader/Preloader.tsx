import React from 'react';
import styles from './Preloader.module.css';

const Preloader = () => (
        <div data-testid="preloader" className={styles.preloader}>
            <div className={styles.preloader__container}>
                <span className={styles.preloader__round}></span>
            </div>
        </div>
);

export default Preloader;