import React from 'react'

const ShowUserName = (props) => {
  return (
    <>
      <h2>Introdução a props</h2>
      <p> O nome do usuário: {props.name} </p>
      <p> O nome do usuário: {props.username} </p>
    </>
  )
}

export default ShowUserName