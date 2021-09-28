import { ThemeProvider } from 'styled-components'; 
import { Theme } from './Components/Themes/themes'; 
import { Nav } from './Components/NavBar/Nav' 
import { useEffect, useState } from 'react'; 
import { Jokes, Auth } from './api/agent'; 
import { Container } from 'semantic-ui-react'; 
import { DashBoard } from './Components/DashBoard';
import styled from 'styled-components'; 
import { isAuth, setToken } from './utils/auth';
import { Login } from './Components/Login';


const Title = styled.h3`
  color: darkblue;
  padding: 5px;  
`;

const StyledContainer = styled.div`
  position: relative; 
  height: 500px; 
  width: 500px; 
  margin: 0 auto; 
  margin-top: 15rem; 
`;

function App() {

  const [jokes, setJokes] = useState([]); 
  const [newJokeMode, setNewJokeMode] = useState(false); 
  const [loading, setLoading] = useState(true); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const handleDeleteJoke = async (id) => {
      try {
        await Jokes.delete(id);
        const filteredJokes = jokes.filter(j => j._id !== id); 
        setJokes(filteredJokes);
      } catch(e) {} 
  }

  const handleNewJoke = async (joke) => {
    try {
      const newJoke = await Jokes.create({
        text: joke
      }); 

        setJokes([...jokes, newJoke]); 
        setNewJokeMode(false);
    } catch(e) {}
  }

  const handleLogin = async(password) => {
      const token = (await Auth.authenticate({
        secret: password
      })).token; 
       
      if(token) {
        setToken(token); 
        setIsAuthenticated(true); 
        Auth.setAuthHeader(token); 
      }
  }

  useEffect(() => { 
    if(isAuth()) {
      setIsAuthenticated(true); 
    }

    Jokes.list().then(response => {
      setJokes(response);
      setLoading(false);  
    }); 
    setLoading(false);  
  }, [])

  return (
      <ThemeProvider theme={Theme}>
        <Nav />
        {isAuthenticated && !loading &&
          <Container style={{ marginTop: "7em" }}>
            <Title>Antall aktive vitser: { jokes.length }</Title>
            <DashBoard 
            jokes={jokes} 
            deleteJoke={handleDeleteJoke}
            setNewJokeMode={setNewJokeMode}
            newJokeMode={newJokeMode} 
            handleNewJoke={handleNewJoke}
            />
        </Container>
        }

        {!isAuthenticated && !loading &&
          <StyledContainer>
            <Login handleLogin={handleLogin} />
          </StyledContainer>
        }
      </ThemeProvider>
  );
}

export default App;