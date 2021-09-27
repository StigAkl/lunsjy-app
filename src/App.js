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
`
function App() {

  const [jokes, setJokes] = useState([]); 

useEffect(() => {
  Jokes.list().then(response => {
      setJokes(response); 
  })
})

  return (
      <ThemeProvider theme={Theme}>
        <Nav />
        <Container style={{ marginTop: "7em" }}>
          <Title>Antall aktive vitser: { 7 }</Title>
          <DashBoard />
        </Container>
      </ThemeProvider>
  );
}

export default App;