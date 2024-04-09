import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import SimpleForm from './02-useEffect/SimpleForm.jsx';
import FormWithCustomHook from './02-useEffect/FormWithCustomHook.jsx';
import MultipleCustomHook from './03-examples/MultipleCustomHook.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <SimpleForm></SimpleForm>
  // <FormWithCustomHook/>
  <MultipleCustomHook/>
  // </React.StrictMode>,
)
