import React, { useRef } from "react";
import { createStore } from "redux";

import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';

const store = createStore();

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
    default:
      return state;
  }
  return newState;
};

export const WordsStateContext = React.createContext();
export const WordsDispatchContext = React.createContext();

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
    dispatch({type:"REMOVE", targetId});
  }

  return (
    <WordsStateContext.Provider value={data}>
      <WordsDispatchContext.Provider
        value={{
          onCreate,
          onRemove,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
            </Routes>
          </div>
        </BrowserRouter>
      </WordsDispatchContext.Provider>
    </WordsStateContext.Provider>
  );
}

export default App;
