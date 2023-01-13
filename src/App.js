import React, { useState, useEffect } from "react";
// import DogPics from "./DogPics";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    // update the document's title when the component renders
    document.title = text;
  }, [text]);

  useEffect(() => {
    // reset the count variable back to 0 after 5 seconds
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

   return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* <DogPics /> */}
    </div>
  );
}

export default App;
