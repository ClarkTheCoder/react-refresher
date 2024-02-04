// className because class is a reserved keyword in JSX/JS
// import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  let items = ["Saint John", "Victoria", "Toronto", "Winnipeg"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // event handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
