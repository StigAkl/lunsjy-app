import { ThemeProvider } from 'styled-components'; 
import { Theme } from './Components/Themes/themes'; 
import { Nav } from './Components/NavBar/Nav' 
import { useEffect, useState } from 'react'; 
import { Jokes } from './api/agent'; 
import { Container } from 'semantic-ui-react'; 
import { DashBoard } from './Components/DashBoard';
import styled from 'styled-components'; 

const Title = styled.h3`
  color: darkblue;
  padding: 5px;  
`;

function App() {

  const [jokes, setJokes] = useState([]); 
  const [newJokeMode, setNewJokeMode] = useState(false); 

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

useEffect(() => {
  Jokes.list().then(response => {
      setJokes(response); 
  })
}, [])

  return (
      <ThemeProvider theme={Theme}>
        <Nav />
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
      </ThemeProvider>
  );
}

export default App;