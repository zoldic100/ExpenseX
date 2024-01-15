import './App.css'
import axios from 'axios'
import MyRouter from './Router/MyRouter';
axios.defaults.withCredentials = true;


function App() {
 return(
  <>
      <MyRouter/>
    </>
  )
}

export default App
