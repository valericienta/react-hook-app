import React, { useState } from 'react'
import useForm from '../hooks/useForm';

const TodoAdd = (props) => {
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(description.lenght<1) return;
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        props.onNewTodo(newTodo);
        onResetForm();
    }

    const { description, onInputChange, onResetForm} = useForm  ({
        description: ''
    });

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder='Que hay que hacer?'
                    value={description}
                    name='description'
                    onChange={onInputChange} className='form-control' />
                <button type='submit' className='btn btn-outline-primary mt-2' >Agregar</button>
            </form>
        </>
    )
}

export default TodoAdd
