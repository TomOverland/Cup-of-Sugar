import React from 'react';
import { categories } from '../common/constants';

export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'category',
      value: 'choose',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      // console.log("handlechange",this.state.value);
      this.props.getDropDownValue(this.state);
      // console.log("getValue", this.state);
    });
    
  }
  render() {
    return (
      <div>
          <hr className="pb-1"/>
        <div>
          <div htmlFor="categorySelectMenu" className="font-bold text-xl p-2 underline">Select a Category</div>
          <br />
          <select
            className="form-control py-2 px-10 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ml-3"
            id="categorySelect"
            name="category"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option>Choose...</option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}
