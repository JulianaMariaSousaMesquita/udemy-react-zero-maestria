import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import Challenge from './components/Challenge';

function App() {
  const n = 15;
  const [name] = useState("Juliana");
  const [redTitle, setredTitle] = useState(false);

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>Seção 4: React e CSS</h1>
      <section>
        <ul>
          <li>Introdução da seção</li>
          <li>CSS global</li>
          <li>CSS de componentes</li>
          <li>CSS inline</li>
          <li>CSS inline dinâmico</li>
          <li>Classes dinâmicas</li>
          <li>CSS Modules</li>
          <li>Tarefa 5: Desafio sobre React com CSS</li>
          <li>Conclusão da seção</li>
        </ul>
      </section>
      <section>
       
       {/** CSS de Componente */}
        <MyComponent />
      </section>
      <p>Esse parágrafo é do App.js</p>
      
      {/** CSS Inline */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}> Esse parágrafo foi estilizado de forma inline</p>
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}> Esse parágrafo foi estilizado de forma inline</p>
      
      { /** CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>Esse h2 titulo foi estilizando usando CSS Inline dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>Esse h2 titulo foi estilizando usando CSS Inline dinâmico</h2>
      <h2 style={name === "Juliana" ? ({color: "orange", backgroundColor: "black"}) : (null)}>Esse h2 titulo foi estilizando usando CSS Inline dinâmico</h2>
      
      {/** Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Esse h2 titulo foi estilizado usando classe dinâmica</h2>
      <button onClick={() => setredTitle(!redTitle)}> Alterar redTitle </button>
    
    {/** CSS Modules */}
    <Title />

    {/** CSS Global */}
    <h1 className={['my-title']}> TESTE puxar Título CSS Modules no APP </h1>
    <h1 className="my_title"> TESTE puxar Título CSS Modules no APP</h1>
    
    {/** Desafio */}
    <h1 className={redTitle ? "red-title" : "title"}>Desafio</h1>
    <Challenge  title="AMAROK 3.0 - Realize seu sonho" name="VOLKSWAGEN AMAROK" model="3.0 V6 TDI DIESEL HIGHLINE" color="Cinza" exchange="Automática" year={2021} km={0} price={300000} />
    <Challenge  title="KWID - Na mão" name="RENAULT KWID" model="1.0 12V SCE FLEX ZEN MANUAL" color="Preto" exchange="Manual" year={2020} km={45.000} price={60000} />
    <Challenge  title="SANDERO - Promoção" name="RENAULT SANDERO" model="1.6 STEPWAY 16V FLEX 4P AUTOMÁTICO" color="Vermelho" exchange="Automática" year={2014} km={200.000} price={90000} />

    </div>
  );
}

export default App;
