import { Navbar } from "./components/navbar/index";
import { availableRoutes } from "./utility/routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      {availableRoutes}
    </div>
  );
}

export default App;
