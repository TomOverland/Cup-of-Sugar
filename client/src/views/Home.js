import React, { useState, useEffect } from 'react';
// import Loader from "../components/Loader/Loader";
import ProductCard from '../components/ProductCard/ProductCard';
import { useAuth0 } from '@auth0/auth0-react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import Results from '../components/Results/Results';
import API from '../utils/API';
// import Footer from "../components/Footer/Footer"

// export function HomeDisplayItems(filteredItems) {
//   const [items, setItems] = useState(filteredItems || getDefaultItems());
//   return {
//     setItems,
//     items,
//   };
// }

export function Home() {
  const { isAuthenticated } = useAuth0();
  const [items, setItems] = useState();

  useEffect(
    () => {
      API.getItems().then(res => {
        setItems(res)
      })
    },[]
  )

  // useEffect(() => {
  //   console.log("did it try?")
  // },[items])
  
  console.log("items have arrived in home", items)


  
  // let products = "";

  // let content = null;

  // if (products.error) {
  //   content = <p>Ope you broke something there</p>;
  // } else if (products.loading) {
  //   content = <Loader></Loader>;
  // } else if (products.data) {
  //   content = products.data.map((product) => (
  //     <div key={product.id}>
  //       <ProductCard product={product} />
  //     </div>
  //   ));
  // }

  return (
    isAuthenticated && (
      <div>
        <div id="toms-div">
          <Results />
        </div>
        <h1 className="font-bold text-2xl mb-3 pl-3">Best Sellers</h1>
        <hr />
        <div className="flex">
          <div className="flex-1">
            <ProductCard items={items} />
          </div>
          <div className="float-right flex">
            <Sidebar setItems={setItems}/>
          </div>
        </div>
      </div>
    )
  );
}

