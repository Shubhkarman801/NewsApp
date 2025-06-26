
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import ThemeContext from './context/themeContext'
import { useState } from 'react'
import About from './components/About'
import NewsComponent from './components/NewsComponent'

function App() {
  const [search, setSearch] = useState(false);
  const [query,setQuery] = useState();
  const [mode, setMode] = useState('light');
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <>
      <div>
        <Navbar setQuery={setQuery} setSearch={setSearch} search={search}/>
        <NewsComponent query={query} search={search}/>
      </div>
      </>
    },
    {
      path: '/about',
      element:
      <>
      <div>
        <Navbar/>
        <About/>
      </div>
      </>
    }
  ])
  console.log(search);
  return (
    <>
      <ThemeContext.Provider value = {{mode, setMode}}>
      <RouterProvider router={router}>
      
      </RouterProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App

