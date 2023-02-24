import { useEffect, useState } from "react"
import { Pokemon } from "../Pokemon"

export const Team = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const team = localStorage.getItem('teamRocket')
        const json = JSON.parse(team)
        // JE DONNE UNE CLE A MON ENFANT QUE SI JE SUIS DANS LE RETURN DU HTML
        json.map((id, index) => {
            fetch('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(res => res.json())
                .then(data => setPokemons(current => [...current, data]))
                .catch(err => console.error(err))
        })
        return () => setPokemons([])
    }, [])

    return (
        <div>
            {pokemons.map((pokemon, index) => (
                <Pokemon key={index} pokemon={pokemon} index={pokemon.id} />
            ))}
        </div>
    )
}