import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-header-1">Colour Flipper</p>
        <p>Simple Hex</p>
      </header>
      <body className="colour-page">
        <div className="colour-box">
          BACKGROUND COLOUR:{" "}
          <span className="colour" id="colourId">
            {" "}
            PINK{" "}
          </span>
        </div>
        <button className="btn-hero" id="btn" onClick={changeColor}>
          CLICK ME
        </button>
      </body>
    </div>
  );
}
function changeColor() {
  const hexNum = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const color = document.querySelector(".colour-page");
  const colorCode = document.getElementById("colourId");
  let x = "#";
  for (let i = 0; i < 6; i++) {
    x += hexNum[Math.floor(Math.random() * hexNum.length)];
  }
  colorCode.textContent = x;
  color.style.backgroundColor = x;
}
export default App;
