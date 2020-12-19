import React, {Component} from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails"
import API from "../utils/API";
class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };

    
  }
 componentDidMount() {
  API.getItems().then((res) => {
      // console.log("response: ", res);
      console.log("GETTING ITEMS IN PROD CONTAINER")
      const items = res;
    //   console.log("response data: ", items);
      this.setState({
        items: items,
      });
    });
 }
  
  render() {

  return (
    <div>
      <ProductDetails />
    </div>
  )
};
}
export default ProductContainer;