import React, { Component } from 'react';
import BadShow1 from '../scene/BadShow1'
import BadShow2 from '../scene/BadShow2'
import BadShow3 from '../scene/BadShow3'
import BadShow4 from '../scene/BadShow4'
import BadShow5 from '../scene/BadShow5'
import BadShow6 from '../scene/BadShow6'
import Back from '../content/assets/left-arrow.png'
import firebase from 'firebase'
import base from '../base'

export default class Bad extends Component {
    constructor(props){
        super(props)
        this.state={
            historyNum: 0,
            badFlow: ['1'],
            screenId: '1',
            storyBody2: "",
            storyBody3: "",
            storyBody4: "",
            storyBody5: "",
            beliefs: [],
            exercises: [{name: "סיפור חדש - הפיכת הסיפור", checked: false},
                        {name: "סיפור חדש - ראיות תומכות", checked: false},
                        {name: "תרגול קבלה - לשתף", checked: false},
                        {name: "תרגול קבלה - לאהוב את מה שיש", checked: false},
                        {name: "תרגול קבלה - לשהות ברגש", checked: false}]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

    componentDidMount(){
        const rootRef = firebase.database().ref().child("users")
        const idRef = rootRef.child(this.props.id)
        idRef.on('value', snap => {
            const history = snap.val().history
            const historyLength = history.length
            // console.log(historyLength)
            this.setState({
                beliefs: snap.val().beliefs,
                historyNum: historyLength,
            })
        })
    }

    handleClick(event){//controles flow back and forth
        const {id} = event.target
        // console.log('in handleClick and id=',id, 'and name=', name)
        if(id==="leave"){
            this.props.onClickHandler(event)
        }
        else if(id==="back"){//pressed "back"
            let newPlace// = badFlow[length-1]
            this.setState( prevState => {
                prevState.badFlow.pop()
                newPlace = prevState.badFlow.pop()
                this.setState({screenId: newPlace})
                prevState.badFlow.push(newPlace)
                const updatedArray = prevState.badFlow
                return {badFlow: updatedArray}
            })
        }
        else {//pressed forth
            // console.log(id)
            this.setState( prevState => {
                prevState.badFlow.push(id)
                const updatedArray = prevState.badFlow
                return {badFlow: updatedArray}
            })
            // console.log(this.state.badFlow)
            this.setState({screenId: id})
        }
    }
    
    componentWillUnmount(){//save all to DB before leaving (after pressing finished)
        if(this.state.storyBody2!=="") { // || this.state.storyBody3!=="" || this.state.storyBody4!=="" || this.state.storyBody5!=="" || this.state.checkedBeliefs !== []){
            let checkedExercises = this.state.exercises.map(item => item.checked && item.name)
            firebase.database().ref('users/'+ this.props.id +'/history/'+ this.state.historyNum).set({
                storyBad1: this.state.storyBody2,
                storyBad2: this.state.storyBody3,
                storyBad3: this.state.storyBody4,
                storyBad4: this.state.storyBody5,
                exercisesUsed: checkedExercises,
                id: this.state.historyNum,
                time: Date.now()
            })
        }
    }

    handleChange(event){//handle checkbox checked and saving storys to state
        const {name, value, type, checked} = event.target
        if (type === "checkbox") {//handling checkboxs
            // console.log("checkboxhandle", name)
            this.setState( prevState => { //function that saves checked exercises..
                const updatedArray = prevState.exercises.map(item => { //beleifs
                    if(item.name === name) { //.id.toString() === name
                        return {
                            ...item,
                            checked: checked
                        }
                    }
                    return item
                })
                return {exercises: updatedArray}
            })
            // console.log(this.state.exercises)
        }
        else {//saving storys to state
            if(name==="2"){
                this.setState({storyBody2: value})
            }
            else if(name==="3"){
                this.setState({storyBody3: value})
            }
            else if(name==="4"){
                this.setState({storyBody4: value})
            }
            else if(name==="5"){
                this.setState({storyBody5: value})
            }
            
        }
    }

    render(){
        let screenId = this.state.screenId, screenShow
        if(screenId==="1"){
            screenShow = <BadShow1 storyBody2={this.state.storyBody2} 
                                    storyBody3={this.state.storyBody3} 
                                    handleChange={this.handleChange} 
                                    handleClick={this.handleClick}/>
        }
        else if(screenId==="2"){
            screenShow = <BadShow2 beliefs={this.state.beliefs}
                                    handleChange={this.handleChange} 
                                    handleClick={this.handleClick}/>
        }
        else if(screenId==="3"){//newStory
            screenShow = <BadShow3 storyBody2={this.state.storyBody2}
                                    storyBody4={this.state.storyBody4}
                                    beliefs={this.state.beliefs}
                                    handleChange={this.handleChange} 
                                    handleClick={this.handleClick}/>
        }
        else if(screenId==="4"){//newStoryProof
            screenShow = <BadShow4 storyBody4={this.state.storyBody4}
                                    storyBody5={this.state.storyBody5}
                                    handleChange={this.handleChange} 
                                    handleClick={this.handleClick}/>
        }
        else if(screenId==="5"){//finish setion
            screenShow = <BadShow5 handleClick={this.handleClick}
                                    handleChange={this.handleChange}/>
        }
        else if(screenId==="6"){//way to exercises
            screenShow = <BadShow6 handleClick={this.handleClick}
                                    badFlow={this.state.badFlow}/>
        }
        let backButton
        if(this.state.badFlow.length>1){
            backButton = <div className="backButtonText" id="back" onClick={this.handleClick}><img className="backButton" src={Back} alt="חזור" id="back" onClick={this.handleClick} align="left"/>חזרה</div>
        }
        else if(this.state.badFlow.length===1){
            backButton = <div className="backButtonText" name="main" onClick={this.props.onClickHandler}><img className="backButton" src={Back} alt="חזור" name="main" onClick={this.props.onClickHandler} align="left"/>חזרה</div>
        }

        return (
            <div>
                {backButton}
                {screenShow}
            </div>
        );
    }
}