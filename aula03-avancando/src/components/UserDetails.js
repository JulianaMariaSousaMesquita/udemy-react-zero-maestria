import React from 'react'

const UserDetails = ({name, age, profession}) => {
  return (
    <div>
        <p>{name} tem {age} anos e exerce a profissão de {profession}, {age > 17 ? (" pode tirar carteira de habilitaçao") : (" ainda é menor de idade, não pode tirar habilitação") }</p>
    </div>
  )
}

export default UserDetails;