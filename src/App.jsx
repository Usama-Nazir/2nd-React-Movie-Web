import Movies from "./project2/Movies";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies/>} />
        {/* <Route path="/" element={<Unsplash/>} />
        <Route path="/check" element={<Checkout />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/card" element={<Card/>} /> */}
      </Routes>
    </BrowserRouter>
    {/* <Ustate/> */}
</>
  );
}

export default App
