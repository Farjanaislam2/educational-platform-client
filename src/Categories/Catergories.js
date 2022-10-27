import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Catergories = () => {

  const [catergories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://educational-website-server-site.vercel.app/course-details")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <p>this is categories: {catergories.length}</p>
      {catergories.map((category) => (
        <p key={category.id}>
          <Link to={`/categorise/${category.id}`}>{category.title}</Link>
          
        </p>
       
      ))}

    </div>
  );
};

export default Catergories;
