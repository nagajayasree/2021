import "./App.css";
import { Name, Car, Pet } from "./topics/funcComps";

function App() {
  return (
    <div className="App">
      <Name firstName="FirstName" />
      <Car name="Alto" />
      <Pet name="browny" />
    </div>
  );
}

export default App;
