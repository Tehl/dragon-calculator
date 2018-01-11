import { INVENTORY_UPDATED } from "../reducers/inventory";

function setInventoryCount(level, count) {
  return {
    type: INVENTORY_UPDATED,
    payload: {
      level,
      count
    }
  };
}

export { setInventoryCount };
