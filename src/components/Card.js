import PropTypes from 'prop-types';
import { useState } from 'react';

const Card = (props) =>{
    // const [counter, setCounter] = useState(0)

    // const decrementar = () => {
    //     setCounter(counter - 1)
    // }

    // const incrementar = () => {
    //     setCounter(counter + 1) 
    // }
  
    // // console.log(counter)

    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>{props.count}</p>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
          </div>
    )
}

export default Card