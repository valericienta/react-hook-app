import { useState } from "react";
import CounterWithCustomHook from "./CounterWithCustomHook";




const CounterApp = () => {

    return (
        <>
            <CounterWithCustomHook initialValue={25} key="1"/>
            <CounterWithCustomHook initialValue={50} key="2"/>
        </>
    )
}

export default CounterApp
