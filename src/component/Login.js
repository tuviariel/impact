import React, { Component } from "react"
import logo from '../content/assets/impact-front-page.png';
import base from '../base'
import firebase from 'firebase'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            alertShow:"",
            loginInfo: []
        }
        this.loginHandler=this.loginHandler.bind(this)
        this.inputHandler=this.inputHandler.bind(this)
    }

    componentDidMount(){
        const rootRef = firebase.database().ref().child("greet")
        rootRef.on('value', snap => {
            this.setState({
                loginInfo: snap.val()
            })
        })
    }

    inputHandler(event){
        // console.log(this.state.loginInfo)
        const {name, value} = event.target
        this.props.setMainState(name, value)
    }

    loginHandler(event){
        event.preventDefault()
        let userIndex = this.state.loginInfo.findIndex(user => (user.email === this.props.email))
        if (userIndex === -1){
            this.setState({alertShow:"אין מייל כזה במאגר המשתמשים.."})
        }
        else{
            var userfDB = this.state.loginInfo[userIndex]
            if (userfDB.password === this.props.password){
                const id="id", loggedIn="loggedIn", t="true", n="name", f="first"
                this.props.setMainState(id, userfDB.id)
                this.props.setMainState(loggedIn, t)
                this.props.setMainState(n, userfDB.name)
                this.props.setMainState(f, userfDB.first)
            }
            else{
                this.setState({alertShow:"המייל או הסיסמא אינם נכונים.."})
            }
        }
    }

    render(){
        return(
            <div className="App-login" /*style={{display: this.state.loggedIn && "none"}}*/>
                <img src={logo} className="App-logo" alt="Impact by Mati" />
                <form>
                    <input className="loginInput"
                        type="email" 
                        name="email"
                        value={this.props.email}
                        placeholder="שם משתמש/מייל"
                        onChange={this.inputHandler}
                    /> <br />
                    <input className="loginInput"
                        type="password"
                        name="password"
                        value={this.props.password}
                        placeholder="סיסמא"
                        onChange={this.inputHandler}
                    /> <br />
                    <h4 id="alertShow">{this.state.alertShow}</h4>
                    <button className="loginButton" onClick={this.loginHandler}>Log in</button>
                </form>
            </div>
        )
    }
}
export default Login