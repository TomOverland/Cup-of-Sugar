import React from 'react';
import { categories } from '../common/constants';

export function DropdownMenu() {
    return (
        <div className="form-row">
            <div className="form-group col-md-4">
              <label for="categorySelectMenu">Select a Category</label>
              <select className="form-control" id="categorySelect">
                <option selected>Choose...</option>
                {categories.map(category => {
                    return(<option>{category}</option>)
                })}
                </select>
            </div>
          </div>
    )
}