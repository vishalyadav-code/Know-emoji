import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "☹️": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [emojiInput, setEmojiInput] = useState("");
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var emojiInput = event.target.value;
    setEmojiInput(emojiInput);

    if (emojiInput in emojiDictionary) {
      setMeaning(emojiDictionary[emojiInput]);
    } else if (emojiInput === "") {
      setMeaning("");
    } else {
      setMeaning("Unfortunately, its not a part of our database ");
    }
  }
  function emojiClickHandler(item) {
    setEmojiInput(item);
    setMeaning(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <nav className="nav">
        <h1>
          <i> Emoji Dictionary! </i>
        </h1>
      </nav>

      <div className="about">
        Do you also find hard to figure out meaning of emojis? 🤔 So here is
        emoji dictionary for you,wherein you can enter emoji and we will tell
        you its meaning in seconds! 🤓
      </div>

      <input
        id="emo-input"
        onChange={emojiInputHandler}
        placeholder="Enter or choose an emoji to know the meaning"
      />
      <h1 className="emojiweknow">
        <i>emojis we know 👇 </i>
      </h1>
      <h2>{emojiInput}</h2>
      <h3>
        <i>{meaning}</i>
      </h3>
      <div className="display-flex">
        {emojiWeKnow.map((item) => (
          <div
            className="flex-items"
            key={item}
            onClick={() => emojiClickHandler(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <footer class="footer">Made by Vishal Yadav </footer>
    </div>
  );
}
