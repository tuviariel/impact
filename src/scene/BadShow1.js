import React from 'react'
import TextStory from './TextStory'

export default function BadShow1(props){
    let next
    if(props.storyBody2!=="" && props.storyBody3!=="") {
        next = <div className="nextText emptyNextText" onClick={props.handleClick} id='2'>הצעד הבא שלי</div>
    }
    return(
        <div>
            <TextStory storyBody={props.storyBody2} storyNum={2} handleChange={props.handleChange} />
            <TextStory storyBody={props.storyBody3} storyNum={3} handleChange={props.handleChange} />
            {next}
        </div>
    )
}