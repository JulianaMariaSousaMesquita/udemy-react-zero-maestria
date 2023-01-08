import { useState } from 'react';
import './App.css';
import img0 from './assets/img0.jpg';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageDatas';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  const name = "Juliana Maria de Sousa Mesquita";
  const [userName] = useState("Maria");
  const cars = [
    {id: 1, brand: "Ferrari", color:"Laranja", newCar: true, km:0},
    {id: 2, brand: "Kia", color:"Verde", newCar: false, km:34444},
    {id: 3, brand: "Renault", color:"Cinza", newCar: false, km:234},
  ];

  function ShowMessage(){
    console.log("Evento do componente pai!")
  }

  const [message,setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id: 1, name: "Juliana Mesquita", age: 27, profession: "Desenvolvedora Júnior"},
    {id: 2, name: "Pollyana Ramos", age: 34, profession: "Artesa"},
    {id: 3, name: "Ossinho Mesquita", age: 5, profession: "Animal de estimação"},
  ];

  return (
    <div className="App">
      <div className='App-section'>
        <h1>Importando imagens</h1>
        <img src="/img1.jpg"     alt="Praia" />
        <img src={img0}    alt="Casa no lago" />
        <img src={img1}    alt="Praia" />
        <img src={img2}    alt="Floresta com riacho" />
        <img src={img3}    alt="Montanhas e grande lago" />
        <img src={img4}    alt="Montanha e lago" />
      </div>

      <div className='App-section'>
        <h1>Utilizando hook useState</h1>
        <ManageData />
      </div>

      <div className='App-section'>
        <h1>Renderização de listas</h1>
        <ListRender />
      </div>

      <div className='App-section'>
        <h1> Renderização condicional</h1>
        <ConditionalRender />
      </div>

      <div className='App-section'>
        <h1>Props</h1>
        <ShowUserName name={name} username={userName} />
        <h2>Destructuring em Props</h2>
        <CarDetails brand="VW" km={100000} color="Vermelho" newCar={false} />
        <h2>Reutilização de componentes</h2>
        <CarDetails brand="Ford" km={0} color="Amarelo" newCar={true} />
        <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
        <h2>Reutilização de lista em componente</h2>
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}  />
        ))}
      </div>

      <div className='App-section'>
        <h1>A prop children</h1>
        <Container myValue={12}>
          <p>E este é o conteúdo</p>
        </Container>
        <Container myValue="Testando">
          <p>Testando 2</p>
        </Container>
      </div>

      <div className='App-section'>
        <h1>Função como prop</h1>
        <ExecuteFunction myFunction={ShowMessage} />
      </div>

      <div className='App-section'>
        <h1>Elevação de state (State lift) </h1>
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
      </div>

      <div className='App-section'>
        <h1>Desafio 4</h1>
        {users.map((user) => (
          <UserDetails key={user.id} name={user.name} age={user.age} profession={user.profession} />
        ))}
      </div>
    </div>
  );
}

export default App;