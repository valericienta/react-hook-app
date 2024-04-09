import React, { useEffect } from 'react'
import { useState } from "react"
import Message from './Message';




const SimpleForm = () => {
    const [formState, setFormState] = useState({
        userName: 'strider',
        email: 'valericienta@gmail.com'
    });


    const { userName, email } = formState;


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }


    useEffect(() => {
        // console.log('el useeffect se llamo')
    }, [])
    useEffect(() => {
        // console.log('formState Change')
    }, [formState])
    useEffect(() => {
        // console.log('cambio el correo')
    }, [formState.email])


    return (
        <>
            <h1>Formulario Simple</h1>
            <input
                value={userName}
                onChange={(event) => onInputChange(event)} type="email"
                className="form-control mt-2"
                placeholder="valeria.gigena@outlook.com"
                name="userName" />
            <input
                value={email}
                onChange={(event) => onInputChange(event)} type="email"
                className="form-control mt-2"
                placeholder="valeria.gigena@outlook.com"
                name="email" />

          

            { (userName=='strider2') && <Message/>}
        </>
    )
}

export default SimpleForm
