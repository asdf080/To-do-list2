import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
// https://www.npmjs.com/package/react-sortablejs
import "./Iterate.css";
import moon from "./moon-solid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";

export default function Iterate() {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputTxt, setInputTxt] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputTxt(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputTxt || "_",
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputTxt("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  return (
    <div id="Wrap">
      <section>
        <header>
          <h1>T O D O</h1>
          <img src={moon} alt="moon" />
        </header>
        <span id="inputBox">
          <input type="text" value={inputTxt} onChange={onChange} />
          <button onClick={onClick}>
            <FontAwesomeIcon
              icon={faPlus}
              size="lg"
              style={{ color: "#69adda" }}
            />
          </button>
        </span>
        <ul className="m-6">
          <ReactSortable list={names} setList={setNames}>
            {names.map((name) => (
              <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
                {name.text}
                <button onClick={() => onRemove(name.id)}>
                  <FontAwesomeIcon icon={faX} size="xs" />
                </button>
              </li>
            ))}
          </ReactSortable>
        </ul>
        <span>Drag and drop to reorder list</span>
      </section>
    </div>
  );
}
