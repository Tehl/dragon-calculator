import React from "react";
import Options from "./Options/Container";
import Inventory from "./Inventory/Container";
import MergeChain from "./MergeChain/Container";
import MergeSurplus from "./MergeSurplus/Container";

const App = () => (
  <div className="row">
    <div className="col col-6 push-center">
      <div className="row gutters">
        <div className="col col12">
          <Options />
        </div>
      </div>
      <div className="row gutters">
        <div className="col col-3">
          <Inventory />
        </div>
        <div className="col col-4">
          <MergeChain title="Direct Merge" efficient={false} />
        </div>
        <div className="col col-4">
          <MergeChain title="Efficient Merge" efficient={true} />
        </div>
        <div className="col col-1">
          <MergeSurplus />
        </div>
      </div>
    </div>
  </div>
);

export default App;
