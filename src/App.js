import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import New from "./pages/New"
import Word from "./pages/Word"
import NotFound from "./pages/NotFound";
import WordList from "./components/WordList";

import React from "react";
import { loadWordsFB } from "./redux/modules/Dictionary"
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadWordsFB());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home list={WordList}/>} />
          <Route path="/new" element={<New />} />
          <Route path="/word/:id" element={<Word />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;