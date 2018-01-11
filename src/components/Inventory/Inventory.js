import React from "react";

import "./Inventory.less";

const InventoryItem = ({ level, count, onChange }) => (
  <tr>
    <td className="inventory-item">
      <input type="text" value={count} onChange={onChange} />
      <span>x Level {level}</span>
    </td>
  </tr>
);

const Inventory = ({
  fromLevel,
  toLevel,
  currentInventory,
  onInventoryUpdated
}) => {
  const onInventoryValueChanged = level => event => {
    const value = Number(event.target.value);
    if (!isNaN(value)) {
      onInventoryUpdated(level, value);
    }
  };

  const items = [];
  for (let i = toLevel; i >= fromLevel; i -= 1) {
    items.push(
      <InventoryItem
        key={i}
        level={i}
        count={currentInventory[i] || 0}
        onChange={onInventoryValueChanged(i)}
      />
    );
  }

  return (
    <div className="current-inventory">
      <table>
        <thead>
          <tr>
            <th className="header">Current Inventory</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};

export default Inventory;
