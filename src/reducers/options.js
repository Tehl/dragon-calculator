const FROM_LEVEL_CHANGED = "FROM_LEVEL_CHANGED";
const TO_LEVEL_CHANGED = "TO_LEVEL_CHANGED";
const TARGET_VALUE_CHANGED = "TARGET_VALUE_CHANGED";

const defaultState = {
  fromLevel: 1,
  toLevel: 10,
  targetValue: 1
};

const options = (state = defaultState, action) => {
  switch (action.type) {
    case FROM_LEVEL_CHANGED:
      return {
        ...state,
        fromLevel: action.payload.fromLevel,
        toLevel: Math.max(action.payload.fromLevel + 1, state.toLevel)
      };

    case TO_LEVEL_CHANGED:
      return {
        ...state,
        toLevel: action.payload.toLevel
      };

    case TARGET_VALUE_CHANGED:
      return {
        ...state,
        targetValue: action.payload.targetValue
      };

    default:
      return state;
  }
};

export default options;

export { FROM_LEVEL_CHANGED, TO_LEVEL_CHANGED, TARGET_VALUE_CHANGED };
