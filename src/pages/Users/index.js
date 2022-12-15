import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import { H1 } from "../../components/title/styles.js";
import { ContainerItens } from "../../components/containerItens/styles.js";
import { Button } from "../../components/button/styles.js";


import { Container, Imagem, User } from "../Users/styles.js";

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

const Users = () => {
  // ESTADOS
  const [users, setUsers] = useState([]);
  const navigate =  useNavigate()
  
  useEffect(() => {
    async function fetchUsers(){
      const { data: newUSers } = await axios.get("http://localhost:3001/users")
    setUsers(newUSers)

    } 

    fetchUsers()
  },  [])

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers =  users.filter( (user) => user.id !== userId );
    setUsers(newUsers)
  }

  function goBackPage(){
    navigate('/')
  }


  return (

    <Container isBlur={true}>
      <Imagem alt="logo-imagem" src={Avatar} />
      <ContainerItens>

        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>

              <button onClick={() => deleteUser(user.id)}>
                <img alt="exluir" src={Trash} />
              </button>
            </User>
          ))
          }

        </ul>

        <Button isBack={true} onClick={goBackPage}>
        <img alta="seta" src={Arrow} /> Voltar
        </Button>

      </ContainerItens>
    </ Container >

  );
}

export default Users