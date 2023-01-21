import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectExcerciseIsEmpty } from "./store/excercise/excercise.selector";

import { Home } from "./pages/home/home.page";
import { Excercise } from "./components/excercise/excercise.component";
import { Result } from "./components/result/result.component";

function App() {
  const isExcerciseEmpty = useSelector(selectExcerciseIsEmpty);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/excercise"
        element={isExcerciseEmpty ? <Excercise /> : <Navigate to="/" />}
      />
      <Route
        path="/results"
        element={!isExcerciseEmpty ? <Result /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
