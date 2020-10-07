import React, { Component } from 'react';
import WorkList from '../scene/WorkList'
import TextStory from '../scene/TextStory'
import Fire from '../content/assets/fire-small.png'
import FireBack from '../content/assets/infoMapAssets/desires.svg'
import Heart from '../content/assets/heart-small.png'
import HeartBack from '../content/assets/infoMapAssets/strengths.svg'
import VimeoPlayer from '../scene/VimeoPlayer'
import Back from '../content/assets/left-arrow.png'
import base from '../base'
import firebase from 'firebase'

export default class Good extends Component {
    constructor(props){
        super(props)
        this.state={
            historyNum: 0,
            storyBody1: "",
            storyBody2: "",
            strengths: [],
            passions: [],// emptyArray:
            title: "", //text copyed from DB and sent to workList in props regarding the worklist type
            goodFlow: 1,
        }
        this.handleChange=this.handleChange.bind(this)
        this.onClickEndHandler= this.onClickEndHandler.bind(this)
        this.showWork=this.showWork.bind(this)
    }

    componentDidMount(){
        const rootRef = firebase.database().ref().child("users")
        const idRef = rootRef.child(this.props.id)
        idRef.on('value', snap => {
            const history = snap.val().history
            const historyLength = history.length
            // console.log(historyLength)
            this.setState({
                strengths: snap.val().strengths,
                passions: snap.val().passions,
                historyNum: historyLength,
            })
        })
    }

    onClickEndHandler(event){//for leaving component
        this.props.onClickHandler(event)
    }

    componentWillUnmount(){ //before end..
        if(this.state.storyBody1!==""){ // || this.state.storyBody2!=="" || this.state.checkedStrengths !== [] || this.state.checkedPassions !== []
            let checkedStrengths = [] , checkedPassions = []
            const strengths = this.state.strengths.map(item => {//converting all "checked" to "counter+1" in strengths
                if(item.checked) {
                    checkedStrengths.push(item.text)
                    return {
                        ...item,
                        counter: item.counter+1,
                        checked: false
                    }
                }
                return item
            })
            const passions = this.state.passions.map(item => {//converting all "checked" to "counter+1" in passions
                if(item.checked) {
                    checkedPassions.push(item.text)
                    return {
                        ...item,
                        counter: item.counter+1,
                        checked: false
                    }
                }
                return item
            })
            firebase.database().ref('users/'+ this.props.id).update({//save arrays with checked to DB before leaving (after pressing finished or back...)
                strengths: strengths,
                passions: passions,
            })
            firebase.database().ref('users/'+ this.props.id +'/history/'+ this.state.historyNum).set({//save worked info to log for future refrence
                storyGood1: this.state.storyBody1,
                storyGood2: this.state.storyBody2,
                strengthsUsed: checkedStrengths,
                passionsUsed: checkedPassions,
                id: this.state.historyNum,
                time: Date.now() 
            })
        }
    }
    
    showWork(event){//handle round button work presses
        const idPressed = event.target.id
        if(this.state.title === idPressed){//changing shown array to new show- empty
            this.setState({title: ""})
        }
        else {//changing shown array to new show- other array
            this.setState({title: idPressed})
        }
    }

    handleChange(event){//handle checkbox checked and saving story to state
        const {name, value, type, checked, title} = event.target
        if (type === "checkbox") {
            if(title==="תשוקות גנריות"){
                this.setState( prevState => {
                    const updatedArray = prevState.passions.map(item => {
                        if(item.id.toString() === name) {
                            return {
                                ...item,
                                checked: checked
                            }
                        }
                        return item
                    })
                    return {passions: updatedArray}
                })
            }
            else{//title==="עוצמות- משאבים טבעיים"
                this.setState( prevState => {
                    const updatedArray = prevState.strengths.map(item => {
                        if(item.id.toString() === name) {
                            return {
                                ...item,
                                checked: checked
                            }
                        }
                        return item
                    })
                    return {strengths: updatedArray}
                })    
            }
        }
        else if(this.state.goodFlow===1) {
            this.setState({storyBody1: value})
        }
        else {//this.state.goodFlow===2
            this.setState({storyBody2: value})
        }
    }

    render(){
        const id = this.state.title 
        let strengthsBGColor, passionsBGColor
        id==="תשוקות גנריות" ? passionsBGColor=FireBack : passionsBGColor=""
        id==="עוצמות- משאבים טבעיים" ? strengthsBGColor=HeartBack : strengthsBGColor=""
        let workListShow
        if(this.state.title===""){
            workListShow = <div></div>
        }
        else if(this.state.title==="עוצמות- משאבים טבעיים"){
            workListShow = <WorkList handleChange={this.handleChange} title={this.state.title} works={this.state.strengths} /> 
        }
        else{//passions
            workListShow = <WorkList handleChange={this.handleChange} title={this.state.title} works={this.state.passions} />
        }
        //page change:
        let backButton, content, next
        if(this.state.goodFlow===1){
            backButton = <div className="backButtonText" name="main" onClick={this.props.onClickHandler}><img className="backButton" src={Back} alt="חזור" name="main" onClick={this.props.onClickHandler} />חזרה</div>
            content = <div>
                        <VimeoPlayer source="https://youtu.be/YLc9i7DVGVg"/>
                        <TextStory handleChange={this.handleChange} storyNum={11} storyBody={this.state.storyBody1} />
                    </div>
            next = <div className="nextText emptyNextText" onClick={()=>{this.setState({goodFlow:2})}}>הצעד הבא שלי</div>
        }
        else if(this.state.goodFlow===2){
            backButton = <div className="backButtonText" onClick={()=>{this.setState({goodFlow:1})}}><img className="backButton" src={Back} alt="חזור" onClick={()=>{this.setState({goodFlow:1})}} align="left"/>חזרה</div>
            content = <div>
                        <VimeoPlayer source="https://youtu.be/QrD8H8Xm2bU"/>
                        <TextStory handleChange={this.handleChange} storyNum={12} storyBody={this.state.storyBody2} />
                        <div className="storyTitle2">כלים שעומדים לרשותי</div>
                        <div className="headerButtons">
                            <img className="bigRoundButton" id="עוצמות- משאבים טבעיים" src={Heart} alt="Heart" style={{backgroundImage:`url(${strengthsBGColor})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}} onClick={this.showWork} />
                            <img className="bigRoundButton" id="תשוקות גנריות" src={Fire} alt="Fire" style={{backgroundImage:`url(${passionsBGColor})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}} onClick={this.showWork} />
                        </div>        
                    </div>
            next = <div className="nextText" name="main" onClick={this.onClickEndHandler}>סיימתי</div>
        }

        return (
            <div className="good">
                {backButton}
                {content}
                {workListShow}
                {next}
            </div>
        );
    }
}