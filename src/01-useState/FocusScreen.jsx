import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef();
    const onClickbtnFocus = () => {
        inputRef.current.select();
    }
    return (
        <>
            <h1>Focus Screen </h1>
            <hr />
            <input
                ref={inputRef}
                type='text'
                placeholder='Ingrese su nombre'
                className='form-control'></input>
            <button className='btn btn-primary mt-2' onClick={onClickbtnFocus} >Set Focus</button>
        </>
    )
}

export default FocusScreen
