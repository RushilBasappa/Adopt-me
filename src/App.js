import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParam from "./SearchParam";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!!</h1>
      <SearchParam />
      {/* <Pet name="Luna" animal="dog" breed="havanese" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
