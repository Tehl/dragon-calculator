import { INVENTORY_UPDATED, INVENTORY_CLEARED } from "../reducers/inventory";

function setInventoryCountByLevel(level, count) {
  return {
    type: INVENTORY_UPDATED,
    payload: {
      [level]: count
    }
  };
}

function setAllInventory(inventory) {
  return {
    type: INVENTORY_UPDATED,
    payload: inventory
  };
}

function clearInventory() {
  return {
    type: INVENTORY_CLEARED,
    payload: {}
  };
}

export { setInventoryCountByLevel, setAllInventory, clearInventory };
