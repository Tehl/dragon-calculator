import React from "react";

import "./Options.less";

const maxLevel = 18;

function getAvailableLevels(minimumLevel) {
  const levels = [];

  for (let i = minimumLevel; i <= maxLevel; i += 1) {
    levels.push(
      <option key={i} value={i}>
        Level {i}
      </option>
    );
  }

  return levels;
}

const Options = ({
  fromLevel,
  toLevel,
  targetValue,
  onFromLevelChanged,
  onToLevelChanged,
  onTargetValueChanged
}) => {
  const onFromLevelChangedInternal = event =>
    onFromLevelChanged(Number(event.target.value));
  const onToLevelChangedInternal = event =>
    onToLevelChanged(Number(event.target.value));
  const onTargetValueChangedInternal = event => {
    const value = Number(event.target.value);
    if (!isNaN(value)) {
      onTargetValueChanged(value);
    }
  };

  return (
    <div className="merge-options">
      <span>Merge from</span>
      <select value={fromLevel} onChange={onFromLevelChangedInternal}>
        {getAvailableLevels(0)}
      </select>
      <span>to produce</span>
      <input
        type="text"
        value={targetValue}
        onChange={onTargetValueChangedInternal}
      />
      <span>x</span>
      <select value={toLevel} onChange={onToLevelChangedInternal}>
        {getAvailableLevels(fromLevel + 1)}
      </select>
    </div>
  );
};

export default Options;
