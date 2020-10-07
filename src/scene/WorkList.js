import React from 'react';
import WorkItem from './WorkItem'

export default function WorkList(props) {
    let show, title = props.title
    const Items= props.works.map(item => (item.text==="") ? "" : <WorkItem key={item.id} item={item} title={title} handleChange={props.handleChange}/>) 
        if(title==="תשוקות גנריות"){
            show=   <div><div className="storyTitle">התשוקות שהרצון הנוכחי שלי מבטא:</div>{Items}</div>
        }
        if(title==="עוצמות- משאבים טבעיים"){
            show=   <div><div className="storyTitle">אילו משאבים טבעיים קיימים בי למימוש הרצון?</div>{Items}</div>
        }
        if(title==="התניה פעילה- אמונות ומחשבות ריאקטיביות"){
            show=   <div><div className="storyTitle">הסיפור שהתודעה הריאקטיבית שלי רגילה לספר:</div>{Items}</div>
        }
    return (show);
}