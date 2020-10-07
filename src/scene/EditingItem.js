import React from 'react';

export default function EditingItem(props) {

    return (
        <div className="editItem">
                    <input className={`placeholderRight ${props.color}`}
                        type="text" 
                        value={props.item.text}
                        name={props.item.id}
                        placeholder="ערוך את הפריט שלך כאן"
                        onChange={props.handleChange}/><div className={props.color}>{props.item.id}) </div>
                        
        </div>
    );
}