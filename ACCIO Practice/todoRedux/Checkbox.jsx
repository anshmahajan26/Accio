
import { useDispatch, useSelector } from "react-redux";
import { toggleAll, toggleItem } from "./checkboxSlice";

function Checkbox() {
  const items = useSelector((state) => state.checkbox);
  const dispatch = useDispatch();

  const allChecked =
    items.length > 0 &&
    items.every((item) => item.checked);

  const selectedCount = items.filter(
    (item) => item.checked
  ).length;

  return (
    <div>
      <h2>Master Checkbox</h2>

      <label>
        <input
          type="checkbox"
          checked={allChecked}
          onChange={() => dispatch(toggleAll())}
        />
        Select All
      </label>

      <hr />

      {items.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => dispatch(toggleItem(item.id))}
            />
            {item.name}
          </label>
        </div>
      ))}

      <h3>
        Selected: {selectedCount} / {items.length}
      </h3>
    </div>
  );
}

export default Checkbox;
