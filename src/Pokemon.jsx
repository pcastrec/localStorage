export const Pokemon = ({ index, pokemon }) => {
    return (
        <>
            <p style={{ textTransform: "capitalize" }}>{pokemon.name}</p>
            <img width={'120em'} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`} />
        </>
    )
}