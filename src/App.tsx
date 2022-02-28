import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Configurations from './components/Configurations'
import Reports from './components/Reports'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className = 'main-container'>
        <div>
        <Sidebar />
        </div>
        <div style={{display : 'flex' , flexDirection : 'column'}}>
          <Navbar />
          <div style={{height : '1080px' , width : '1000px' , padding : '5px'}}>
            <Routes>
                <Route path = '/' element = {<Configurations />}/>
                <Route path = '/reports-datasource' element = {<Reports />}/>
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App