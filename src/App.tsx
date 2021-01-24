import "./App.css";
import { Name, Car } from "./topics/funcComps";

function App() {
  return (
    <div className="App">
      <Name firstName="FirstName" lastName="LastName" />
      <Car name="Alto" color="White" />
    </div>
  );
}

export default App;
