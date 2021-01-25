import "./App.css";
import { Car, Home, Name, Pet, MyComponent, MyName } from "./topics/funcComps";

function App() {
  return (
    <div className="App">
      <Name firstName="FirstName">Get Name</Name>
      <Car name="Alto">Car Details</Car>
      <Pet name="browny" />
      <Home name="XYZ" place="Place">
        My Home
      </Home>
      <MyComponent name="name">MyComponent</MyComponent>
      <MyName />
    </div>
  );
}

export default App;
