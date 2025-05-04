import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"

// Components
import Login from "./components/Login"

// CSS
import "./assets/css/Login.css"

function App() {

  return (
    <>
      <Toaster expand={true} richColors position='top-right' />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

const Page404 = () => {
  return (
    <>
      <h1>404 - Page not found</h1>
    </>
  )
}
