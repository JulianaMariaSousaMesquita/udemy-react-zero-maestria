
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Formulários</h2>
        <MyForm user={{name: "Juliana", email:"juliana.mesquita@gmail.com", bio: "Sou dev Júnior", role: "admin" }} />
      </header>
    </div>
  );
}

export default App;
