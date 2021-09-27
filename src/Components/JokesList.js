import { Button, Item, Segment } from "semantic-ui-react";

export const JokesList = () => {
    return (
    <Segment raised>
        <Item.Group divided>
            {[0,1,2,3,4,5,6].map((joke) => (
                <Item key={joke}>
                    <Item.Content>
                        <Item.Description as="a">Dette er en kjempe god joke</Item.Description>
                    </Item.Content>
                    <Item.Content>
                        <Button color="red" floated="right">Slett</Button>
                        <Button color="blue" floated="right">Rediger</Button>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
    </Segment>
      );
    };