import React from "react";
import styles from './ShoppingListItem.module.css';
import cx from 'classnames';

/* Shopping list item */
const ShoppingListItem = props => {
  return <li className={ cx(styles.flex, styles.item) }>
    <div className={ cx(styles.flex, styles.itemQtyUnit) }>
      <div>
        { props.qty }
      </div>
      <div>
        { props.unit }
      </div>
    </div>
    <div>
      { props.value}
    </div>
    <div><button className={ styles.delete } onClick={ () => props.removeItem(props.id) }>X</button></div>
  </li>
}

export default ShoppingListItem;