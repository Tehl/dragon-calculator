import { connect } from "react-redux";
import Inventory from "./Inventory";
import { setInventoryCount } from "../../actions/inventory";

const mapStateToProps = state => {
  return {
    fromLevel: state.options.fromLevel,
    toLevel: state.options.toLevel,
    currentInventory: state.inventory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInventoryUpdated: (level, count) =>
      dispatch(setInventoryCount(level, count))
  };
};

const InventoryContainer = connect(mapStateToProps, mapDispatchToProps)(
  Inventory
);

export default InventoryContainer;
