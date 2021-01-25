import "./App.css";
import { Car, Home, Name, Pet, MyComponent, MyName } from "./topics/funcComps";
import { Counter, GetName, Status, ToggleButton } from "./topics/useStateHook";

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
      <Status isActive={false} />
      <ToggleButton button={true} />
      <GetName name="njs" />
      <Counter value={0}>Counter</Counter>
    </div>
  );
}

export default App;
