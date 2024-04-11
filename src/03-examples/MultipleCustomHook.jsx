import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage'
import PokemonCard from './PokemonCard';

const MultipleCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, hasErrors, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return <>
        <h1>Información de Pokemon</h1>
        <hr />
        {isLoading ? <LoadingMessage /> :
            <PokemonCard
                id={data.id}
                name={data.name}
                sprites={[
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny]}
            />
        }
     
        <button className='btn btn-primary mt-2' onClick={() => counter > 1 ? decrement(1) : null}>Anterior</button>
        <button className='btn btn-primary mt-2' onClick={() => increment(1)}>Siguiente</button>
    </>
}

export default MultipleCustomHook
