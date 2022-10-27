import React from "react";
import Footer from "../Shared/Footer/Footer";


const Home = () => {

 
  return (
    <div>
      <div className="m-5 bg-opacity-45 bg-info p-5 m-10 border border-5 rounded border-primary">
        <h1 className="p-5 ms-5 text-bg-danger border border-5 fw-bolder ">
          Learn Programming <br></br> With <br></br>Online Courses{" "}
        </h1>
      </div>
      <div className="align-baseline pt-5 mt-5">
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
