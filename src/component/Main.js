import React, {Component} from 'react';
import MainShow from '../scene/MainShow'
import InfoMap from './InfoMap'
import Good from './Good'
import Bad from './Bad'
import firebase from 'firebase'
import base from '../base'
import title from '../content/assets/title2.png'
import Logo from '../content/assets/logo.png'
import LogoText from '../content/assets/title3.png'

export default class Main extends Component {
        constructor(props){
            super(props)
            this.state = {
                show: "main",
                name: props.name,
                id: props.id,
                first: true,
                userInfo: {},
                message: ""
            }
            this.onClickHandler = this.onClickHandler.bind(this)
            this.firstEntry = this.firstEntry.bind(this)
            this.fromOutOfComponent = this.fromOutOfComponent.bind(this)
        }
        componentDidMount() {
            let root = firebase.database().ref('users/' + this.props.id)
            // console.log("in didMount of Main")
            root.on('value', snap => { snap.val()!==null && this.setState({userInfo: snap.val(), first: false}) })
        }
        conponentDidUpdate() {
            // console.log("in didUpdate of main")
            let root = firebase.database().ref('users/' + this.props.id)
            root.on('value', snap => { snap.val()!==this.state.userInfo && this.setState({userInfo: snap.val()}) })
        }

        firstEntry(){
            firebase.database().ref('users/'+ this.props.id).set({
                userId: this.props.id,
                name: this.props.name,
                strengths: [{id:1, text:"" ,counter:0, checked: false}, {id:2, text:"" ,counter:0, checked: false}, {id:3, text:"" ,counter:0, checked: false}],
                passions: [{id:1, text:"" ,counter:0, checked: false}, {id:2, text:"" ,counter:0, checked: false}, {id:3, text:"" ,counter:0, checked: false}],
                feelings: [{id:1, text:"" ,counter:0, checked: false}, {id:2, text:"" ,counter:0, checked: false}, {id:3, text:"" ,counter:0, checked: false}],
                beliefs: [{id:1, text:"" ,counter:0, checked: false}, {id:2, text:"" ,counter:0, checked: false}, {id:3, text:"" ,counter:0, checked: false}],
                history: [{text:"nothing here yet"}],
            })
            this.setState({first: false})
        }

        fromOutOfComponent(event){
            let name = event.target.name
            this.setState({show: name})
        }

        onClickHandler(area){//clicking in imageMapper
            // console.log(area)
            let name = area.name
            if(!this.state.first) {
                if(name==="good") {
                    // console.log(this.state)
                    let rootP, rootS, goodDissabled=true
                    rootP = this.state.userInfo.passions.every(item => {return item.text===""})
                    rootS = this.state.userInfo.strengths.every(item => {return item.text===""})
                    rootP || rootS ? goodDissabled=true : goodDissabled=false
                    // console.log(rootS, rootP, goodDissabled)
                    !goodDissabled ? this.setState({show: name}) : this.setState({message: "חובה למלא את החוזקות והתשוקות במפת התודעה לפני תחילת העבודה"})
                }
                else if(name==="bad") {
                    let rootB = this.state.userInfo.beliefs.every(item => {return item.text===""}), badDissabled=true
                    rootB ? badDissabled=true : badDissabled=false
                    !badDissabled ? this.setState({show: name}) : this.setState({message: "חובה למלא את האמונות במפת התודעה לפני תחילת העבודה"})
                }
                else {
                    this.setState({message: "" , show: name})
                }
            }
        }

        render() {
            let show = this.state.show, choise, logo
                        
            if(show === "map"){
                choise = <div>
                            <InfoMap onClickHandler={this.fromOutOfComponent}
                                    id={this.props.id}/>
                        </div>
            }
            else if(show === "bad"){
                choise = <div>
                            <Bad onClickHandler={this.fromOutOfComponent}
                                    id={this.props.id}/>
                        </div>
            }
            else if(show === "good"){
                choise = <div>
                            <Good onClickHandler={this.fromOutOfComponent}
                                    id={this.props.id}/>
                        </div>
            }
            else {
                choise = <MainShow show={this.state.show}
                            onClickHandler={this.onClickHandler} 
                            name={this.state.name} 
                            first={this.state.first}
                            firstEntry={this.firstEntry}
                            message={this.state.message} />
            }
            if(this.state.first) {
                logo = <div className="first-logo">
                            <img src={Logo} className="firstApp-logo" alt=""/>
                            <img src={LogoText} className="App-logo" alt=""/>
                        </div>
            }
            else {
                logo = <img src={title} className="App-logo" alt=""/>
            }
            return (<div className="mainComponent">
                        {logo}
                        {choise}
                    </div>  
            );
        }
    }