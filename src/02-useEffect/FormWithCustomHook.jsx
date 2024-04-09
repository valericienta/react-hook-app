import React, { useEffect } from 'react'
import { useState } from "react"
import useForm from '../hooks/useForm'


const FormWithCustomHook = () => {

    const { formState, onInputChange , onResetForm} = useForm({ userName: '', email: '', password: '' })
    const { userName, email, password } = formState;


    useEffect(() => { }, [])
    useEffect(() => { }, [formState])  // console.log('formState Change')
    useEffect(() => { }, [formState.email]) // console.log('cambio el correo')

    return (
        <>
            <h1>FormWithCustomHook</h1>
            <input
                value={userName}
                onChange={(event) => onInputChange(event)} type="email"
                className="form-control mt-2"
                placeholder="Usuario"
                name="userName" />
            <input
                value={email}
                onChange={(event) => onInputChange(event)} type="email"
                className="form-control mt-2"
                placeholder="Correo electrónico"
                name="email" />
            <input
                value={password}
                onChange={(event) => onInputChange(event)} type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password" />

            <button className='btn btn-primary mt-2' onClick={ onResetForm}>Borrar</button>
        </>
    )
}

export default FormWithCustomHook
