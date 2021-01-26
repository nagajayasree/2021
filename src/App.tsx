import "./App.css";
import { Car, Home, Name, Pet, MyComponent, MyName } from "./topics/funcComps";
import { Counter, GetName, Status, ToggleButton } from "./topics/useStateHook";
import { ReducerCounter } from "./topics/useReducerHook";
import { Delay } from "./topics/useEffectHook";
import { MsgComp } from "./topics/classComps";

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
      <ReducerCounter />
      <Delay msg={`Hello Hooks`} timeInMs={5000} />
      <MsgComp title={"Send Message"} />
    </div>
  );
}

export default App;
