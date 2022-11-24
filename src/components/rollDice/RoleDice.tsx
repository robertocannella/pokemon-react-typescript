import React, {Component} from "react";
import Die from "../die/Die";
import {faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo} from "@fortawesome/free-solid-svg-icons";
import './RoleDice.css'
import {Chart as ChartJS, registerables} from 'chart.js';
import {Bar} from "react-chartjs-2";
import {cu} from "chart.js/dist/chunks/helpers.core";
import {cursorTo} from "readline";

export default class RoleDice extends Component<any, any> {
    private chartReference = React.createRef<any>()
    public data = [0,0,0,0,0,0,0,0,0,0,0]
    private die =  [
        faDiceOne,
        faDiceTwo,
        faDiceThree,
        faDiceFour,
        faDiceFive,
        faDiceSix
    ]
    constructor(props: any) {
        super(props);


        this.state = {
            isRolling: false,
            dieOne: this.die[0],
            dieTwo: this.die[0],
            data: {
                responsive:true,
                maintainAspectRatio: false,
                labels: ['2','3','4','5','6','7','8','9','10','11','12'],
                datasets: [{
                    label: 'Rolls',
                    data: this.data
                }]
            }
        }
        ChartJS.register(...registerables)
        this.rollOneHundred = this.rollOneHundred.bind(this)
    }

    render() {

        return (

            <div className={"RoleDice"}>
                <h2>Dice Roll</h2>
                <div className={"RoleDice__dice-container"}>
                    <Die className={"RoleDice__die"} rolling={this.state.isRolling} currentNum={this.state.dieOne}/>
                    <Die className={"RoleDice__die"} rolling={this.state.isRolling} currentNum={this.state.dieTwo}/>
                </div>
                <div className={"RoleDice__button-container"}>
                    <button disabled={this.state.isRolling} className={"RoleDice__button RoleDice__button-reset"} onClick={this.handleReset}>Reset</button>
                    <button disabled={this.state.isRolling} className={"RoleDice__button"} onClick={()=>this.handleClick(true)}>{this.state.isRolling? 'Rolling': 'Roll Dice'}</button>
                    <button disabled={this.state.isRolling} className={"RoleDice__button RoleDice__button-loop"} onClick={this.rollOneHundred}>Roll 100</button>
                </div>
                <div className={"RoleDice__chart-container"}>
                    <div></div>
                    <div>
                        <Bar className={"RoleDice__chart"} key={"bar"} ref={this.chartReference} data={this.state.data}/>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }

    handleState= ()=>{

        const indexOne = Object.values(this.die).indexOf(this.state.dieOne) ;
        const indexTwo = Object.values(this.die).indexOf(this.state.dieTwo) ;
        const sumOfTwoDice = indexOne + indexTwo + 2



        let data = this.state.data.datasets[0].data
        data[sumOfTwoDice-2]++;

        this.setState(
            {
                data: {
                    responsive: true,
                    maintainAspectRatio: false,
                    labels: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    datasets: [{
                        label: 'Rolls',
                        data: data
                    }]
                }
            }
        );
    }
    handleClick =(isRolling:boolean) => {
        this.setState(
            {
                dieOne: this.die[Math.floor(Math.random() * 6)],
                dieTwo: this.die[Math.floor(Math.random() * 6)],
                isRolling: isRolling
            });

       this.handleState();
       setTimeout(()=>{
           this.setState({isRolling: false})
       }, 1000)

    }
    handleReset = () => {
        this.setState({dieOne: this.die[0], dieTwo: this.die[0] })
        this.setState((currentState:any)=>{
            return {
                ...currentState,
                data: {
                    ...currentState.data,
                    datasets: [{
                        label: currentState.data.datasets[0].label,
                        data: new Array(11).fill(0)
                    }]
                }
            }
        })
    }

    async rollOneHundred(){

        for (let i = 0; i < 100; i++) {
            await this.timeout(2)
                this.handleClick(false);
         }
    }
    timeout = (ms:number)=>{
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}