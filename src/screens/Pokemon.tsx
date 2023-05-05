import { useState } from "react";
import pokemonBackground from "../assets/pokemon.jpg";

const  POKEMONS =[
"bulbasaur", 
"ivysaur",
"venusaur",
"charmander",
"charmeleon",
"squirtle",
"wartortle",
"blastoise",
"caterpie",
"metapod",
"butterfree",
"weedle",
"kakuna",
"beedrill",
"pidgey",
"pidgeotto",
"pidgeot",
"rattata",
"raticate",
"spearow",
"fearow",
"ekans",
"arbok",
"pikachu",
"raichu",
"sandshrew",
"sandslash",
];
const MATCH = Math.floor(Math.random() * POKEMONS.length) ;

type Form = HTMLFormElement & {
    pokemon: HTMLInputElement;
}


export default function Pokemon() {
    const [hasWon, ToggleWon] = useState(false);
  
    function handleSubmit(event: React.FormEvent<Form>) {
      event.preventDefault();
      const { pokemon } = event.currentTarget;
      if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
        ToggleWon(true);
        alert("You won!");
      }
    }
  
    return (
      <div
        style={{
          backgroundImage: `url(${pokemonBackground})`,
          backgroundSize: 'cover',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          height={512}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${MATCH + 1}.png`}
          style={{ imageRendering: 'pixelated', filter: hasWon ? '' : 'brightness(0) invert(1)' }}
          width={512}
        />
        {hasWon ? (
          <button style={{ width: '100%' }} onClick={() => location.reload()}>
            Play again
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" name="pokemon" />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }