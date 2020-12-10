import React from "react";
import Loader from "../components/Loader/Loader";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
   
let products = "" ;
  
  let content = null;

  if (products.error){
    content= <p>
      Ope you broke something there
    </p>
  } else if(products.loading){
    content=<Loader></Loader>
  } else if(products.data){
    content = 
    products.data.map((product) =>
      <div key={product.id}>
        <ProductCard 
          product={product}
          />
      </div>
    )
  }

  return (
      <div>
        <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            <div className="md:grid gap-4 grid-cols-3">
              {content}
            </div>
      </div>
  )
};

export default Home;
