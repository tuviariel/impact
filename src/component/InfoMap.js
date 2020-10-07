import React, {Component} from 'react';
import HeaderButtons from '../scene/HeaderButtons'
import FooterButtons from '../scene/FooterButtons'
import EditingList from '../scene/EditingList'
import ShowList from '../scene/ShowList'
import Base from '../base'
import firebase from 'firebase'
import Back from '../content/assets/left-arrow.png'

export default class InfoMap extends Component {
    constructor(props){
        super(props)
        this.state={
            strengths: [],
            feelings: [],
            beliefs: [],
            passions: [],
            editArray: [],
            editTitle: "noEdit",
            
        }
        this.toEdit = this.toEdit.bind(this)
        this.toAddItem = this.toAddItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const rootRef = firebase.database().ref().child("users")
        const idRef = rootRef.child(this.props.id)
        idRef.on('value', snap => {
            this.setState({
                strengths: snap.val().strengths,
                passions: snap.val().passions,
                beliefs: snap.val().beliefs,
                feelings: snap.val().feelings,
            })
        })
    }
    handleClick(event){
        this.props.onClickHandler(event)
    }

    componentWillUnmount() {
        let title = this.state.editTitle, array = this.state.editArray, strengths = this.state.strengths, passions = this.state.passions, feelings = this.state.feelings, beliefs = this.state.beliefs
        if(title !== "noEdit"){//saveing shown array back to diffined state array
            if(title === "עוצמות- משאבים טבעיים"){
                strengths= array
            }
            if(title === "תשוקות גנריות"){
                passions= array
            }
            if(title === "פחדים"){
                feelings= array
            }
            if(title === "התניה פעילה- אמונות ומחשבות ריאקטיביות"){
                beliefs= array
            }
        }    
        firebase.database().ref('users/'+ this.props.id).update({
            strengths: strengths,
            passions: passions,
            feelings: feelings,
            beliefs: beliefs
        })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState(prevState => {
            const updatedArray = prevState.editArray.map(item=> {
                if (item.id.toString() === name) {
                    return {
                        ...item,
                        text: value
                    }
                }
                return item
            })
            return {editArray: updatedArray}
        })
    }
    
    toAddItem(){//adding another Item to Array
        const len = this.state.editArray.length
        const item = {id: len+1, text: "", counter: 0, checked: false}
        // console.log(item)
        this.setState(prevstate => {
            prevstate.editArray.push(item)
            // console.log(prevstate.editArray)
            return {editArray: prevstate.editArray}
        })
    }

    toEdit(event) {
        const id = event.target.id //"id" of button that was pressed 
        const editTitle = this.state.editTitle
        if (editTitle !== "noEdit"){ //if editArray showen
            if(editTitle === "עוצמות- משאבים טבעיים"){//return editArray to real array name
                this.setState({strengths: this.state.editArray})
            }
            if(editTitle === "תשוקות גנריות"){
                this.setState({passions: this.state.editArray})
            }
            if(editTitle === "התניה פעילה- אמונות ומחשבות ריאקטיביות"){
                this.setState({beliefs: this.state.editArray})
            }
            if(editTitle === "פחדים"){
                this.setState({feelings: this.state.editArray})
            }
        }
        if(editTitle === id){//close editing show if requested
            this.setState({editTitle: "noEdit", editArray: []})
        }
        else{//change editTitle to new name pressed and editArray to relevent Array (to start editing)
            this.setState({editTitle: id})
            if(id === "עוצמות- משאבים טבעיים"){
                this.setState({editArray: this.state.strengths})
            }
            if(id === "תשוקות גנריות"){
                this.setState({editArray: this.state.passions})
            }
            if(id === "התניה פעילה- אמונות ומחשבות ריאקטיביות"){
                this.setState({editArray: this.state.beliefs})
            }
            if(id === "פחדים"){
                this.setState({editArray: this.state.feelings})
            }
        }
    }
    render() {
        let EditingListShow
        if (this.state.editTitle==="noEdit"){
            EditingListShow= <div></div>
        }
        else {
            EditingListShow= <EditingList
                                toEdit={this.toEdit}
                                editArray={this.state.editArray}
                                title={this.state.editTitle}
                                handleChange={this.handleChange}
                                toAddItem={this.toAddItem}/>
        }

        return (
            <div>
                <div className="backButtonText" name="main" onClick={this.handleClick}><img className="backButton" src={Back} alt="שמירה וחזרה" name="main" onClick={this.handleClick} />שמירה וחזרה</div>
                <HeaderButtons toEdit={this.toEdit}
                                editTitle={this.state.editTitle}/>
                {EditingListShow}
                <ShowList toEdit={this.toEdit}
                            title={this.state.editTitle}
                            passions={this.state.passions}
                            strengths={this.state.strengths}
                            feelings={this.state.feelings}
                            beliefs={this.state.beliefs}/>
                <FooterButtons toEdit={this.toEdit}
                                editTitle={this.state.editTitle}/>
            </div>
        );
    }
}
