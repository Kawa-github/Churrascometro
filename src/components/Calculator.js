// import { Component } from 'react';
// import Card from './Card';

//     class Calculator extends Component{
//         constructor(props){
//         super(props)
        
//         this.state = {
//             criancas: 0,
//             homens: 0,
//             mulheres: 0,
//             total: 0,
//             showTotal: false
//         }
//     }

//     incrementHomens = () => {
//         this.setState({ homens: this.state.homens + 1})
//     }

//     decrementHomens = () => {
//         if (this.state.homens > 0) this.setState({ homens: this.state.homens - 1 })
//     }

//     incrementMulheres = () => {
//         this.setState({ mulheres: this.state.mulheres + 1})
//     }

//     decrementMulheres = () => {
//         if(this.state.mulheres > 0) this.setState({ mulheres: this.state.mulheres - 1})
//     }

//     incrementCriancas = () => {
//         this.setState({ criancas: this.state.criancas + 1})
//     }

//     decrementCriancas = () => {
//         if(this.state.criancas > 0) this.setState({ criancas: this.state.criancas - 1})
//     }

//     getQuantity= () =>{
//         const { criancas, homens, mulheres } = this.state

//         const carneHomens = 0.4 * homens
//         const carneMulher = 0.32 * mulheres
//         const carneCriancas = 0.20 * criancas
//         const totalCarne = (carneCriancas + carneHomens + carneMulher).toFixed(2)

//         const paoDeAlhoAdulto = 2 * (homens + mulheres)
//         const paoDeAlhoCrianca = 1 * (criancas)
//         const totalPao = paoDeAlhoAdulto + paoDeAlhoCrianca

//         const carvao = 1 * (homens + mulheres +criancas)
//         const totalCarvao = carvao

//         const sal = 0.04 * (homens + mulheres + criancas)
//         const totalSal = sal

//         const gelo = 5 * (homens + mulheres + criancas) / 10
//         const totalGelo = gelo

//         const refrigerante = 2 * (homens + mulheres + criancas) / 5
//         const totalRefri = refrigerante

//         const agua = 1 * (homens + mulheres + criancas) / 5
//         const totalAgua = agua

//         const total = {
//             carne: totalCarne,
//             paoDeAlho: totalPao,
//             carvao: totalCarvao,
//             sal: totalSal,
//             gelo: totalGelo,
//             refrigerante: totalRefri,
//             agua: totalAgua,
//         }

//         this.setState({
//             total,
//             showTotal: true
//         })
        
//     }

//     render(){
//         return (
//             <>
//                 <div className='cards-participations'>
//                     <Card name="Homens" count={this.state.homens} increment={this.incrementHomens} decrement={this.decrementHomens} />
//                     <Card name="Mulheres" count={this.state.mulheres} increment={this.incrementMulheres} decrement={this.decrementMulheres} />
//                     <Card name="Crianças" count={this.state.criancas} increment={this.incrementCriancas} decrement={this.decrementCriancas} />
//                 </div>
//                 <div>
//                     <button onClick={this.getQuantity} className='btnCalc'>
//                         Calcular
//                     </button>
//                 </div>
//                 {this.state.showTotal && (
//                     <div className='total'>
//                         <h2>Total</h2>
//                         <p>Carne (kg): {this.state.total.carne}</p>
//                         <p>Pão de Alho: {this.state.total.paoDeAlho}</p>
//                         <p>Carvão (kg): {this.state.total.carvao}</p>
//                         <p>Sal (kg): {this.state.total.sal}</p>
//                         <p>Gelo (kg): {this.state.total.gelo}</p>
//                         <p>Refrigerante (garrafas de 2L): {this.state.total.refrigerante}</p>
//                         <p>Água (garrafas de 1L): {this.state.total.agua}</p>
//                     </div>
//                 )}
//             </>
//         )
//     }
// }


// export default Calculator