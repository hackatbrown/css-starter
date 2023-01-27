import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <h1>
                    Flex container with flex direction "row" (note that we apply the properties for this text using the "h1" selector)
                </h1>
            </div>
            <div className="flex-container-row">
                <div className="flex-item">
                    Item 1
                </div>
                <div className="flex-item">
                    Item 2
                </div>
                <div className="flex-item">
                    Item 3
                </div>
                <div className="flex-item">
                    Item 4
                </div>
                <div className="flex-item">
                    Item 5
                </div>
                <div className="flex-item">
                    Item 6
                </div>
            </div>
            <div className="header">
                <h2>
                    Flex container with flex direction "column" (note that we apply the properties for this text using the "h2" selector)
                </h2>
            </div>
            <div className="flex-container-col">
                <div className="flex-item">
                    Item 1
                </div>
                <div className="flex-item">
                    Item 2
                </div>
                <div className="flex-item">
                    Item 3
                </div>
            </div>
            <div className="header">
                <h3>
                    You can also nest flex containers!  (note that we apply the properties for this text using the "h3" selector)
                </h3>
            </div>
            <div className="flex-container-row">
                <div className="flex-container-col">
                    <div className="flex-item">
                        Item 1
                    </div>
                    <div className="flex-item">
                        Item 2
                    </div>
                    <div className="flex-item">
                        Item 3
                    </div>
                </div>
                <div className="flex-container-col">
                    <div className="flex-item">
                        Item 4
                    </div>
                    <div className="flex-item">
                        Item 5
                    </div>
                    <div className="flex-item">
                        Item 6
                    </div>
                </div>
                <div className="flex-container-col">
                    <div className="flex-item">
                        Item 7
                    </div>
                    <div className="flex-item">
                        Item 8
                    </div>
                    <div className="flex-item">
                        Item 9
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
