import React from 'react';
import Human from '../content/assets/human-small.png'
import HumanBack from '../content/assets/human-hover.svg'

export default function FooterButtons(props) {
    let id = props.editTitle, backgroundColor3
    id==="noEdit" ? backgroundColor3=HumanBack : backgroundColor3=""

    return (
        <div className="footerButtons">
            <img src={Human} alt="Human" style={{backgroundImage:`url(${backgroundColor3})`, backgroundRepeat: `no-repeat`}} onClick={props.toEdit} id="noEdit" className="footerButton"/>
        </div>
    );
}

