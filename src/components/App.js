import React from "react";
import Options from "./Options/Container";
import Inventory from "./Inventory/Container";
import Results from "./Results/Container";

const App = () => (
  <div className="row">
    <div className="col col-6 push-center">
      <div className="row gutters">
        <div className="col col12">
          <Options />
        </div>
      </div>
      <div className="row gutters">
        <div className="col col-4">
          <Inventory />
        </div>
        <div className="col col-4">
          <Results title="Direct Merge" efficient={false} />
        </div>
        <div className="col col-4">
          <Results title="Efficient Merge" efficient={true} />
        </div>
      </div>
    </div>
  </div>
);

export default App;
