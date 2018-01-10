import React from "react";

const Results = ({ steps }) => (
  <table>
    <tbody>
      {steps.map((step, idx) => (
        <tr key={idx}>
          <td>
            {step.previousValue} x level {step.previousRadix}
          </td>
          <td>
            {step.nextValue} x level {step.nextRadix}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Results;
