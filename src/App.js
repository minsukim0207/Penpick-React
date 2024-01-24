import { BrowserRouter } from "react-router-dom";
import QnA from "./Components/QnA";

function App() {
  return (
    <div>
      <BrowserRouter>
        <QnA />
      </BrowserRouter>
    </div>
  );
}

export default App;
