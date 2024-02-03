import { useState } from 'react'

const Counter = ({onCountChange}) => {

    const [count, setCount] = useState(0);

    const actCount = (value) => {
        setCount(value);
        onCountChange(value);
    }

    return (
        <div className="container-button">
            <h1>{count}</h1>
            <button onClick={() => actCount(count - 1)}>-</button>
            <button onClick={() => actCount(0)}>Reset</button>
            <button onClick={() => actCount(count + 1)}>+</button>
        </div>
    );
}


export default Counter;