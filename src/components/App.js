import React from "react";
import Options from "./Options/Container";
import Results from "./Results/Container";

const App = () => (
  <div>
    <div className="row">
      <div className="col col-6 push-center">
        <Options />
      </div>
    </div>
    <div className="row">
      <div className="col col-6 push-center">
        <Results />
      </div>
    </div>
  </div>
);

export default App;
