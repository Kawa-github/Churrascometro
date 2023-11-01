import { Link, useOutletContext } from "react-router-dom";

const ResultPage = () => {
  const [data] = useOutletContext();

  return (
    <>
      <div className='total'>
        <h2>Total</h2>
        <p>Carne (kg): {data.total.carne}</p>
        <p>Pão de Alho: {data.total.paoDeAlho}</p>
        <p>Carvão (kg): {data.total.carvao}</p>
        <p>Sal (kg): {data.total.sal}</p>
        <p>Gelo (kg): {data.total.gelo}</p>
        <p>Refrigerante (garrafas de 2L): {data.total.refrigerante}</p>
        <p>Água (garrafas de 1L): {data.total.agua}</p>
      </div>
      <Link to="/">
        <button>
            Voltar
        </button>
      </Link>
    </>
  );
}

export default ResultPage;
