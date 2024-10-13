import logo from './logo.svg';
import './App.css';

import menuItem1 from "./assets/pizza.avif";
import menuItem2 from "./assets/salad.avif";
import menuItem3 from "./assets/spaghetti.avif";


function App() {
    return (
        <div className="App">
        <h1>Our Menu</h1> {/* Task 11: add an aria-label */}
        <p>Take a look at our delicious options!</p>

        <div className="menucard"> {/* Task 11: add an aria-label */}
          {/* Card 1 */}
          <div className="card">
            <img src={menuItem1} alt="Agosto 20 2023" class="m-image"/>
            <h2>Pepperoni Pizza</h2>
            <p>Try our delicious Pepperoni Pizza! 10.99</p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={menuItem2} alt="Julio 15 2023" class="m-image"/>
            <h2>Salad</h2>
            <p>Try our amazing and healthy Salad! 7.99</p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={menuItem3} alt="Junio 18 2023" class="m-image"/>
            <h2>Spaghetti</h2>
            <p>Try our wonderful Spaghetti. 11.99</p>
          </div>

        </div>

      </div>
    );
}



export default App;
