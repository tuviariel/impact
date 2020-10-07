import React from 'react'
import title from '../content/assets/title2.png'

export default function TitleImageBackButton (props){
    return(
        <div>
            <img src={title}
                className="App-logo" 
                alt="חזור"
                width="300px"
                onClick={props.onClickHandler}
                name="main" 
            />
        </div>
    )
}