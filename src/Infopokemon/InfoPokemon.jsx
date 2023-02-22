import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export const InfoPokemon = () => {

    const { id } = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPokemon(data)
            })
            .catch(err => console.error(err))
    }, [])

    const handleClick = () => {
        const team = localStorage.getItem('teamRocket')
        console.log(team)
        // CONVERTI MON STRING [1, 2, 3] EN VRAI TABLEAU JAVASCRIPT
        const teamjson = JSON.parse(team)
        console.log(teamjson);
        teamjson.push(pokemon.id)
        localStorage.setItem('teamRocket', JSON.stringify(teamjson))
        // localStorage.setItem('teamRocket', JSON.stringify([...teamjson, pokemon.id]))
    }

    return (
        <>
            <Link to={'/'}>Back</Link>
            <h1>#{id} - {pokemon?.name}</h1>
            <button onClick={handleClick}>+</button>
            <img src={pokemon?.sprites.front_default} />
            <img src={pokemon?.sprites.back_default} />
            {pokemon?.types.map((type, index) => <p key={index}>{type.type.name}</p>)}
        </>
    )
}