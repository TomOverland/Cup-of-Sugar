import React from 'react';
import { categories } from '../common/constants';

export function Sidebar() {
  return (
    <>
      <form className="m-4">
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            ></input>
            <label className="pl-1 form-check-label" for="gridCheck">
              Currently Available
            </label>
          </div>
        </div>
        {categories.map((category) => {
          return (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={category}
                id="defaultCheck1"
              ></input>
              <label className="pl-1 form-check-label" for="defaultCheck1">
                {category}
              </label>
            </div>
          );
        })}
        <br />
        <hr />
        <br />
        <button type="submit" className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none" value="filter">
          Filter
        </button>
      </form>
    </>
  );
}
