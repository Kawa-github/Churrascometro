import PropTypes from 'prop-types';

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


Card.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired, 
    decrement: PropTypes.func.isRequired, 
  };

export default Card