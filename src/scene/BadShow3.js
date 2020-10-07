import React from 'react'
import CheckedList from './CheckedList'
import VimeoPlayer from './VimeoPlayer'
import TextStory from './TextStory'

export default function BadShow3(props){
    
    return(
        <div>
            <VimeoPlayer source = "https://youtu.be/ZvSpwpfLTAM"/>
            <div className="List staticList" id="blackText">{props.storyBody2}</div>
            <CheckedList itemsArray={props.beliefs} show="listItemShow"/><hr/>
            <div className="nextText">הפרשנות החדשה שלי:</div>
            <TextStory storyBody={props.storyBody4} storyNum={4} handleChange={props.handleChange} />
            <div className="nextText" onClick={props.handleClick} id="4">הצעד הבא שלי</div>
        </div>
    )
}