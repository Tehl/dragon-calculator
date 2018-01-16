import React from "react";

import "./MergeSurplus.less";

const MergeSurplus = ({ levels }) => (
  <div className="merge-surplus">
    <table>
      <thead>
        <tr>
          <th className="header">Surplus</th>
        </tr>
      </thead>
      <tbody>
        {levels.map((level, idx) => (
          <tr key={idx} className={level.surplus ? "has-surplus" : undefined}>
            <td>
              {level.surplus} x level {level.level}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MergeSurplus;
