import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "./../context/AuthProvider/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const [error, setError] =useState('')
  const { providerLogin, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location =useLocation();

  const from = location.state?.from?.pathname || '/';


  const googleProvider = new GoogleAuthProvider();
  const githubProvider =new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })

      .catch((error) => console.error(error))
  };

  const handleGithubSignIn=() =>{
    providerLogin(githubProvider)
    .then((result) => {
      const user = result.user
      console.log(user)
    })

    .catch((error) => console.error(error));
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      form.reset();
      setError('')
      navigate(from , {replace: true});
    })
    .catch(error =>{
      console.error(error)
      setError(error.message);
    })
  };

  return (
    <div className="m-5 p-5">
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="outline-primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-danger">
            {error}
          </Form.Text>
        </Form>
      </div>

      <div className="mt-5">
        <ButtonGroup vertical>
          <Button onClick={handleGoogleSignIn} variant="outline-primary">
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button onClick={handleGithubSignIn} className="mt-2" variant="outline-primary">
            <FaGithub></FaGithub> Login with Github
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Login;
