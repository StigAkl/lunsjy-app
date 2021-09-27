import { JokesList } from "./JokesList"
import { Button, Grid, Label, Icon } from "semantic-ui-react"
import { NewJoke } from "./NewJoke"

export const DashBoard = ({ jokes, deleteJoke, setNewJokeMode, newJokeMode, handleNewJoke }) => {
    return(
        <Grid>
        <Grid.Column width={16}>
          <JokesList jokes={jokes} deleteJoke={deleteJoke} />
        </Grid.Column>

        {!newJokeMode && (<Grid.Column width={4}>
            <Button onClick={() => setNewJokeMode(true)} as='div' labelPosition='right'>
                <Button color="blue">
                    <Icon name='plus square' />
                    Ny Vits
                </Button>
                <Label basic color='blue' pointing='left'>
                  { jokes.length }
                </Label>
            </Button>
        </Grid.Column>)}

        {newJokeMode &&(
        <Grid.Column width={16}>
            <NewJoke setNewJokeMode={setNewJokeMode} handleNewJoke={handleNewJoke} />
        </Grid.Column>)}
      </Grid>
    )
}