import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Juliana Mesquita","Cintia","Thamires","Pollyana Ramos","Aline Darc", "Alice", "Miguel", "Maria Carolina","Mirella"]);
    
    const [users, setUsers] = useState([
        { id: 1, name:"Matheus", age: 31},
        { id: 2, name:"João", age: 28 },
        { id: 3, name:"Pedro", age: 44}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

    return (
        <>   
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}> {user.name} - {user.age} </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </>
    )
}

export default ListRender;