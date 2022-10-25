import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Catergories = () => {
  const [catergories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course-details")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <p>this is categories: {catergories.length}</p>
      {catergories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default Catergories;
