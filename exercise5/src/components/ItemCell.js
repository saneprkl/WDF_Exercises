import React from 'react';
import styles from './ItemCell.module.css';

export default function ItemCell(props) {
    return (
        <div className={ styles.itemCell }>
            <div className={ styles.container }>
                <div><img className={ styles.image } src={ `/img/${props.image}` }></img></div>
                <div className={ styles.title }>{ props.name }</div>
                <div className={ styles.rating }>{ props.rating }</div>
                <div className={ styles.price }>€{ props.price }</div>
                <div className={ styles.stock }>{ props.stock }</div>
            </div>
        </div>
    )
}
