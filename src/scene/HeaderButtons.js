import React from 'react';
import Fire from '../content/assets/fire-small.png'
import Heart from '../content/assets/heart-small.png'
import Water from '../content/assets/water-small.png'
import Wind from '../content/assets/wind-small.png'
import WaterBack from '../content/assets/infoMapAssets/feelings.svg'
import WindBack from '../content/assets/infoMapAssets/interpretations.svg'
import FireBack from '../content/assets/infoMapAssets/desires.svg'
import HeartBack from '../content/assets/infoMapAssets/strengths.svg'

const HeaderButtons = (props) => {
    let id = props.editTitle, backgroundColor1, backgroundColor2, backgroundColor4, backgroundColor5
    id==="תשוקות גנריות" ? backgroundColor1=FireBack : backgroundColor1=""
    id==="עוצמות- משאבים טבעיים" ? backgroundColor2=HeartBack : backgroundColor2=""
    id==="פחדים" ? backgroundColor4=WaterBack : backgroundColor4=""
    id==="התניה פעילה- אמונות ומחשבות ריאקטיביות" ? backgroundColor5=WindBack : backgroundColor5=""
    
    return (
        <div className="headerButtons">
            <nav>
                <img src={Fire} alt="Fire" style={{backgroundImage:`url(${backgroundColor1})`, backgroundRepeat: `no-repeat`}} onClick={props.toEdit} id="תשוקות גנריות" className="roundButton"/>            
                <img src={Heart} alt="Heart" style={{backgroundImage:`url(${backgroundColor2})`, backgroundRepeat: `no-repeat`}} onClick={props.toEdit} id="עוצמות- משאבים טבעיים" className="roundButton"/>
                <img src={Water} alt="Water" style={{backgroundImage:`url(${backgroundColor4})`, backgroundRepeat: `no-repeat`}} onClick={props.toEdit} id="פחדים" className="roundButton"/>            
                <img src={Wind} alt="Wind" style={{backgroundImage:`url(${backgroundColor5})`, backgroundRepeat: `no-repeat`}} onClick={props.toEdit} id="התניה פעילה- אמונות ומחשבות ריאקטיביות" className="roundButton"/>            
            </nav>
        </div>
    );
}
export default HeaderButtons