import React, {Component, ComponentState} from 'react';
import { Bar } from 'react-chartjs-2';
import Coin from "../coin/Coin";
import {Chart as ChartJS, registerables} from 'chart.js';

interface CoinFlipState {
    currentFace: string,
    totalFlips: number,
    totalHeads: number
}
interface ConfFlipProps {

}


class CoinFlip extends Component<ConfFlipProps,CoinFlipState> {
    private chartReference = React.createRef<any>()


    constructor(props:{}) {
        super(props);
        this.state = {
            currentFace: "Heads",
            totalFlips: 0,
            totalHeads: 0
        }
        ChartJS.register(...registerables)
    }
    render() {
        const chartConfig2 = {
            type: 'bar',
            datasets: [],
            data: [this.state.totalHeads],
            options: {
                indexAxis: 'y',
                // Elements options apply to all of the options unless overridden in a dataset
                // In this case, we are setting the border of each horizontal bar to be 2px wide
                elements: {
                    bar: {
                        borderWidth: 2,
                    }
                },

                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Horizontal Bar Chart'
                    }
                }
            },
        };
        const totalTails = this.state.totalFlips - this.state.totalHeads;
        const chartConfig = {
            options: {},
            labels: [`Flips: ${this.state.totalFlips}`],

            datasets: [
                {
                    axis: 'x',
                    label: `Tails: ${totalTails}`,
                    data: [totalTails],
                    fill: false,
                    backgroundColor: [

                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(255, 99, 132)',

                    ],
                        borderWidth: 1
                },
                {
                axis: 'x',
                label: `Heads: ${this.state.totalHeads}`,
                data: [this.state.totalHeads],
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    ],
                borderWidth: 1
                }
            ]
        };
        const deg = Math.floor(Math.random()*360+1);
        return (
            <div>
                <h1>Coin Flip</h1>
                <div className={"Coin-container"}
                     style={{
                         transform: `rotate(${deg}deg)`,
                }}>
                    <Coin coin={this.state.currentFace} />
                </div>
                <button className={"Main-Button"} onClick={this.handleClick}>Flip</button>
                <p>Out of<strong>{this.state.totalFlips}</strong> total flips, {this.state.totalHeads} were Heads
                and {totalTails} were Tails</p>
                <div className={"Main-Chart-container"}>
                    <div></div>
                    <div>
                        <Bar
                            className={"RoleDice__chart"}
                            key={"bar"}
                            ref={this.chartReference}
                            data={chartConfig}
                            options={{
                                indexAxis: 'y',
                            }}/>
                    </div>
                    <div></div>
                </div>





            </div>
        );
    }
    public handleClick = () => {
        this.flip();
    }
    public flip = () => {
        let rand = Math.floor(Math.random()*2);
        let face = (rand === 0) ? "Heads" : "Tails";
        let incrementHeads = false;
        if (face === "Heads")
            incrementHeads = true;

        let totalFlips = this.state.totalFlips + 1;
        let totalHeads = !incrementHeads ? this.state.totalHeads : this.state.totalHeads + 1
        this.setState((currentState:ComponentState)=> {
            return {...currentState, currentFace: face,totalFlips: totalFlips, totalHeads: totalHeads}
        })
    }
}

export default CoinFlip;