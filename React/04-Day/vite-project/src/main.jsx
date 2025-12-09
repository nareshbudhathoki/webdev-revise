import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import {Greet, Hello} from './App.jsx';
createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <Greet/>
    <Hello/>
  </>

)
