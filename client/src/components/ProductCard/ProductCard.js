// card of product displayed on results list and owner list
// card of product displayed on results list and owner list
import React from "react";
import { Link } from "react-router-dom"; 


function ProductCard (props) {
    return(
        <div className="container mx-sm">
            <div className="box-border max-w-sm mx-auto rounded-xl overflow-hidden">
                <Link to={`/products/${props.product.id}`}>
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
                </div>  
                <Link to={`/products/${props.product.id}`}
                className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    Check it out!
                </Link>
                </div> 
            </div>
        </div>

    )
}

export default ProductCard