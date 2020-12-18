import React from "react";
// import Loader from "../components/Loader/Loader";
import ProductCard from "../components/ProductCard/ProductCard";
import { useAuth0 } from "@auth0/auth0-react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Results from "../components/Results/Results";
import Footer from "../components/Footer/Footer"

const Home = () => {
  const { isAuthenticated } = useAuth0();

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

  return isAuthenticated && (
    <div>
      <div id="toms-div">
        <Results />
        </div>
      <h1 className="font-bold text-2xl mb-3 pl-3">Best Sellers</h1>
      <hr />
      <div className="flex">
        <div className="flex-1">
          <ProductCard />
        </div>
        <div className="float-right flex">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
