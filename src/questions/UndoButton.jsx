//Undo send text after clicking the Undo btton
//solution is useRef
//It stores the updated value between renders and shows the updated value

import { useRef, useState } from "react";

//state will always reset the normal variable
export default function UndoSendText() {
  const [inputText, setInputText] = useState("");
  const [btnName, setBtnName] = useState("Send");
  const [flag, setFlag] = useState(false);
  let timeInstant = useRef(null);
  const handleRef = () => {
    setBtnName("Sending");
    setFlag(true);
    timeInstant.current = setTimeout(() => {
      alert("Sending: " + inputText);
      setBtnName("Send");
      setFlag(false);
    }, 3000);
  };
  const onInputChange = (e) => {
    setInputText(e.target.value);
  };
  const undoMessage = (e) => {
    clearTimeout(timeInstant.current);
    setFlag(false);
    setBtnName("Send");
  };
  return (
    <div className="App">
      <label>Name:</label>
      <input type="text" onChange={onInputChange} />
      <button disabled={flag} onClick={handleRef}>
        {btnName}
      </button>
      {flag && <button onClick={undoMessage}>Undo</button>}
    </div>
  );
}
