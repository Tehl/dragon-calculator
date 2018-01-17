import React from "react";

import "./MergeSurplus.less";

const MergeSurplus = ({ levels, updateInventory }) => {
  const onTransferInventoryClicked = event => {
    event.preventDefault();

    const newInventory = {};
    levels.forEach(level => (newInventory[level.level] = level.surplus));

    updateInventory(newInventory);
  };

  return (
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
        <tfoot>
          <tr>
            <td>
              <a
                href="#"
                onClick={onTransferInventoryClicked}
                className="transfer-inventory"
              >
                Transfer
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MergeSurplus;
