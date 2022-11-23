import React from "react";
import './PokeCard.css';
import IPokeCard from "./IPokeCard";

const POKEMON_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

export default class PokeCard extends React.Component<IPokeCard>{
    static defaultProps=  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62}
    render(){
        const card = this.props;
        const imgUrl = this.sliceToThree(card.id);
        return (
                 <div className={"PokeCard"}>
                     <h2 className={"PokeCard-title"}>{card.name}</h2>
                     <div className={"PokeCard-img-container"}>
                        <img className={"PokeCard-img"} src={imgUrl} alt={card.name}/>

                     </div>
                     <p className={"PokeCard-sub-heading"} >Type: {card.type}</p>
                     <p className={"PokeCard-content"}>Exp <strong>{card.base_experience}</strong></p>
                 </div>
            )
    }
    sliceToThree(number:number):string{
        let num =  (number <= 999) ? `${"00"}${number}`.slice(-3) : number.toString();
        return `${POKEMON_API}${num}.png`;

    }
    setUrl(id:number):string{
        let zeros = ''
        zeros = (id > 99 )? zeros : '0';
        zeros = (id > 9 )? zeros : '00';

        return `${POKEMON_API}${zeros}${id}.png`;
    }

}


