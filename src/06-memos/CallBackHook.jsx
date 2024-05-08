import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {
    const [counter, setCounter] = useState(10);
    const incrementar = useCallback(
        (value) => { setCounter((c) => c + value) }, [],
    )


    return (
        <>
            <h1>Use Callback Hook: {counter}</h1>
            <ShowIncrement increment={incrementar}></ShowIncrement>
            <hr></hr>
        </>
    )
}

export default CallBackHook
