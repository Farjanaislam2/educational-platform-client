import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "./../context/AuthProvider/AuthProvider";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";




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
    <div>
      <div className="m-5 ps-5 align-content-center justify-content-center ">
{/* form */}

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



{/* button */} 

        <ButtonGroup vertical>
          <Button className="" onClick={handleGoogleSignIn} variant="danger">
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button variant="danger">
            {" "}
            <FaGithub></FaGithub> Login with Github
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Login;
