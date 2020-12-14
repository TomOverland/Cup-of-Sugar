// card of product displayed on results list and owner list
// card of product displayed on results list and owner list
import React from "react";
import { Link } from "react-router-dom"; 


function ProductCard (props) {
    return(
        <div className="container mx-auto">
            <div className="p-4 flex space-x-4 rounded-md ">
            <div className="flex-1 rounded-md p-6 bg-gray-100">
                <div>
                <img alt="mockup" src={process.env.PUBLIC_URL + "/logo512.png"} className="h-20 bg-blue bg-cover py-1 px-10" />
                </div>
                <hr />
                 <div className="py-1 px-10">
                  <div className="text-2xl font-bold mb-3 underline">Mockup Text</div>
                 <div className="text-lg mb-3">Description of product</div>
                 <div className="text-lg mb-3">Price per Day: $5.00</div>
              </div>
                <div>
                <Link to="/productpage"
                className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    Check it out!
                </Link>
                </div> 
            </div>
            <div className="flex-1 rounded-md p-6 bg-gray-100">
                <div>
                <img alt="mockup" src={process.env.PUBLIC_URL + "/logo512.png"} className="h-20 bg-blue bg-cover py-1 px-10" />
                </div>
                <hr />
                 <div className="py-1 px-10">
                  <div className="text-2xl font-bold mb-3 underline">Mockup Text</div>
                 <div className="text-lg mb-3">Description of product</div>
                 <div className="text-lg mb-3">Price per Day: $5.00</div>
              </div>
                <div>
                <Link to="/productpage"
                className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    Check it out!
                </Link>
                </div> 
            </div>
            <div className="flex-1 rounded-md p-6 bg-gray-100">
                <div>
                <img alt="mockup" src={process.env.PUBLIC_URL + "/logo512.png"} className="h-20 bg-blue bg-cover py-1 px-10" />
                </div>
                <hr />
                 <div className="py-1 px-10">
                  <div className="text-2xl font-bold mb-3 underline">Mockup Text</div>
                 <div className="text-lg mb-3">Description of product</div>
                 <div className="text-lg mb-3">Price per Day: $5.00</div>
              </div>
                <div>
                <Link to="/productpage"
                className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    Check it out!
                </Link>
                </div> 
            </div>
            <div className="flex-1 rounded-md p-6 bg-gray-100">
                <div>
                <img alt="mockup" src={process.env.PUBLIC_URL + "/logo512.png"} className="h-20 bg-blue bg-cover py-1 px-10" />
                </div>
                <hr />
                 <div className="py-1 px-10">
                  <div className="text-2xl font-bold mb-3 underline">Mockup Text</div>
                 <div className="text-lg mb-3">Description of product</div>
                 <div className="text-lg mb-3">Price per Day: $5.00</div>
              </div>
                <div>
                <Link to="/productpage"
                className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    Check it out!
                </Link>
                </div> 
            </div>
            </div>
        </div>

    )
}
//connection to api code

/* <Link to={`/products/${props.product.id}`}>
                    <div style= {{
                        "backgroundImage": `url('${props.product.image[0].imageUrl}')`
                        }}
                        className="w-full h-64 bg-blue bg-cover"
                    >
                    </div>
                </Link>
                
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                <Link to={`/products/${props.product.id}`}>
                    {props.product.name}
                </Link>
                </h3>
                <div className="font-bold mb-3">
                    $ {props.product.price}
                </div>  
                <div className="font-bold mb-3">
                    {props.product.description}
                </div>   */

export default ProductCard