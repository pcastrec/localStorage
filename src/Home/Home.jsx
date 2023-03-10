import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Pokemon } from "../Pokemon"

// import './Home.css' // GLOBAL
import styles from './Home.module.css' // ISOLER

export const Home = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        // SI L'ITEM TEAMROCKET N'EXISTE PAS DANS MON LOCALSTORAGE
        if (!localStorage.getItem('teamRocket')) {
            // ALORS JE CREE LA CLE TEAMROCKET ET SA VALEUR EST UN UN TABLEAU VIDE EN STRING
            localStorage.setItem('teamRocket', '[]')
        }
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPokemons(data.results)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <h1>Pokedex</h1>
            <ul className={styles.container}>
                {pokemons.map((pokemon, index) => (
                    <Link key={index} className={styles.card} to={`/about/${index + 1}`} >
                        <Pokemon pokemon={pokemon} index={index + 1} />
                    </Link>
                ))}
            </ul>
        </>
    )
}