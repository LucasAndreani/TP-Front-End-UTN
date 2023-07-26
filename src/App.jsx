import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header, Footer } from './Components'
import { Cart, Contact, Detail, HomePage } from './screens'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
