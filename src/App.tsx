import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  // let items = ["Saint John", "Victoria", "Toronto", "Winnipeg", "Moncton"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup> */}
      {/* <Alert>Test</Alert> */}

      <Button
        color="warning"
        onClick={() => {
          console.log("Test");
        }}
      >
        Hello, my name is Dexter Morgan
      </Button>
    </div>
  );
}

export default App;
