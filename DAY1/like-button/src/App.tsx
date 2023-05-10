import React, { useState } from "react";
import "./App.css";
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
        <RetweetButton />
      </header>
    </div>
  );
}
 
function LikeButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => setCount(count + 1);
  return <span className="likeButton" onClick={handleClick}>♥ {count}</span>;
}
 

function RetweetButton() {
  const [retweet, setRetweet] = useState(999);
  const handleClick = () => setRetweet(retweet + 1);
  return <span className="retweetButton" onClick={handleClick}>→{retweet}</span>;
}
export default App;