import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <canvas id="myCanvas" width="400" height="400"></canvas>
      <script src="random-lines.js"></script>
      <script>
        const canvas = document.getElementById("myCanvas");
        drawRandomLines(canvas, 10); // draws 10 random lines on the canvas
      </script>

      </header>
    </div>
  );
}

// const canvas = document.getElementById("canvas");
// drawRandomLines(canvas, 10); // draws 10 random lines on the canvas


function drawRandomLines(canvas, numLines) {
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < numLines; i++) {
    const x1 = Math.floor(Math.random() * canvas.width);
    const y1 = Math.floor(Math.random() * canvas.height);
    const x2 = Math.floor(Math.random() * canvas.width);
    const y2 = Math.floor(Math.random() * canvas.height);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}


export default App;
