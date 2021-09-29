import "./App.css";
import { useState } from "react";
import { emojidic } from "./data";
function App() {
  var emojis = Object.keys(emojidic);

  const [meaning, setMeaning] = useState("");

  function eventHandler(event) {
    var emojiInput = event.target.value;
    var meaning = emojidic[emojiInput];

    if (meaning === undefined) {
      meaning = "Sorry we do not have this emoji in our database";
    }
    setMeaning(meaning);
  }

  const emojiClickHandler = (item) => {
    var meaning = emojidic[item];

    if (meaning === undefined) {
      meaning = "Sorry we do not have this emoji in our database";
    }
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <header>
        <h1 className="logo">EmojiMeans</h1>
      </header>

      <div className="main">
        <h1 className="text">Enter the emoji you want to decode!</h1>

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
                {" "}
                {item}
              </span>
            ))}
          </ul>
        </div>
      </div>

      <footer>
        <ul>
          <li>
            <a href="https://github.com/Surbhi84">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://medium.com/@subuhikukreti">
              <i class="fab fa-medium-m"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/surbhi-kukreti-a91b0b163">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://surbhikukreti.netlify.app/">
              <i class="fas fa-laptop"></i>
            </a>
          </li>
        </ul>

        <div id="legacyText">© 2021 | Surbhi Kukreti</div>
      </footer>
    </div>
  );
}

export default App;
