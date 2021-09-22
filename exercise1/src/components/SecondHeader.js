import React from 'react';
import styles from './SecondHeader.module.css';

export default function SecondHeader() {
    return (
        <div className={ styles.container }>
            <div>Etusivu</div>
            <div>HS Visio</div>
            <div>Luetuimmat</div>
            <div>Uusimmat</div>
            <div>Politiikka</div>
            <div>Kaupunki</div>
            <div>Kulttuuri</div>
            <div>Tiede</div>
            <div>Hyvinvointi</div>
            <div>Ruoka</div>
            <div>Nyt</div>
        </div>
    )
}
