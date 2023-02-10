import { useState } from 'react';
import './MyForm.css';

const MyForm = ({user}) => {
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role,setRole] = useState(user ? user.role : "");

    const handleName = (event) => {        
        setName(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role);
        setName("");
        setEmail("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" value={name} placeholder="Digite seu nome" onChange={handleName} />            
            </div>
            <label>
                <span>E-mail :</span>
                <input type="email" name="email" value={email} placeholder="Digite o seu e-mail" onChange={(event) => {setEmail(event.target.value)}}/>
            </label>
            <label>
                <span>Bio :</span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(event) => setBio(event.target.value)} value={bio} ></textarea>
            </label> 
            <label>
                <span>Função no sistema</span>
                <select name="role" value={role} onChange={(event) => setRole(event.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm