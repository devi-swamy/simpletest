import React, { useState } from "react";
import Output from "./Output";
const Greetings = () => {
  const [changedpara, setChangedpara] = useState(false);
  const buttonHandler = () => {
    setChangedpara(!changedpara);
  };
  return (
    <div>
      <h1>Welcome All</h1>
      {/* <p>Hope you are fine</p> */}
      {!changedpara && <Output>Hope you are fine</Output>}
      {changedpara && <Output>Yes thank you</Output>}
      <button onClick={buttonHandler}>Click me!!</button>
    </div>
  );
};
export default Greetings;
