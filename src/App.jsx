import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Searcher from './components/Searcher';
import UserCard from './containers/UserCard';
import { getGitHubUser } from './services/users';

const App = () => {

    const [inputUser, setInputUser] = useState('octocat'); //setInputUser se usa en el componente Searcher
    const [userState, setUserState] = useState('inputUser');
    const [notFound, setNotFound] = useState(false);

    const gettingUser = async (user) => {
        const userResponse = await getGitHubUser(user);

        if(userState === 'octocat') { // sabemos que al cargar nos va a buscar octocat porque es el estado inicial
            localStorage.setItem('octocat', userResponse); // el json que devolverá gettingUser con octocat es almacenado en local
        }

        if(userResponse.message === 'Not Found') { // si el usuario no existe devolverá el método message Not Found
            const { octocat } = localStorage; // en ese caso recuperamos octocat del localStorage
            setInputUser(octocat); // declaramos InputUser como octocat
            setNotFound(true); // el estado NotFound pasa a true
        } else {
            setUserState(userResponse);
        }
    }
    console.log(userState);

    useEffect(() => {
        gettingUser(inputUser); // de primeras nos carga el inputUser declarado en estado inicial
    }, [inputUser]) // cuando cambiemos nuestro inputUser el useEffect escuchará el cambio y ejecutará gettingUser

    return(
        <Container sx={{
            background: 'whitesmoke',
            width: '80vw',
            height: '500px',
            borderRadius: '16px',
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Searcher inputUser={inputUser} setInputUser={setInputUser} />
            <UserCard userState={userState} />
        </Container>
    )
};

export default App;