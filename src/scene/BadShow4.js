import React from 'react'
import TextStory from './TextStory'
import VimeoPlayer from './VimeoPlayer'

export default function BadShow4(props){
    
    return(
        <div>
            <VimeoPlayer source="https://youtu.be/azoMbDi5630"/>
            <h4 className="storyTitle">הסיפור החדש:</h4>
            <div className="List" id="blackText">{props.storyBody4}</div>
            <TextStory storyBody={props.storyBody5} storyNum={5} handleChange={props.handleChange} />
            <div className="nextText" onClick={props.handleClick} id="5">סיימתי</div>
        </div>
    )
}