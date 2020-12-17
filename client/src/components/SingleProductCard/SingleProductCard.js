import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';

class SingleProductCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            singleItem: []
        }
    }
    
    componentDidMount() {
        // taking prop of searchid from singleproductpage to use as search param in API getsingleitem
        const id = this.props.searchid;
        // console.log('props id: ', id);
        API.getSingleItem(id).then((res) => {
            const singleItem = res;
            console.log('single item: ', singleItem)
            
            this.setState({
                singleItem: singleItem,
            })
          });
    }

    render(){
        return (
            <div>
                <p>examples of how to call single item</p>
                <p>singleItem id: {this.state.singleItem.id}</p>
                <p>singleItem name: {this.state.singleItem.itemName}</p>
                <p>singleItem description: {this.state.singleItem.itemDescription}</p>
            <div className="flex space-x-4 p-3">
        <div className="flex-grow flex-1 items-center justify-center ">
          <div className= "bg-gray-100 mb-4 rounded overflow-auto py-10 px-10">
              <img alt="mockup" src={process.env.PUBLIC_URL + "/lawnmower.jpg"} className="h-64 w-auto bg-blue bg-cover pb-1" />
              <br />
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold  ">Mockup Text</div>
              <hr />
              <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3">Description of product</div>
              <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3 ">Price per Day: $5.00</div>
              <br/>
              <hr className="p-3" />  
              <Link to="/contact" className="py-2 px-4 pr-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-2">Rent it!</Link>
                 <Link to="/" className="ml-2 py-2 px-4 pr-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">Cancel</Link>    
          </div>
        </div>
        <div className="flex-grow w-auto flex-2 items-center justify-center ">
          <div className= "bg-gray-100 mb-4 rounded overflow-auto py-10 px-10">
              <img alt="mockup" src={process.env.PUBLIC_URL + "/lawnmower.jpg"} className="h-64 w-auto bg-blue bg-cover pb-1" />
              <br />
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold  ">Mockup Text</div>
              <hr />
              <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3">Description of product</div>
              <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3 ">Price per Day: $5.00</div>
              <br/>
              <hr className="p-3" />  
              <Link to="/contact" className="py-2 px-4 pr-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-2">Rent it!</Link>
                 <Link to="/" className="ml-2 py-2 px-4 pr-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none">Cancel</Link>    
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default SingleProductCard;