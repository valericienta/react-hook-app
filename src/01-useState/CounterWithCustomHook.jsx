import { useCounter } from "../hooks/useCounter";


const CounterWithCustomHook = ({initialValue}) => {

    const { counter, increment, decrement, reset } = useCounter(initialValue)
    return (
        <>
            <h1>Counter con Hook : {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>increment(5)} >+1</button>
            <button className="btn btn-primary" onClick={reset} >Reset</button>
            <button className="btn btn-primary" onClick={()=>decrement(5)}  >-1</button>
        </>
    )
}

export default CounterWithCustomHook
