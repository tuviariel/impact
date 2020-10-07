import React from 'react';

export default function ShowItem(props) {
    let checkbox = <div></div>
    if(props.title !== "התניה פעילה- אמונות ומחשבות ריאקטיביות"){
        checkbox = <input type="checkbox"
                            title={props.title}
                            name={props.item.id}
                            onChange={props.handleChange}
                            checked={props.item.checked} />
    }

    return (
        <div className="editItem">
            <div>{props.item.text}</div>
            {checkbox}
        </div>
    );
}