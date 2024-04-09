import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const onMouseMove = ({ x, y }) => {
        setCoords({ x, y })
    }
    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove); // cuando se monta voy a crear el listeners
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}

export default Message
