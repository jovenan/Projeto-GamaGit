import React, { useState } from "react";
// Axios é um metodo de fazer requisições
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom'; 

/* Em JSX para colocar classes usamos o "className" */
function App(props) {
  const [erro, setErro] = useState(false);
  const history = useHistory();
  /* Retorna um array [usuario, setUsuario ] */
  /* Podemos usar o destructuring de array */
  const [usuario, setUsuario] = useState('')
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then((response) => {provei
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) =>{
        repositoriesName.push(repository.name);
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false)
      history.push('/repositories');
    }).catch(err => {
      setErro(true)
    });
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <S.Buttom type="button" onClick={handlePesquisa}>Pesquisar</S.Buttom>
      </S.Content>
      {erro ?  <S.ErrorMsg>Ocorreu um erro!</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default App;
