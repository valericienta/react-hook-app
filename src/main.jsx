import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import SimpleForm from './02-useEffect/SimpleForm.jsx';
import FormWithCustomHook from './02-useEffect/FormWithCustomHook.jsx';
import MultipleCustomHook from './03-examples/MultipleCustomHook.jsx';
import CounterApp from './01-useState/CounterApp.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

    <MultipleCustomHook />
  // </React.StrictMode>
)
