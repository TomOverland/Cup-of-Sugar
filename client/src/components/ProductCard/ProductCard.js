// card of product displayed on results list and owner list
import React from "react";
import { Link } from "react-router-dom";
// import API from '../../utils/API';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  console.log("props in ProductCard", props);

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     items: [],
  //   };
  // }

  // Component did mount gets called after the render() method, so the map method starts as undefined.
  // componentDidMount() {
  //   console.log('ProductCard did mount... Sending Axios Request...');
  //   API.getItems().then((res) => {
  //     console.log('response to ProdCard: ', res);
  //     const items = res;
  //     //   console.log("response data: ", items);
  //     this.setState({
  //       items: items,
  //     });
  //   });
  // }

  // render() {
  return (
    <div className="container mx-auto lg:grid grid-cols-3 gap-4">
      {props.items
        ? props.items.map((item) => (
            <div className="pt-2 flex space-x-4 rounded-md" key={item.name}>
              <div className="flex-2 rounded-md p-6 bg-gray-100">
                <img
                  alt={item.name}
                  src={process.env.PUBLIC_URL + item.image}
                  className="bg-blue bg-cover pb-2 px-5"
                />

                <div className="object-bottom">
                  <hr />
                  <div className="py-1 px-10">
                    <div className="text-2xl font-bold mb-3 underline">
                      {item.itemName}
                    </div>
                    <div className="text-lg mb-3 font-bold">
                      Daily Fee: ${item.rentalFee}.00
                    </div>
                  </div>
                  <div>
                    <Link
                      to={`/productpage/${item.id}`}
                      className="bg-blue-500 text-white p-2 flex justify-center w-full"
                    >
                      Check it out!{" "}
                      <FontAwesomeIcon className="ml-1" icon={faCheck} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
  // }
};
export default ProductCard;
