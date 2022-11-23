import React, {Component} from "react";
import IPokeCard from "../pokeCard/IPokeCard";
import PokeDex from "../pokeDex/PokeDex";


let cards:IPokeCard[] = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]

export default class PokeGame extends  Component<any, any>{


    render() {
        let hand1 = [];
        let hand2 = [...cards];

        while (hand1.length < hand2.length){
            let randInx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randInx,1)[0];
            hand1.push(randPokemon);
        }
        let exp1 = hand1.reduce((exp:number,pokemon:IPokeCard)=> exp + pokemon.base_experience,0 )
        let exp2 = hand2.reduce((exp:number,pokemon:IPokeCard)=> exp +pokemon.base_experience,0 )

        return (
            <div>
                <h2> Pokemon Game </h2>
                <PokeDex isWinner={exp1 > exp2} exp={exp1} cards={hand1}/>
                <PokeDex isWinner={exp2 > exp1} exp={exp2} cards={hand2}/>
            </div>
        );
    }
}