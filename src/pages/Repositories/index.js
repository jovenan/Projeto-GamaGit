import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import * as S from './styled';

export default function Repositories() {
    const [repositories, setRepositorires] = useState([]);
    const history = useHistory();
    //UseEffect diz que o componente deve fazer algo apenas depois da renderizacao, ou depois de algo acontecer.
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositorires(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/')
        }
    }, );

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.ListItem>Repositório: {repository}</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}
