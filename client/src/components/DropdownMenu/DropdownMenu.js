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
    this.setState({ value: event.target.value });
    console.log(this.state);
  }
  render() {
    return (
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="categorySelectMenu">Select a Category</label>
          <select
            className="form-control"
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
