import React, { Component } from 'react'
import PokeCard from './PokeCard';
import './Pokedex.css'
import Pokegame from './Pokegame';


class Pokedex extends Component {
    render() {
        console.log(this.props.isWinner);
        return (
            <div className="Pokedex">
                <h1>
                    Pokedex
                </h1>
                <p>Total experience : {this.props.exp}</p>
                <p>{this.props.isWinner ? "winner" : "loser"}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => {
                        return <PokeCard key={p.name} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    })}
                </div>
            </div>
        );
    }
}

export default Pokedex