import React from 'react';
import styles from './Notification.module.css';

export default function Notifications(props) {
    return (
        <div className={ styles.container }>
            <span className={ styles.topic}> { props.topic }</span> { props.body }
        </div>
    )
}