import React from 'react';
import styles from './Header.module.css';

export default function header() {
    return (
        <div className={ styles.header_background }>
        <div className={ styles.container }>
            <div className={ styles.menu }>
                <div className={ styles.title }>Helsingin Sanomat </div>
                <div>Uutiset </div>
                <div>Lehdet </div>
            </div>
            <div>
                <button>Tilaa</button>
                <button>Kirjaudu</button>
                <button>Hae</button>
                <button>Valikko</button>
            </div>
        </div></div>
    )
}