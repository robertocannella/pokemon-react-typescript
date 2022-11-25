import React, {Component, ComponentState} from 'react';
import LotteryBall from "../lotteryBall/LotteryBall";
import './LotteryGame.css'

type LotteryProps =typeof LotteryGame.defaultProps & {
    title: string,
    maxNum: number,
    maxLottoBalls: number
}

class LotteryGame extends Component <LotteryProps,any> {
    public static defaultProps = {
        title: "Lottery",
        maxNum: 40,
        maxLottoBalls: 6
    }

    constructor(props: LotteryProps) {
        super(props);
        this.state = {nums: Array.from({length: this.props.maxLottoBalls})};

    }

    render() {
        return (
            <section className={"LotteryGame__container Main-Content"}>
                <h1>{this.props.title}</h1>
                <div className={"LotteryGame__balls-container"}>
                    {this.state.nums.map((num: number, index: number) => <LotteryBall key={index} num={num}/>)}
                </div>
                <button className={"Main-Button"} onClick={this.handleClick}>Draw</button>
            </section>
        );
    }

    private handleClick = () => {
        this.generate();
    }

    public generate = () => {

        this.setState((currentState: ComponentState) => {
            return {nums: currentState.nums.map((n:any)=> Math.floor(Math.random()*this.props.maxNum))}
        });
        console.log()
    }
}
export default LotteryGame;