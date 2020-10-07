import React, {useState} from 'react'
import VimeoPlayer from './VimeoPlayer'
import NextRoundButton from './NextRoundButton'
import Breath from '../content/assets/breath.png'
import Connect from '../content/assets/connect.png'
import Send from '../content/assets/send.png'

const BadShow6 = (props) => {
    const [exerciseShow, setExerciseShow] = useState("")
    let newStoryShow //shows new story only if haven't been there
    props.badFlow.includes("3") ? newStoryShow = <div></div> : newStoryShow = <NextRoundButton buttonId="newStory" handleClick={props.handleClick}/>
    let exercise = exerciseShow    
    let showExercise, videoSource;
    if(exercise==="breath"){
        videoSource="https://youtu.be/tOhxywC8rPY"
    }
    else if(exercise==="connect"){
        videoSource="https://youtu.be/V4cH7sBnEC8"
    }
    else if(exercise==="send"){
        videoSource="https://youtu.be/ALGoSDJFfQw"
    }

    if(exercise!=="") { 
        showExercise = <div>
            <VimeoPlayer source={videoSource}/>         
            <div className="nextText" onClick={props.handleClick} id="5">סיימתי</div>
        </div>}

    return(
        <div>
            <div className="sentinces">
                <div className="sentince">קבלה = הסרת השיפוטיות</div>
                <div className="sentince">זה לא טוב או רע- זה מה שזה</div>
                <div className="sentince">אני ראוי לאהבה ובעל ערך ללא תנאים</div>
            </div>
            <div className="nextText">התרגול שמתאים לי עכשיו</div>
            <nav className="headerButtons">
                <div className="right">
                    <div><img className={`bigRoundButton ${exerciseShow==="breath" ? "chose" : ""}`} src={Breath} alt="Breath" onClick={()=>{setExerciseShow("breath")}} id="9"/></div>
                    <div className="roundButtonText">לשהות ברגש</div>
                </div>
                <div className="center">
                    <div><img className={`bigRoundButton ${exerciseShow==="connect" ? "chose" : ""}`} src={Connect} alt="Connect" onClick={()=>{setExerciseShow("connect")}} id="8"/></div>
                    <div className="roundButtonText">לאהוב את מה שיש</div>
                </div>
                <div className="left">
                    <div><img className={`bigRoundButton ${exerciseShow==="send" ? "chose" : ""}`} src={Send} alt="Send" onClick={()=>{setExerciseShow("send")}} id="7"/></div>
                    <div className="roundButtonText">לשתף</div>
                </div>
            </nav>
            {showExercise}
            {newStoryShow}
        </div>
    )
}
export default BadShow6