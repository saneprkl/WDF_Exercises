import React from 'react';
import styles from './ItemMap.module.css';
import ItemCell from './ItemCell';

export default function ItemMap(props) {
    return (
        <div className={ styles.container }>
            
            {
                props.items.map(item => <ItemCell key={ item.id } {...item} /> )
            }
            
        </div>
    )
}
