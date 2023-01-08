import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <>
        <h2>Detalhe carro {brand}</h2>
        <p> Marca: {brand} </p>
        <p> KM: {km} </p>
        <p> Cor: {color} </p>
        <p> Status: { newCar ? ("Novo") : ("Usado")}</p>
    </>
  )
}

export default CarDetails