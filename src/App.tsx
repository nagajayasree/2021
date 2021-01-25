import "./App.css";
import { Car, Home, Name, Pet, MyComponent, MyName } from "./topics/funcComps";
import { GetName, Status, ToggleButton } from "./topics/hooks";

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
    </div>
  );
}

export default App;
