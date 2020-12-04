import Image1 from './assets/Flower1.png';
import './App.css';
import Tilt from 'react-vanilla-tilt';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Guru Scott</h1>

        <div class="flex-container">
          <Tilt class="tilt">
            <div class="card">
              <img src={Image1} />
              <h4>Traveling</h4>
              <div class="content">
                <p>Guru Scott is showing me how to use React JS with Vanilla Tilt Effect!</p>
              </div>
              <button class="button">Click</button>
            </div>
          </Tilt>
          

        </div>
        
        
      </header>
    </div>
  );
}

export default App;
