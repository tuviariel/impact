import React from 'react';

const Welcome = (props) => {
    
    // console.log("from Welcome props: ", props)
    return (
        <div className="mainTitle">
            <div className="firstTitle">{props.name}, שלום!</div>
            <div className="startTitle" style={{display: props.first===true ? "block" : "none"}} onClick={props.firstEntry}>מתחילים</div>
            <div className="secondTitle" style={{display: props.first===false ? "block" : "none"}}>מה שלומי היום?</div>
        </div>
    );
}
export default Welcome;