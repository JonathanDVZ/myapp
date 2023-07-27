import Checkbox from "./components/Checkbox";

const App = () => (
  <div className="App">
    <header>
      <h1>My App</h1>
    </header>

    <Checkbox id="checkbox-1" text="Checkbox 1" />
    <Checkbox id="checkbox-2" text="Checkbox 2" value={true} />
    <Checkbox id="checkbox-3" text="Checkbox 3" value={true} />
    <Checkbox id="checkbox-4" text="Checkbox 4" />
  </div>
);

export default App;
