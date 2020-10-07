import React from 'react'

export default function TextStory(props){
    let storyNum = props.storyNum, storyTitle, placeholder="הקלד/י טקסט כאן", titleStyle="storyTitle"
    if(storyNum===11){
        storyTitle = "מהי המציאות שאני רוצה ליצור?"
        placeholder = "הקלד/י טקסט כאן"//TODO- replace text with text from Mati (line 58 on excel)
        titleStyle = "storyTitle2"
    }
    else if(storyNum===12){
        storyTitle = "המראה החיובית שלי"
        placeholder = "הקלד/י טקסט כאן"//TODO- replace text with text from Mati (line 66 on excel)
        titleStyle = "storyTitle2"
    }
    else if(storyNum===2){
        storyTitle = "למה אני מרגיש רע - מה הוציא אותי מאיזון?"
        placeholder = "תארו את האירוע או הסיטואציה שיצרה את החוויה השלילית"
    }
    else if(storyNum===3){
        storyTitle = "איזה רגשות חוויתי?"
        placeholder = "תארו את הרגשות והתחושות שחוויתם"
    }
    else if(storyNum===4){
        storyTitle = "אותו דבר רק הפוך..."
        placeholder = "הסיפור החדש שלי"
    }
    else if(storyNum===5){
        storyTitle = "ראיות שתומכות בסיפור החדש:"
        placeholder = "קל לי להאמין לסיפור החדש כי:"
    }
    else{}

    return(
        <div className="storyDiv">
            <div className={titleStyle}>{storyTitle}</div>
            <textarea className="storyBody" 
                        placeholder={placeholder}
                        name={props.storyNum}
                        value={props.storyBody} 
                        onChange={props.handleChange}>
            </textarea>
            
        </div>
    );
}