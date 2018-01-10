import {
  FROM_LEVEL_CHANGED,
  TO_LEVEL_CHANGED,
  TARGET_VALUE_CHANGED
} from "../reducers/options";

function setFromLevel(fromLevel) {
  return {
    type: FROM_LEVEL_CHANGED,
    payload: {
      fromLevel
    }
  };
}

function setToLevel(toLevel) {
  return {
    type: TO_LEVEL_CHANGED,
    payload: {
      toLevel
    }
  };
}

function setTargetValue(targetValue) {
  return {
    type: TARGET_VALUE_CHANGED,
    payload: {
      targetValue
    }
  };
}

export { setFromLevel, setToLevel, setTargetValue };
