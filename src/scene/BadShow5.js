import React from 'react'
import VimeoPlayer from './VimeoPlayer'
import NextRoundButton from './NextRoundButton'
import Breath from '../content/assets/breath.png'
import Connect from '../content/assets/connect.png'
import Send from '../content/assets/send.png'
import NewStory from '../content/assets/new-story.png'

export default function BadShow5(props){//סיימתי
    
    return(
        <div>
            <VimeoPlayer source="https://youtu.be/7e87eFL19BA"/>
            <div className="storyTitle2">סיימנו! מה עזר לי הפעם?</div>
            <div>
                <div className="horizon">
                    <input type="checkbox" name="סיפור חדש - הפיכת הסיפור" onChange={props.handleChange}/>
                    <div className="storyTitle">סיפור חדש - הפיכת הסיפור</div>
                    <img className="smallRoundButton" src={NewStory} alt="הפיכת הסיפור"/>
                </div>
                <div className="horizon">
                    <input type="checkbox" name="סיפור חדש - ראיות תומכות" onChange={props.handleChange}/>
                    <div className="storyTitle">סיפור חדש - ראיות תומכות</div>
                    <img className="smallRoundButton" src={NewStory} alt="ראיות תומכות"/>
                </div>
                <div className="horizon">
                    <input type="checkbox" name="תרגול קבלה - לשתף" onChange={props.handleChange}/>
                    <div className="storyTitle">תרגול קבלה - לשתף</div>
                    <img className="smallRoundButton" src={Send} alt="לשתף"/>
                </div>
                <div className="horizon">
                    <input type="checkbox" name="תרגול קבלה - לאהוב את מה שיש" onChange={props.handleChange}/>
                    <div className="storyTitle">תרגול קבלה - לאהוב את מה שיש</div>
                    <img className="smallRoundButton" src={Connect} alt="לאהוב את מה שיש"/>
                </div>
                <div className="horizon">
                    <input type="checkbox" name="תרגול קבלה - לשהות ברגש" onChange={props.handleChange}/>
                    <div className="storyTitle">תרגול קבלה - לשהות ברגש</div>
                    <img className="smallRoundButton" src={Breath} alt="לשהות ברגש"/>
                </div>
            </div>
            <div className="headerButtons">
                <NextRoundButton place="right" buttonId="humanMap" handleClick={props.handleClick}/>
                <NextRoundButton place="left" buttonId="exercise" handleClick={props.handleClick}/>
            </div>
            <div>
                <div className="nextText" onClick={props.handleClick} id="leave">סיימתי</div>
            </div>
        </div>
    )
}