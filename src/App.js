import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QnA from "./Components/QnA";
//import QuestionDetail from "./Components/QuestionDetail";
import QuestionWrite from "./Components/QuestionWrite";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<QnA />} />
        <Route path="/question/write" element={<QuestionWrite />} />
        {/* <Route path="/question/:questionNum" element={<QuestionDetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
