import { createSelector } from "reselect";
import mergeReduce from "./mergeReduce";
import { getFromLevel, getToLevel, getTargetValue } from "../reducers/options";
import { getInventory } from "../reducers/inventory";

const getMergeChain = efficient => (
  targetValue,
  fromLevel,
  toLevel,
  inventory
) => {
  if (!targetValue) {
    return [];
  }

  return mergeReduce(targetValue, toLevel, fromLevel, inventory, efficient);
};

const getDirectMergeChain = createSelector(
  getTargetValue,
  getFromLevel,
  getToLevel,
  getInventory,
  getMergeChain(false)
);

const getEfficientMergeChain = createSelector(
  getTargetValue,
  getFromLevel,
  getToLevel,
  getInventory,
  getMergeChain(true)
);

export { getDirectMergeChain, getEfficientMergeChain };
