import { connect } from "react-redux";
import mergeReduce from "../../logic/mergeReduce";
import Results from "./Results";

const mapStateToProps = state => {
  let steps;

  if (!state.options.targetValue) {
    steps = [];
  } else {
    steps = mergeReduce(
      state.options.targetValue,
      state.options.toLevel,
      state.options.fromLevel,
      {}
    );
  }

  return {
    steps
  };
};

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
