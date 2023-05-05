
import {Route, Routes} from "react-router-dom"
import Pokemon from "./screens/Pokemon";
import WordsPerMinute from "./screens/WordsPerMinute";
import Memotest from "./screens/Memotest";

function App() {
  return (
   <Routes>
    <Route element={<Memotest/>} path={"/memotest"} />
    <Route element={<Pokemon/>} path={"/pokemon"} />
    <Route element={<WordsPerMinute/>} path={"/wpm"} />
   </Routes>
  );

   
}
export default App;
