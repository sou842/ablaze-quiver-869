import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import HomePage from './Pages/HomePage.jsx';
import Navbar from './Pages/Navbar.jsx'


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <AllRoutes/>
      {/* <HomePage/> */}
    </div>
  )
}

export default App;
