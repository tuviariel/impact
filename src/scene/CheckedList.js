import React from 'react'
import ShowItem from './ShowItem'

export default function CheckedList(props){
    const items = props.itemsArray.map(item => item.text!=="" && <ShowItem key={item.id} item={item} title="regularShow" show={props.show}/>)
    return (
        <div>
            <div className="storyTitle">הפרשנות הסובייקטיבית והאוטומטית שלי לאירוע שקרה לי:</div>
            {items}
        </div>
    )
}