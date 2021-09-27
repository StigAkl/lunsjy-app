import { useState } from "react";
import { Form } from "semantic-ui-react"

export const NewJoke = ({ setNewJokeMode, handleNewJoke }) => {

    const [joke, setJoke] = useState(""); 

    const handleOnChange = (e) => {
        setJoke(e.target.value); 
    };

    return(
        <Form>
            <Form.TextArea label="Ny vits:" placeholder="Skriv in vits..." value={joke} onChange={handleOnChange} />
            <Form.Group>
                <Form.Button color="blue" onClick={() => handleNewJoke(joke)}>Send</Form.Button>
                <Form.Button onClick={() => setNewJokeMode(false)}>Avslutt</Form.Button>
            </Form.Group>
        </Form>
    )
}