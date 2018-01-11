const INVENTORY_UPDATED = "INVENTORY_UPDATED";

const defaultState = {};

const inventory = (state = defaultState, action) => {
  switch (action.type) {
    case INVENTORY_UPDATED:
      return {
        ...state,
        [action.payload.level]: action.payload.count
      };

    default:
      return state;
  }
};

export default inventory;

export { INVENTORY_UPDATED };
