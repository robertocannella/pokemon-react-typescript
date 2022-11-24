import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Die.css';

export default class Die extends Component<any, any> {
    render() {
    return (
        <span className={'Die'} >
            <FontAwesomeIcon className={`Die__icon ${this.props.rolling? 'Die__rolling': ''}`} icon={this.props.currentNum} size="6x"  />
        </span>
    );
    }
}