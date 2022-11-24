import React, {Component} from "react";
import RollDice from "../rollDice/RoleDice";
import PokeGame from "../pokeGame/PokeGame";


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
                <RollDice />
                <hr/>
                <PokeGame/>
            </div>
        );
    }
}