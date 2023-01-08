import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState("Juliana"); 

    return (
        <>
            <div>
                <h2>Condicional simples - Isso será exibido ?</h2>
                {x && <p> Se x for true, sim!</p>}
            </div>
            <div>
                <h2>Condicional com operador ternario</h2>
                { name === "João" ? ( <div> <p> Nome é João </p> </div>) : (<div> <p> Nome não encotrado! </p> </div>)}
                <button onClick={() => setName("João")}> Alterar nome para João</button>
            </div>
        </>
    );
};

export default ConditionalRender;