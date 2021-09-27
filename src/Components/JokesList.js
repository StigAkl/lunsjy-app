import { Button, Item, Segment } from "semantic-ui-react";

export const JokesList = ({ jokes, deleteJoke }) => {
    return (
    <Segment raised>
        <Item.Group divided>
            {jokes.map((joke) => (
                <Item key={joke._id}>
                    <Item.Content>
                        <Item.Description as="a">
                            <NewlineText text={joke.text}  />
                        </Item.Description>
                    </Item.Content>
                    <Item.Content>
                        <Button color="red" floated="right" onClick={() => deleteJoke(joke._id)}>Slett</Button>
                        <Button color="blue" floated="right" disabled>Rediger</Button>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
    </Segment>
      );
    };


    const NewlineText = ({text}) => {
        return text.split('\n').map(str => <p>{str}</p>); 
    }