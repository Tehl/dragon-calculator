import { connect } from "react-redux";
import { getEfficientMergeSurplus } from "../../logic/surplus";
import MergeSurplus from "./MergeSurplus";

const mapStateToProps = state => {
  return {
    levels: getEfficientMergeSurplus(state)
  };
};

const MergeSurplusContainer = connect(mapStateToProps)(MergeSurplus);

export default MergeSurplusContainer;
