import React, {Component} from "react";
import RollDice from "../rollDice/RoleDice";
import PokeGame from "../pokeGame/PokeGame";
import LotteryGame from "../lotteryGame/LotteryGame";


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
                <hr/>
                <LotteryGame />
                <hr/>
                <LotteryGame maxNum={10} maxLottoBalls={4} title={'Mini Lotto'}/>
                <hr/>
                <RollDice />
                <hr/>
                <PokeGame />
            </div>
        );
    }
}