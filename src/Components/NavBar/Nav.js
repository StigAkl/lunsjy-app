import { Menu, Container } from 'semantic-ui-react'; 
import styled from 'styled-components'; 

const StyledMenu = styled(Menu)`
  background-image: linear-gradient(
    135deg,
    rgb(24, 42, 115) 0%,
    rgb(33, 138, 174) 69%,
    rgb(32, 117, 150) 89%
  ) !important;
`; 

export const Nav = ( { jokeCount }) => {
    return (
        <StyledMenu fixed="top" inverted>
          <Container>
            <Menu.Item header link> 
                <img src="/joke.png" alt="logo" style={{marginRight: '10px'}} />
                Lunsjy-Joke
            </Menu.Item>
          </Container>
        </StyledMenu>
      );
    };
    