import React from "react";

import "./Results.less";

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

const Results = ({ steps }) => (
  <div className="merge-results">
    <table>
      <thead>
        <tr>
          <th className="header">Merge Chain</th>
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

export default Results;
