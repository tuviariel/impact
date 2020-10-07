import React from 'react';

export default function ShowItem(props) {
    return (
        <div className={`listItem ${props.show}`}>{props.item.id}) {props.item.text}</div>
    );
}