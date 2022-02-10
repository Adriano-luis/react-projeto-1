import { useContext } from "react";
import { incrementCounter, decrementCounter } from "../../../Contexts/CounterProvider/actions"; 
import { CounterContext } from '../../../Contexts/CounterProvider/context';
export  const Button = () => {
    const Context = useContext(CounterContext);
    const {counterState, counterDispatch  } = Context;
    
    return (
        <div>
            <h1>{counterState.counter}</h1>
            <button onClick={() => incrementCounter(counterDispatch)}>+</button>
            <button onClick={() => decrementCounter(counterDispatch)}>-</button>
        </div>
    );
}