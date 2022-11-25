import React, {Component} from 'react';
import Heads from '../../assets/images/Buffalo-Heads.jpeg'
import Tails from '../../assets/images/Buffalo-Tails.jpeg'
import './Coin.css'

class Coin extends Component<{coin:string},any> {
    public static defaultProps = {
        coin: "heads"
    }
    render() {
        const img = this.props.coin === 'Heads' ?
            <img className={"Coin Coin__heads"} src={Heads} alt="Heads"/> :
            <img className={"Coin Coin__tails"} src={Tails} alt="Tails"/>
        return (
            <div className={"Coin-container"}>
                {img}
            </div>
        );
    }
}

export default Coin;