import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

  return (
    <div className="App">
      {/* navbar */}
      <Header></Header>

      {/* chilldrens */}
      <Outlet></Outlet>

      {/* footer part */}
      
    </div>
  )
}

export default App
