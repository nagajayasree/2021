import "./App.css";
import { Name, Car, Pet, Home } from "./topics/funcComps";

function App() {
  return (
    <div className="App">
      <Name firstName="FirstName">Get Name</Name>
      <Car name="Alto">Car Details</Car>
      <Pet name="browny" />
      <Home name="XYZ" place="Place">
        My Home
      </Home>
    </div>
  );
}

export default App;
