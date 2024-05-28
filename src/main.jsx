import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MemoHook from './06-memos/MemoHook.jsx';
import CallBackHook from './06-memos/CallBackHook.jsx';
import { Padre } from './07-tarea-memo/Padre.jsx';

import TodoApp from './08-useReducer/TodoApp.jsx';
import MainApp from './09-useContext/MainApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

//<Padre/>
  // <FocusScreen/>
  // <SimpleForm/>
  // <TodoApp/>
  <MainApp/>
  // </React.StrictMode>
)
