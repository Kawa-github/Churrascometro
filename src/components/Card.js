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
          <div className='itensCard'>
            <h1>{props.name}</h1>
            <p>{props.count}</p>
            <button onClick={props.decrement} className='btnCount'>-</button>
            <button onClick={props.increment} className='btnCount'>+</button>
          </div>
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