import { createSelector } from "reselect";
import { getTargetValue } from "../reducers/options";
import { getEfficientMergeChain } from "./chains";

function calculateSurplus(targetValue, chain) {
  const values = [];

  for (let i = 0; i < chain.length; i += 1) {
    let required;
    if (i === 0) {
      required = targetValue;
    } else {
      required = chain[i - 1].nextValue;
    }
    const produced = chain[i].previousValue;
    const surplus = Math.max(produced - required, 0);

    values.push({
      level: chain[i].previousRadix,
      surplus: surplus
    });
  }

  return values;
}

const getEfficientMergeSurplus = createSelector(
  getTargetValue,
  getEfficientMergeChain,
  calculateSurplus
);

export { getEfficientMergeSurplus };
