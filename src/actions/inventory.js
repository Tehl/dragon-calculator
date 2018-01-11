import { INVENTORY_UPDATED, INVENTORY_CLEARED } from "../reducers/inventory";

function setInventoryCount(level, count) {
  return {
    type: INVENTORY_UPDATED,
    payload: {
      level,
      count
    }
  };
}

function clearInventory() {
  return {
    type: INVENTORY_CLEARED,
    payload: {}
  };
}

export { setInventoryCount, clearInventory };
