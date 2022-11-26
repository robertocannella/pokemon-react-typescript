import React, {Component} from "react";
import RollDice from "../rollDice/RoleDice";
import PokeGame from "../pokeGame/PokeGame";
import LotteryGame from "../lotteryGame/LotteryGame";
import CoinFlip from "../coinFlip/CoinFlip";
import ColorBoxes from "../colorBoxes/ColorBoxes";
import Hangman from "../hangman/Hangman";
import Board from "../lightsOut/Board";


export default class MainPage extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            numClicks: 0
        }

    }
    render() {
        return (
            <div>
               <h1>Welcome to my React Playground</h1>

                <Board/>
                <hr/>
                <Hangman/>
                <hr />
                <ColorBoxes/>
                <hr/>
                <CoinFlip />
                <hr/>
                <LotteryGame maxNum={60} maxLottoBalls={6} title={'Lotto'}/>
                <hr/>
                <RollDice />
                <hr/>
                <PokeGame />
            </div>
        );
    }
}