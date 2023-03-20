import "./App.css";
import { ReactP5Wrapper } from "react-p5-wrapper";
import bloob from "./sketches/bloob";

function App() {
  return (
    <div className="App">
      <ReactP5Wrapper sketch={bloob} />
    </div>
  );
}

export default App;
