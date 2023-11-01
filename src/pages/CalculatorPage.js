import { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const CalculatorPage = () =>{
    const [data, setData] = useState({
        criancas: 0,
        homens: 0,
        mulheres: 0,
        total: 0,
        showTotal: false,
    })

    return(
        <>
            <Header />
            <Outlet context={[data, setData]}/>
        </>
    )
}


export default CalculatorPage