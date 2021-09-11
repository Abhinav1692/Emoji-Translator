import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  // "🧀󠁧󠁢󠁥󠁮󠁧󠁢󠁥󠁮": "Chesse Wedge",
  // "🍖󠁧󠁢󠁥󠁮󠁧󠁧󠁢󠁥󠁮󠁧": "Meat on bone",
  "🍿": "Popcorn",
  "🍨": "Icecream",
  "🍣": "Sushi",
  "🎂":
    "Birthday cake" /** add some more to show how the app now expands when there's new data */,
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich"
};

const emojis = Object.keys(emojiDictionary);
//var shoppingList = ["chicken", "mutton", "eggs", "bread"];

export default function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("Translation will come here");
  var [emoji, setEmoji] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    setEmoji(userInput);
    // if userInput in emojiDictionar
    // var meaning;
    if (userInput.length === 0) {
      setEmojiMeaning("Input field is empty");
    } else if (userInput in emojiDictionary) {
      setEmojiMeaning(emojiDictionary[userInput]);
    } else {
      setEmojiMeaning("This emoji is not present in our database");
    }
  }

  function emojiClickHandler(userInput) {
    setEmojiMeaning(emojiDictionary[userInput]);
  }

  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="search for emoji here"
        value={emoji}
      ></input>
      <h3>{emoji}</h3>
      <h3>{emojiMeaning}</h3>
      <h3> Emojies we know</h3>
      {
        //mapping a listClickHandler on the list item
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)} //():asynchronous func.
            style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  );
}
