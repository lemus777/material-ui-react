import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Searcher from './components/Searcher';
import { getGitHubUser } from './services/users';

const App = () => {

    const [inputUser, setInputUser] = useState('octocat');
    const [userStater, setUserStater] = useState('inputUser');

    const gettingUser = async (user) => {
        const userResponse = await getGitHubUser(user);
        console.log(userResponse);
    }

    useEffect(() => {
        gettingUser(inputUser);
    }, [])

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
        </Container>
    )
};

export default App;