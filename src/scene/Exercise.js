import React from 'react'
import VimeoPlayer from './VimeoPlayer'
import NextRoundButton from './NextRoundButton'

export default function BadShow5(props){
    let videoId= props.screenId, videoSource
    if(videoId==="7"){
        videoSource = "https://vimeo.com/158273533"
    }
    else if(videoId==="8"){
        videoSource = "https://vimeo.com/158273533"
    }
    else{ //"9"
        videoSource = "https://vimeo.com/158273533"
    }
    
    return(
        <div>
            <VimeoPlayer source={videoSource}/>
            <div className="headerButtons">
                <NextRoundButton buttonId="end" handleClick={props.handleClick}/>
            </div>
        </div>
    )
}