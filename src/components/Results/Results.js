import React from "react";

import "./Results.less";

const Results = ({ steps }) => (
  <div class="merge-results">
    <table>
      <thead>
        <tr>
          <th>Merge Chain</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {steps.map((step, idx) => (
          <tr key={idx}>
            <td>
              <span>
                {step.previousValue} x level {step.previousRadix}
              </span>
            </td>
            <td>
              <span>
                {step.nextValue} x level {step.nextRadix}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Results;
