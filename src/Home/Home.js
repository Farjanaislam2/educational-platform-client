import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="m-5 ps-5 align-content-center justify-content-center ">
      <ButtonGroup vertical>
      <Button variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
      <Button variant="outline-info"> <FaGithub></FaGithub> Login with Github</Button>  
    </ButtonGroup>
      </div>

      <div className="m-5 bg-opacity-45 bg-info p-5 m-10 border border-5 rounded border-primary">
        <h1 className="p-5 ms-5 text-bg-danger border border-5 fw-bolder ">
          Learn Programming <br></br> With <br></br>Online Courses{" "}
        </h1>
      </div>
    </div>
  );
};

export default Home;
