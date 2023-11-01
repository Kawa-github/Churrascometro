import Card from "../components/Card"
import { Link, useOutletContext } from "react-router-dom"

const HomePage = () => {
    const [data, setData] = useOutletContext()

    const increment = (type) => {
        setData((prevData) => ({
            ...prevData,
            [type]: prevData[type] + 1,
        }))
    }

    const decrement = (type) => {
        if (data[type] > 0) {
            setData((prevData) => ({
                ...prevData,
                [type]: prevData[type] - 1,
            }))
        }
    }

    const calculateTotal = () => {
        const { criancas, homens, mulheres } = data
    
        const carneHomens = 0.4 * homens
        const carneMulher = 0.32 * mulheres
        const carneCriancas = 0.20 * criancas
        const totalCarne = (carneCriancas + carneHomens + carneMulher).toFixed(2)
    
        const paoDeAlhoAdulto = 2 * (homens + mulheres)
        const paoDeAlhoCrianca = 1 * criancas
        const totalPao = paoDeAlhoAdulto + paoDeAlhoCrianca
    
        const carvao = 1 * (homens + mulheres + criancas)
        const totalCarvao = carvao
    
        const sal = 0.04 * (homens + mulheres + criancas)
        const totalSal = sal
    
        const gelo = 5 * (homens + mulheres + criancas) / 10
        const totalGelo = gelo
    
        const refrigerante = 2 * (homens + mulheres + criancas) / 5
        const totalRefri = refrigerante
    
        const agua = 1 * (homens + mulheres + criancas) / 5
        const totalAgua = agua
    
        const total = {
          carne: totalCarne,
          paoDeAlho: totalPao,
          carvao: totalCarvao,
          sal: totalSal,
          gelo: totalGelo,
          refrigerante: totalRefri,
          agua: totalAgua,
        }
    
        setData((prevData) => ({
          ...prevData,
          total: total,
          showTotal: true,
        }))
      }

    return (
        <>
            <div className='cards-participations'>
                <Card name="Homens" count={data.homens} increment={() => increment("homens")} decrement={() => decrement("homens")} />
                <Card name="Mulheres" count={data.mulheres} increment={() => increment("mulheres")} decrement={() => decrement("mulheres")} />
                <Card name="Crianças" count={data.criancas} increment={() => increment("criancas")} decrement={() => decrement("criancas")} />
            </div>
            <div>
                <Link to="/result">
                    <button className='btnCalc' onClick={calculateTotal}>
                        Calcular
                    </button> 
                </Link>
            </div>
        </>
    )
}

export default HomePage
