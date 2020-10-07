import React from 'react'
import Exercise from '../content/assets/exercise.png'
import NewStory from '../content/assets/new-story.png'
import Human from '../content/assets/human-white.png'


export default function NextRoundButton(props){
    let button
    let buttonId=props.buttonId
    let place = props.place
    if(buttonId==="exercise"){
        button = <div className={place}>
                    <div><img className="bigRoundButton" src={Exercise} alt="Exercise" onClick={props.handleClick} id="6"/></div>
                    <div className="roundButtonText">לתרגל קבלה</div>
                </div>
    }
    else if(buttonId==="newStory"){
        button = <div className={place}>
                    <div><img className="bigRoundButton" src={NewStory} alt="New Story" onClick={props.handleClick} id="3"/></div>
                    <div className="roundButtonText">לספר סיפור חדש</div>
                </div>
    }

    else if(buttonId==="humanMap"){
        button = <div className={place}>
                    <div><img className="bigRoundButton" src={Human} alt="My Human Map" onClick={props.handleClick} id="leave" name="map" /></div>
                    <div className="roundButtonText">למפת התודעה שלי</div>
                </div>
    }
    else{

    }
    
    return(button)
}