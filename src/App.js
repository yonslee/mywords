import React, { useRef } from "react";

import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import WordsHeader from "./components/WordsHeader";

const reducer = (state, action) => {
  let newState = [];
  switch(action.type){
    case 'INIT':{
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'DELETE': {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT' : {
      newState = state.map((it) =>
        it.id === action.data.id? {...action.data}: it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const WordsContext = React.createContext();

function App() {

  const [data, dispatch] = React.useReducer(reducer, []);

  const dataId = useRef(0);

  const onCreate = (word, explain, example) => {
    dispatch({type : "CREATE", data: {
      id: dataId.current,
      word,
      explain,
      example
    }})
    dataId.current += 1;
  }

  const onRemove = (targetId) => {
    dispatch({type:"DELETE", targetId});
  }

  const onEdit = (targetId, word, explain, example) => {
    dispatch({
      type:"EDIT",
      data:{
        id: targetId,
        word,
        explain,
        example
      }
    });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <WordsHeader headText={"App"}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
