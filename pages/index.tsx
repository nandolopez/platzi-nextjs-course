import React, { useEffect, useState } from "react";

const Home = () => {
  const [produtList, setprodutList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => {
        setprodutList(data);
      });
  }, []);

  return (
    <div>
      <h1> Hello World</h1>
      {
      produtList.map((product) => {
        return <div>{product.name}</div>;
      })}
    </div>
  );
};

export default Home;
