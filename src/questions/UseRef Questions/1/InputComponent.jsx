//editing text after clicking the send btton and showing updated text
//the input can't be edit
//solution is useRef
//It stores the updated value between renders and shows the updated value

import { useRef, useState } from "react";

//state will always reset the normal variable
export default function InputComponent() {
  const [inputText, setInputText] = useState("");
  let inputref = useRef(null);
  const handleRef = () => {
    setTimeout(() => {
      alert("Sending: " + inputref.current);
    }, 3000);
  };
  const onInputChange = (e) => {
    setInputText(e.target.value);
    inputref.current = e.target.value;
  };
  return (
    <div className="App">
      <label>Name:</label>
      <input type="text" onChange={onInputChange} />
      <button onClick={handleRef}>Send</button>
    </div>
  );
}
