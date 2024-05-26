import { useState, useEffect } from "react";

const storedItems = JSON.parse(localStorage.getItem("items")) || [];

export default function ShoppingListDemo() {
  const [items, setItems] = useState(storedItems);

  useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem("items", json);
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  function onRemoveItem(itemToRemove) {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  }

  function onAddItem(itemToAdd) {
    const newItem = { name: itemToAdd, bought: false };
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const itemToAdd = form.item.value.trim();
    onAddItem(itemToAdd);
    form.reset();
  }

  function handleMarkBought(event) {
    const item = event.target.closest("li");
    if (!item) {
      return;
    }
    const itemName = item.firstChild.textContent;
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.name === itemName) {
          return { ...item, bought: !item.bought };
        }
        return item;
      })
    );
  }

  return (
    <>
      <form className="row g-2" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            name="item"
            placeholder="Add a new item"
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
      <hr />
      {items.length > 0 && (
        <small>*Double click na item to mark it as bought.</small>
      )}
      <ul className="container" onDoubleClick={handleMarkBought}>
        {items.map((item, index) => {
          return (
            <li className="row border-bottom" key={item.name + index}>
              <div
                className={
                  "col-11 p-1" +
                  (item.bought === true ? " text-decoration-line-through" : "")
                }
              >
                {item.name}
              </div>
              <div className="col-1 p-1">
                <button
                  className="badge text-bg-danger"
                  onClick={() => onRemoveItem(item)}
                >
                  x
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
