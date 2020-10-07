import React, {useState} from 'react';
import EditingItem from './EditingItem'

const EditingList = (props) => {
    // console.log(props.editArray)
    let [infoBox, setInfoBox] = useState(false)
    let title, infoText, color, colorBG;
    if(props.title === "התניה פעילה- אמונות ומחשבות ריאקטיביות"){
        title = "התניה פעילה- אמונות ומחשבות ריאקטיביות"
        color = "belief"
        colorBG = "beliefBG"
        infoText = "התניה פעילה- אמונות ומחשבות ריאקטיביות זה בעצם..."
    }
    if(props.title === "פחדים"){
        title = "פחדים"
        color = "feeling"
        colorBG = "feelingBG"
        infoText = "פחדים זה בעצם..."
    }
    if(props.title === "עוצמות- משאבים טבעיים"){
        title = "עוצמות- משאבים טבעיים"
        color = "strength"
        colorBG = "strengthBG"
        infoText = "עוצמות- משאבים טבעיים זה בעצם..."
    }
    if(props.title === "תשוקות גנריות"){
        title = "תשוקות גנריות"
        color = "passion"
        colorBG = "passionBG"
        infoText = "תשוקות גנריות זה בעצם..."
    }
    const Item= props.editArray.map(item => <EditingItem key={item.id} 
                                                            item={item}
                                                            color={color}
                                                            handleChange={props.handleChange}/>) 
    let infoShow;
    infoBox ? infoShow = <div className={`infoBox ${color}`}>{infoText}</div> : infoShow = <div></div>
    
    return (
        <div>
            <div className={`editingList ${colorBG}`}>
                <div className={`listEditTitle ${color}`}>{title}</div>
                {Item}
                <div className="buttonsBottom">
                    <button className="storyButton" onClick={props.toAddItem}>+</button>
                    <button className="infoButton" onClick={()=> {!infoBox ? setInfoBox(infoBox=true) : setInfoBox(infoBox=false)}}>i</button>
                </div>
            </div>
            {infoShow}
        </div>

    );
}
export default EditingList