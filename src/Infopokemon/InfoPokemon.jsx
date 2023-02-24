import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { GiPokecog, MdCatchingPokemon } from 'react-icons/all'

import styles from './Detail.module.css'

export const InfoPokemon = () => {

    const { id } = useParams()
    const [pokemon, setPokemon] = useState()
    // JE CREE UN STATE POUR STOCKER LE LOCAL STORAGE EN JSON
    const [team, setTeam] = useState(JSON.parse(localStorage.getItem('teamRocket')))

    // JE CREE UN USEEFFECT JUSTE POUR METTRE A JOURS LE LOCAL STORAGE LORSQUE TEAM EST MODIFIE
    useEffect(() => {
        // JE MET A JOURS LE LOCAL STORAGE EN STRINGIFIANT MON TABLEAU
        localStorage.setItem('teamRocket', JSON.stringify(team))
    }, [team])

    // JE CREE UN USEEFFECT POUR RECUPERER LE POKEMON CORRESPONDANT A L'ID DE L'URL
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPokemon(data)
            })
            .catch(err => console.error(err))
    }, [])

    // J'AJOUTE AU STATE TEAM LE POKEMON SELECTIONNE
    const grab = () => {
        setTeam(current => [...current, pokemon.id])
    }

    // J'ENLEVE AU STATE TEAM LE POKEMON SELECTIONNE
    const release = () => {
        // current est la copy de la valeur actuelle dans team
        setTeam(current => current.filter(id => id !== pokemon.id))
    }

    return (
        <>
            <Link to={'/'}>Back</Link>
            <div className={styles.banner}>
                <h1>#{id} - {pokemon?.name}</h1>
                <p>{JSON.stringify(team)}</p>
                {/* SI ? ALORS : SINON */}
                {team.includes(Number(id)) ?
                    <GiPokecog size={32} color={'#F00'} onClick={release} />
                    :
                    <MdCatchingPokemon size={32} color={'#F00'} onClick={grab} />
                }
            </div>
            <img src={pokemon?.sprites.front_default} />
            <img src={pokemon?.sprites.back_default} />
            {pokemon?.types.map((type, index) => <p key={index}>{type.type.name}</p>)}
        </>
    )
}