import "./App.css";
import { useState } from "react";

function App() {
  var emojidic = {
    "🙂": "smile",
    hey: "there",
  };

  var emojis = Object.keys(emojidic);

  const [meaning, setMeaning] = useState("");

  function eventHandler(event) {
    var emojiInput = event.target.value;
    var meaning = emojidic[emojiInput];

    if (meaning === undefined) {
      meaning = "we do not have the emoji in our database";
    }
    setMeaning(meaning);
  }

  const emojiClickHandler = (item) => {
    var meaning = emojidic[item];

    if (meaning === undefined) {
      meaning = "we do not have the emoji in our database";
    }
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <header>
        <h1 className="logo">EmojiMeans</h1>
      </header>

      <div className="main">
        <h1 className="text">
          {" "}
          hey there wanna know the meaning of emoticons{" "}
        </h1>

        <input className="input" onChange={eventHandler} />
        {/* <button onClick={}>click me</button> */}
        <div className="meaning">{meaning}</div>

        <div className="emojiTab">
          <ul>
            {emojis.map((item) => (
              <span
                key={item}
                className="emoji-bit"
                onClick={() => {
                  emojiClickHandler(item);
                }}
              >
                {item}
              </span>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
