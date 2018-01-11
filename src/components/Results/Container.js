import { connect } from "react-redux";
import {
  getDirectMergeChain,
  getEfficientMergeChain
} from "../../logic/mergeChains";
import Results from "./Results";

const mapStateToProps = (state, ownProps) => {
  let steps;

  if (ownProps.efficient) {
    steps = getEfficientMergeChain(state);
  } else {
    steps = getDirectMergeChain(state);
  }

  return {
    steps
  };
};

const ResultsContainer = connect(mapStateToProps)(Results);

export default ResultsContainer;
