import { createSelector } from "reselect";
import mergeReduce from "./mergeReduce";

const getTargetValue = state => state.options.targetValue;
const getFromLevel = state => state.options.fromLevel;
const getToLevel = state => state.options.toLevel;
const getInventory = state => state.inventory;

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
