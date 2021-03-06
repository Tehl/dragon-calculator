import React from "react";

import "./MergeChain.less";

const PreviousValue = ({ step }) => {
  let className;
  let title;

  if (step.usedFromStore) {
    className = "used-inventory";
    title = "Used " + step.usedFromStore + " items from inventory";
  }

  return (
    <span className={className} title={title}>
      {step.previousValue} x level {step.previousRadix}
    </span>
  );
};

const NextValue = ({ step }) => (
  <span>
    {step.nextValue} x level {step.nextRadix}
  </span>
);

const MergeChain = ({ steps, title }) => (
  <div className="merge-chain">
    <table>
      <thead>
        <tr>
          <th className="header">{title}</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {steps.map((step, idx) => (
          <tr key={idx}>
            <td>
              <PreviousValue step={step} />
            </td>
            <td>
              <NextValue step={step} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MergeChain;
