import Accordian from "./Accordion";

const Data = [
  {
    body: "Lorem Ipsum is dummy text. It is something used to fill layout gap when you have no idea what the content will be. It is a standard, because they have no idea what the content will be, and because they do not understand their customer",
    title: "Accordian1",
  },
  {
    body: "Lorem Ipsum is dummy text. It is something used to fill layout gap when you have no idea what the content will be. It is a standard, because they have no idea what the content will be, and because they do not understand their customer",
    title: "Accordian2",
  },
  {
    body: "Lorem Ipsum is dummy text. It is something used to fill layout gap when you have no idea what the content will be. It is a standard, because they have no idea what the content will be, and because they do not understand their customer",
    title: "Accordian3",
  }
];

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="accordion">
          {Data.map((data) => (
            <Accordian AccData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
