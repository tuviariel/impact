import React from 'react'
import Welcome from './Welcome'
import Map from '../content/assets/new-map.png'
import ImageMapper from 'react-image-mapper'
import VimeoPlayer from './VimeoPlayer'
const MainShow = (props) => {
    // console.log("from MainShow props: ", props)
    let circle = {name:"circle-map", areas: [
        {name:"map", shape:"circle", coords:[454,248,90]},
        {name:"bad", shape:"circle", coords:[278,557,90]},
        {name:"good", shape:"circle", coords:[623,557,90]}
    ]}
    let screenWidth = window.screen.availWidth, width
    if(screenWidth>1000){
        width=600
    }
    else if(screenWidth<417){
        width=300
    }
    else{
        width=screenWidth*0.6
    }
    let show
    !props.first ? show = <VimeoPlayer source="https://youtu.be/k65zMF_ce28"/> : show = <div></div>
    return(
        <div className="circleDiv">
            {show}
            <Welcome
                name={props.name}
                first={props.first}
                firstEntry={props.firstEntry} />
            <div id="alertShow" >{props.message}</div>
            <ImageMapper src={Map}
                        className="main"  
                        alt="החיים שלי"
                        map={circle}
                        onClick={area => props.onClickHandler(area)}
                        imgWidth={900}
                        width={width}
                        margin={"auto"} />
        </div>
    )
}
export default MainShow;