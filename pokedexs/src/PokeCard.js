import React, { Component } from 'react'
import './PokeCard.css'
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class PokeCard extends Component {
    render(){
        let imgSrc = `${POKE_API}${this.props.id <= 999 ? `00${this.props.id}`.slice(-3): this.props.id}.png`
        return (
            <div className="PokeCard">
                <div>
                    <h1 className="Pokecard-title">
                        {this.props.name}
                    </h1>
                    <img alt = {this.props.name} src={imgSrc}></img>
                    <div className="Pokecard-data">
                        Type: {this.props.type}
                    </div>
                    <div className="Pokecard-data">
                        Exp: {this.props.exp}
                    </div>
                </div>
            </div>
        )
    }
}

export default PokeCard;