import React from 'react'
import ShowItem from './ShowItem'

export default function ShowList(props) {
    let items1= props.beliefs.map(item => (item.text==="") ? "" : <ShowItem key={item.id} item={item} title="belief"/>) 
    let items2= props.feelings.map(item => (item.text==="") ? "" : <ShowItem key={item.id} item={item} title="feeling"/>) 
    let items3= props.strengths.map(item => (item.text==="") ? "" : <ShowItem key={item.id} item={item} title="strength"/>) 
    let items4= props.passions.map(item => (item.text==="") ? "" : <ShowItem key={item.id} item={item} title="passion"/>) 
    
    var allArray=[items1,items2,items3,items4]
    var emptyText= <div id="emptyBox">הקלד/י טקסט כאן</div>
    for(var a=0; a<4; a++){
        var j=0
        for(var i=0; i<allArray[a].length; i++){
            if(allArray[a][i]===""){
                j++
            }
        }
        if(j===i){
            allArray[a]= emptyText
        }
    }

    items1=allArray[0]
    items2=allArray[1]
    items3=allArray[2]
    items4=allArray[3]
    return (
        <div>
            <div style={{display: props.title==="התניה פעילה- אמונות ומחשבות ריאקטיביות" && "none"}}>
                <div className="List" onClick={props.toEdit} id="התניה פעילה- אמונות ומחשבות ריאקטיביות" style={{backgroundColor: !(props.title==="noEdit") && "rgba(255,255,255, 0.7)"}}>
                    <div className="listTitle">התניה פעילה- אמונות ומחשבות ריאקטיביות</div>
                    {items1}
                </div>
            </div>
            <div style={{display: props.title==="פחדים" && "none"}}>
                <div className="List" onClick={props.toEdit} id="פחדים" style={{backgroundColor: !(props.title==="noEdit") && "rgba(255,255,255, 0.7)"}}>
                    <div className="listTitle">פחדים</div>
                    {items2}
                </div>
            </div>
            <div style={{display: props.title==="עוצמות- משאבים טבעיים" && "none"}}>
                <div className="List" onClick={props.toEdit} id="עוצמות- משאבים טבעיים" style={{backgroundColor: !(props.title==="noEdit") && "rgba(255,255,255, 0.7)"}}>
                    <div className="listTitle">עוצמות- משאבים טבעיים</div>
                    {items3}
                </div>
            </div>
            <div style={{display: props.title==="תשוקות גנריות" && "none"}}>
                <div className="List" onClick={props.toEdit} id="תשוקות גנריות" style={{backgroundColor: !(props.title==="noEdit") && "rgba(255,255,255, 0.7)"}}>
                    <div className="listTitle">תשוקות גנריות</div>
                    {items4}
                </div>
            </div>
        </div>
    );
}