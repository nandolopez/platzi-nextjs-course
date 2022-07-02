import Link from "node_modules/next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "../../node_modules/next/router";

const ProductItem = () => {
  const { query } = useRouter();

  const [product, setproduct] = useState<TProduct>({});

  useEffect(() => {
    window
      .fetch("/api/avo/" + query.id)
      .then((response) => response.json())
      .then(({ data, length }) => {
        setproduct(data);
      });
  }, []);

  return (
    <article className="p-4">
      <section className="grid grid-cols-2 bg-white rounded-2xl">
        <img src={product.image} alt={product.name} className="mx-auto"/>
        <div className="text-center font-bold ">
          <h2 className=" text-6xl">{product.name}</h2>
          <p className="text-4xl text-red-700 mt-8">{product.price} €</p>
          <Link href="/">
            <button className="mt-8 p-8 text-2xl rounded-2xl shadow-xl bg-blue-400 text-white font-bold">Add to cart</button>
          </Link>
        </div>
      </section>
      
    </article>
  );
};

export default ProductItem;
