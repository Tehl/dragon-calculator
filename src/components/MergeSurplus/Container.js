import { connect } from "react-redux";
import { getEfficientMergeSurplus } from "../../logic/surplus";
import { setAllInventory } from "../../actions/inventory";
import MergeSurplus from "./MergeSurplus";

const mapStateToProps = state => {
  return {
    levels: getEfficientMergeSurplus(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateInventory: inventory => dispatch(setAllInventory(inventory))
  };
};

const MergeSurplusContainer = connect(mapStateToProps, mapDispatchToProps)(
  MergeSurplus
);

export default MergeSurplusContainer;
