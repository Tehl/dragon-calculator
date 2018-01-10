import { connect } from "react-redux";
import Options from "./Options";
import {
  setFromLevel,
  setToLevel,
  setTargetValue
} from "../../actions/options";

const mapStateToProps = state => {
  return {
    fromLevel: state.options.fromLevel,
    toLevel: state.options.toLevel,
    targetValue: state.options.targetValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFromLevelChanged: fromLevel => dispatch(setFromLevel(fromLevel)),
    onToLevelChanged: toLevel => dispatch(setToLevel(toLevel)),
    onTargetValueChanged: targetValue => dispatch(setTargetValue(targetValue))
  };
};

const OptionsContainer = connect(mapStateToProps, mapDispatchToProps)(Options);

export default OptionsContainer;
