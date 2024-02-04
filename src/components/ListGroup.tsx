// className because class is a reserved keyword in JSX/JS
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Saint John", "Victoria", "Toronto", "Winnipeg"];
  //   items = [];

  // type annotation
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            onClick={(event) => console.log(item, index, event)}
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
