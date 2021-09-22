import React from 'react'

export default function Notifications(props) {
    return (
        <div>
            { props.topic } { props.body }
        </div>
    )
}