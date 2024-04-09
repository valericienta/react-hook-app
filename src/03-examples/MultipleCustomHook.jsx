import React from 'react'
import { useFetch } from '../hooks'


const MultipleCustomHook = () => {

    const { data, hasErrors, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/1');

    return <>
        <h1>Información de Pokemon</h1>
        <hr />
        {isLoading && <h2> Cargando...</h2>}
        
        <h2>{data?.name}</h2>
    </>
}

export default MultipleCustomHook
