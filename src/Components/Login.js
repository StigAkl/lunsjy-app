import styled from "styled-components"
import { Form } from "semantic-ui-react";
import { useState } from "react";

const StyledLoginBox = styled.div`
    position: absolute; 
    top: 50%; 
    left: 50%;
    -ms-transform: translate(-50%, -50%); 
    transform: translate(-50%, -50%); 
`;

export const Login = ({ handleLogin }) => {

    const [password, setPassword] = useState(""); 

    const handlePasswordChange = (e) => {
        setPassword(e.target.value); 
    };

    const handleSignIn = () => {
        handleLogin(password); 
    }

    return (
        <StyledLoginBox>
            <Form widths='equal'>
                <Form.Group>
                    <Form.Input type="password" value={password} onChange={handlePasswordChange} label="Enter Password" />
                </Form.Group>
                <Form.Button color="blue" onClick={handleSignIn}>Sign in</Form.Button>
            </Form>
        </StyledLoginBox>
    )
}