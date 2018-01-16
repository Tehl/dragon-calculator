import { connect } from "react-redux";
import {
  getDirectMergeChain,
  getEfficientMergeChain
} from "../../logic/chains";
import MergeChain from "./MergeChain";

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

const MergeChainContainer = connect(mapStateToProps)(MergeChain);

export default MergeChainContainer;
