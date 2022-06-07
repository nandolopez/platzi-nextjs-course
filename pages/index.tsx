import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [produtList, setprodutList] = useState();

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(console.log);
  }, []);

  return (
    <div>
      <Navbar />
      <h1> Hello World</h1>
    </div>
  );
};

export default Home;
