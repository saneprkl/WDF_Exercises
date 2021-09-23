import React from 'react';
import styles from './SecondHeader.module.css';

export default function SecondHeader() {
    return (
        <div className={ styles.header_background }>
        <div className={ styles.container }>
            <div className={ styles.selected }>Etusivu</div>
            <div className={ styles.topics }>HS Visio</div>
            <div className={ styles.topics }>Luetuimmat</div>
            <div className={ styles.topics }>Uusimmat</div>
            <div className={ styles.topics }>Politiikka</div>
            <div className={ styles.topics }>Kaupunki</div>
            <div className={ styles.topics }>Kulttuuri</div>
            <div className={ styles.topics }>Tiede</div>
            <div className={ styles.topics }>Hyvinvointi</div>
            <div className={ styles.topics }>Ruoka</div>
            <div className={ styles.topics }>Nyt</div>
        </div>
        <div className={ styles.seperator }></div>
        </div>
    )
}
