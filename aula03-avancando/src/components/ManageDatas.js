import {useState} from 'react';

const ManageData = () => {
    let someData = 10;
    console.log(someData);

    const [number, setNumber] = useState(15);
    console.log(number);
    return (
        <>
           <div>
                <h2>Alterando valor Sem useState</h2>
                <p>valor: {someData}</p>
                <button onClick = { () => (someData = 15)}>Mudar variável</button>
                <p>valor: {someData}</p>
           </div>
           <div>
                <h2>Alterando valor Com useState</h2>
                <p>valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar o state</button>
           </div>
        </>
    );
};

export default ManageData;