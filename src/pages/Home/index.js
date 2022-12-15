import React, { useState, useRef} from "react";
import { useNavigate } from 'react-router-dom'

import { H1 } from "../../components/title/styles";
import { ContainerItens } from "../../components/containerItens/styles";
import { Button } from "../../components/button/styles";

import axios from "axios";
import { Container, Imagem, InputeLabel, Input,  } from "./styles";
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'
// import Trash from '../../assets/trash.svg'

const App = () => {
  // ESTADOS
  const [users, setUsers] = useState([]);
  const navigate =  useNavigate()
  
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {
  

    // CONECTANDO COM O BACK VIA AXIOS
    const { data: newUSer } = await axios.post("http://localhost:3001/users", 
    { name: inputName.current.value, age: inputAge.current.value})
    
    setUsers([ ...users, newUSer, ])

    navigate('/usuarios')
  }
 

  return (

    <Container>
      <Imagem alt="logo-imagem" src={People} />
      <ContainerItens>

        <H1>Olá!</H1>

        <InputeLabel>Nome</InputeLabel>
        {
          <Input ref={inputName} placeholder="Nome" />
        }

        <InputeLabel>Idade</InputeLabel>
        {
          <Input ref={inputAge} placeholder="Idade" />
        }

        <Button onClick={addNewUser}>
          Cadastrar<img alta="seta" src={Arrow} />
        </Button>



        {/* <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>

              <button onClick={() => deleteUser(user.id)}>
                <img alt="exluir" src={Trash} />
              </button>
            </User>
          ))
          }

        </ul> */}
      </ContainerItens>
    </ Container >

  );
}

export default App