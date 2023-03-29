import { BrowserRouter, Route, Routes } from "react-router-dom";
import Formik1 from "./Formik1";
import Formik2 from "./Formik2";

function App() {
  console.log("render");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formik1 />} />
          <Route path="/formik2" element={<Formik2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
