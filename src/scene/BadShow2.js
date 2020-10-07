import React from 'react'
import VimeoPlayer from './VimeoPlayer'
import WorkList from './WorkList'
import Heart from '../content/assets/wind-small.png'
import beleifsBack from '../content/assets/infoMapAssets/interpretations.svg'
import NextRoundButton from './NextRoundButton'

export default function BadShow2(props){
    
    return(
        <div>
            <VimeoPlayer source="https://youtu.be/_IcQwXrKInM"/>
            <img className="bigRoundButton" id="התניה פעילה- אמונות ומחשבות ריאקטיביות" src={Heart} alt="Heart" style={{backgroundImage:`url(${beleifsBack})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}} />
            <WorkList  works={props.beliefs} title="התניה פעילה- אמונות ומחשבות ריאקטיביות" />
            <div className="nextText">הצעד הבא שלי</div>
            <nav className="headerButtons">
                <NextRoundButton place="left" buttonId="exercise" handleClick={props.handleClick}/>
                <NextRoundButton place="right" buttonId="newStory" handleClick={props.handleClick}/>
            </nav>
        </div>
    )
}