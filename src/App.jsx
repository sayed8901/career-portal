import { Outlet, useLoaderData } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <div className="App">
      {/* navbar */}
      <Header></Header>

      {/* chilldrens */}
      <Outlet></Outlet>

      {/* footer part */}
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
