import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "./../context/AuthProvider/AuthProvider";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Login = () => {

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {

    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })

    .catch(error => console.error(error))

  };

  
  return (
    <div className="m-5 p-5">
      <div >
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
          Login
      </Button>
    </Form>
        
      </div>


      <div>
      <ButtonGroup vertical>
          <Button onClick={handleGoogleSignIn} variant="primary">
          <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button variant="primary">
            <FaGithub></FaGithub> Login with Github
          </Button>
        </ButtonGroup>
      </div>
      </div>
  
  );
};

export default Login;
