import { JokesList } from "./JokesList"
import { Button, Grid, Label, Icon } from "semantic-ui-react"


export const DashBoard = () => {
    return(
        <Grid>
        <Grid.Column width={16}>
          <JokesList />
        </Grid.Column>

        <Grid.Column width={4}>
            <Button as='div' labelPosition='right'>
                <Button color="blue">
                    <Icon name='plus square' />
                    Ny Vits
                </Button>
                <Label basic color='blue' pointing='left'>
                  { 7 }
                </Label>
            </Button>
        </Grid.Column>
      </Grid>
    )
}