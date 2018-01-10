function mergeReduce(value, fromRadix, toRadix, owned) {
  if (fromRadix < toRadix) {
    throw new Error("fromRadix must be greater than toRadix");
  }

  const nextRadix = fromRadix - 1;
  if (nextRadix < 0) {
    return [];
  }

  const valueFives = Math.floor(value / 2);
  const valueThrees = value - valueFives * 2;
  let nextValue = valueFives * 5 + valueThrees * 3;

  let output = {
    previousValue: value,
    previousRadix: fromRadix,
    nextValue: nextValue,
    nextRadix: nextRadix
  };

  if (nextRadix === toRadix) {
    return [output];
  }

  const ownedAtNextRadix = owned[nextRadix];
  if (ownedAtNextRadix) {
    const offset = Math.min(nextValue, ownedAtNextRadix);
    output.usedFromStore = offset;
    nextValue -= offset;
  }

  return [output, ...mergeReduce(nextValue, nextRadix, toRadix, owned)];
}

export default mergeReduce;
