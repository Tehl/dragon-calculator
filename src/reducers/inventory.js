const INVENTORY_UPDATED = "INVENTORY_UPDATED";
const INVENTORY_CLEARED = "INVENTORY_CLEARED";

const defaultState = {};

const inventory = (state = defaultState, action) => {
  switch (action.type) {
    case INVENTORY_UPDATED:
      return {
        ...state,
        [action.payload.level]: action.payload.count
      };

    case INVENTORY_CLEARED:
      return defaultState;

    default:
      return state;
  }
};

export default inventory;

export { INVENTORY_UPDATED, INVENTORY_CLEARED };
