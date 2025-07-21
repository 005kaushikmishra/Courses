import React, { useState } from "react";

const Filter = ({ filterData, filterhandler }) => {
  return (
    <div>
      {filterData.map((data) => {
        return (
          <button key={data.id} onClick={() => filterhandler(data.title)}>
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
