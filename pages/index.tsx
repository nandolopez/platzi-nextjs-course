import Link from "node_modules/next/link";
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
    <div className="grid grid-cols-3 gap-4 p-4">
      {
      produtList.map((product) => {
        return <article className="bg-white p-4 shadow-xl rounded-xl">
          <Link href={'/product/'+product.id}><a><img src={product.image} alt={product.name} /></a></Link>
          <section className="flex justify-between border-t-2 border-black py-2">
            <Link href={'/product/'+product.id} ><a className="text-xl font-bold">{product.name}</a></Link>
            <span className="text-lg text-red-600 font-bold">{product.price} €</span>
          </section>
        </article>;
      })}
    </div>
  );
};

export default Home;
