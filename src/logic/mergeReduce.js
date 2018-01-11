function mergeReduce(value, fromRadix, toRadix, owned, efficient) {
  if (fromRadix < toRadix) {
    throw new Error("fromRadix must be greater than toRadix");
  }

  const nextRadix = fromRadix - 1;
  if (nextRadix < 0) {
    return [];
  }

  let targetValue = value;
  if (efficient && targetValue % 2 === 1) {
    targetValue += 1;
  }

  const valueFives = Math.floor(targetValue / 2);
  const valueThrees = targetValue - valueFives * 2;

  let nextValue = valueFives * 5 + valueThrees * 3;

  let output = {
    previousValue: targetValue,
    previousRadix: fromRadix,
    nextValue: nextValue,
    nextRadix: nextRadix
  };

  if (nextRadix === toRadix) {
    return [output];
  }

  const ownedAtNextRadix = owned[nextRadix];
  let offset;
  if (ownedAtNextRadix) {
    offset = Math.min(nextValue, ownedAtNextRadix);
    nextValue -= offset;
  }

  const result = [
    output,
    ...mergeReduce(nextValue, nextRadix, toRadix, owned, efficient)
  ];

  if (result.length > 1 && offset) {
    result[1].usedFromStore = offset;
  }

  return result;
}

export default mergeReduce;
