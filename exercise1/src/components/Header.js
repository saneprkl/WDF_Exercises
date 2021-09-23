import React from 'react';
import styles from './Header.module.css';

export default function header() {
    return (
        <div className={ styles.header_background }>
        <div className={ styles.container }>
            <div className={ styles.menu }>
                <div className={ styles.title }>Helsingin Sanomat </div>
                <div className={ styles.secondaries }>Uutiset </div>
                <div className={ styles.secondaries }>Lehdet </div>
            </div>
            <div className={ styles.rightMenu }>
                <button className={ styles.button }>Tilaa</button>
                <div className={ styles.rightSecondaries }>Kirjaudu </div><span className={ styles.login }><i class="far fa-user-circle"></i></span>
                <div className={ styles.rightSecondaries }>Hae </div><span className={ styles.search }> <i class="fas fa-search"></i></span>
                <div className={ styles.rightSecondaries }>Valikko</div><span className={styles.bars }> <i class="fas fa-bars fa-1.2x"></i></span>
            </div>
        </div>
        </div>
    )
}