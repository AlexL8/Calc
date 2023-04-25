import './App.css';

function App() {
  return (
    <div className="calc">
        <div className="wrapper">
            <div className="calc-display">
              <p>0</p>
            </div>
            <div className="buttons">
              <button className="btn">AC</button>
              <button className="btn">+/-</button>
              <button className="btn">%</button>
              <button className="btn bg-orange"></button>

              <button className="btn">7</button>
              <button className="btn">8</button>
              <button className="btn">9</button>
              <button className="btn bg-orange">/</button>

              <button className="btn">4</button>
              <button className="btn">5</button>
              <button className="btn ">6</button>
              <button className="btn bg-orange">x</button>

              <button className="btn">1</button>
              <button className="btn">2</button>
              <button className="btn">3</button>
              <button className="btn bg-orange">-</button>

              <button className="btn">,</button>
              <button className="btn">0</button>
              <button className="btn">=</button>
              <button className="btn bg-orange">+</button>
            </div>
        </div>
    </div>
  );
}

export default App;
