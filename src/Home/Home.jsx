import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// import './Home.css' // GLOBAL
import styles from './Home.module.css' // ISOLER

export const Home = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        if(!localStorage.getItem('teamRocket')) {
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
                {pokemons.map((pokemon, index) => <Link key={index} className={styles.card} to={`/about/${index + 1}`} >
                    <p style={{ textTransform: "capitalize" }}>{pokemon.name}</p>
                    <img width={'120em'} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`} />
                </Link>)}
            </ul>
        </>
    )
}