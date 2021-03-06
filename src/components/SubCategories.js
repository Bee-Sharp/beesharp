import React, { useState, useEffect, useRef } from "react";
import Feed from "../containers/Feed";

const SubCategories = (props) => {
  const [items, setItems] = useState([]);
  const { categories } = props;

  const handleClick = (e) => {
    e.target.innerHTML = "x";
    const array = [];
    categories.forEach((cat) => {
      if (
        cat.make === e.target.value ||
        cat.model === e.target.value ||
        cat.color === e.target.value
      ) {
        array.push(cat);
      }
    });
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (
          items[i].model === array[j].model &&
          items[i].make === array[j].make
        ) {
          array.splice(j, 1);
        }
      }
    }
    setItems([...items, ...array]);
    console.log(items);
  };

  let makeArray = categories.map((sub) => sub.make);
  makeArray = makeArray
    .filter((a, b) => makeArray.indexOf(a) === b)
    .map((sub, index) => {
      return (
        <li className="category" key={`make${index}`}>
          <button
            type="button"
            className="subCategoryButton"
            value={sub}
            onClick={handleClick}
          >
            -
          </button>
          {sub}
        </li>
      );
    });

  let modelArray = categories.map((sub) => sub.model);
  modelArray = modelArray
    .filter((a, b) => modelArray.indexOf(a) === b)
    .map((sub, index) => {
      return (
        <li className="category" key={`model${index}`}>
          <button
            type="button"
            className="subCategoryButton"
            value={sub}
            onClick={handleClick}
          >
            -
          </button>
          {sub}
        </li>
      );
    });

  let colorArray = categories.map((sub) => sub.color);
  colorArray = colorArray
    .filter((a, b) => colorArray.indexOf(a) === b)
    .map((sub, index) => {
      return (
        <li className="category" key={`model${index}`}>
          <button
            type="button"
            className="subCategoryButton"
            value={sub}
            onClick={handleClick}
          >
            -
          </button>
          {sub}
        </li>
      );
    });
  const make = makeArray.length === 0 ? "" : "Make";
  const model = modelArray.length === 0 ? "" : "Model";
  const color = colorArray.length === 0 ? "" : "Color";
  return (
    <div className="subCategories">
      <div className="makeCategories">
        <h4>{make}</h4>
        <ul className="makeList">{makeArray}</ul>
      </div>

      <div className="modelCategories">
        <h4>{model}</h4>
        <ul className="modelList">{modelArray}</ul>
      </div>

      <div className="colorCategories">
        <h4>{color}</h4>
        <ul className="colorList">{colorArray}</ul>
      </div>
      <Feed items={items} />
    </div>
  );
};

export default SubCategories;
