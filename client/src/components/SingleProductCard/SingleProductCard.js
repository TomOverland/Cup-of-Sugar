import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class SingleProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleItem: [],
    };
  }

  componentDidMount() {
    // taking prop of searchId from SingleProductPage to use as search param in API.getSingleItem
    const id = this.props.searchId;
    // console.log("id on SingleProductCard: ", id);

    API.getSingleItem(id).then((res) => {
      const singleItem = res;
      // console.log("singleItem: ", singleItem);

      this.setState({
        singleItem: singleItem,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container mx-auto pt-5 mt-5 ">
          <div className="bg-gray-100 mb-4 rounded overflow-auto py-10 px-10 space-y-4 justify-items-end">
            <img
              alt="mockup"
              src={process.env.PUBLIC_URL + `${this.state.singleItem.image}`}
              className="h-64 w-auto  bg-blue bg-cover pb-1 block"
            />
            <br />
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold block ml-4">
            {this.state.singleItem.itemName}
            </div>
            <hr />
            <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3 block mr-2">
            {this.state.singleItem.itemDescription}
            </div>
            <div className="text-base sm:text-sm md:text-md lg:text-lg mt-3 block">
              ${this.state.singleItem.rentalFee} a Day
            </div>
            <br />
            <hr className="p-3" />
          </div>
          <div>
            <Link
              to="/contact"
              className="py-2 px-4 pr-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-3"
            >
              Rent it!
            </Link>
            <Link
              to="/"
              className="ml-2 py-2 px-4 pr-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-3"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProductCard;
