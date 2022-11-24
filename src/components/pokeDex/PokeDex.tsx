import React,{Component} from "react";
import './PokeDex.css';
import PokeCard from "../pokeCard/PokeCard";
import IPokeCard from "../pokeCard/IPokeCard";


export default class PokeDex extends Component<any,any>{
    render(){

    let cards: IPokeCard[] = this.props.cards;
    let title
    if (this.props.isWinner) {
        title = <h2 className={"PokeDex-winner PokeDex-heading"}>Winning Hand</h2>
    }else {
        title = <h2 className={"PokeDex-loser PokeDex-heading"}>Losing Hand</h2>
    }
        return (

            <div className={this.props.isWinner ? 'Winner PokeDex' : 'Loser PokeDex'}>
                {title}<p><strong>Total Points: </strong>{this.props.exp}</p>
                <div className="PokeDex-cards PokeDex__flex-item-left">
                    {cards.map((card:IPokeCard)=> <PokeCard key={card.id} {...card}/>)}
                </div>
            </div>
        )
    }

}