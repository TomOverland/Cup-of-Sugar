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
            <label className="form-check-label" for="gridCheck">
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
              <label className="form-check-label" for="defaultCheck1">
                {category}
              </label>
            </div>
          );
        })}
        <button type="submit" className="btn btn-primary" value="filter">
          Filter
        </button>
      </form>
    </>
  );
}
