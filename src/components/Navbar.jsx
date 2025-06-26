import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/themeContext';


const Navbar = (props) => {
  const {mode, setMode} = useContext(ThemeContext)
  const [isOn, setIsOn] = useState(false);
  const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = 'black';
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
};
  
  return (
    
    <nav className={`w-full ${mode==='light'? 'bg-white':'bg-black border-b-1 border-gray-200'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className={`text-xl font-bold ${mode==='light'? 'text-gray-800':'text-gray-300'}`}>
          MyLogo
        </div>

        
        <div className=" space-x-6 flex flex-row items-center justify-center">
          <Link to="/" className={`${mode === 'light' ? 'text-gray-600' : 'text-gray-400'} ${mode === 'light' ? 'hover:text-black' : 'hover:text-gray-200'} transition duration-200`}>Home</Link>
          <Link to="/about" className={`${mode === 'light' ? 'text-gray-600' : 'text-gray-400'} ${mode === 'light' ? 'hover:text-black' : 'hover:text-gray-200'} transition duration-200`}>About</Link>
          {/* <a href="#" className={`${mode === 'light' ? 'text-gray-600' : 'text-gray-400'} ${mode === 'light' ? 'hover:text-black' : 'hover:text-gray-200'} transition duration-200`}>Services</a>
          <a href="#" className={`${mode === 'light' ? 'text-gray-600' : 'text-gray-400'} ${mode === 'light' ? 'hover:text-black' : 'hover:text-gray-200'} transition duration-200`}>Contact</a> */}
          <input type='text' placeholder='Search for Topics' className={` ${mode === 'light' ? 'border-1 border-gray-800' : 'border-1 border-gray-300'} ${mode==='light'?'text-gray-800 mx-1' : 'text-gray-300 mx-1'} rounded-md px-2 font-poppins w-48`} onChange={(e)=>{
            props.setQuery(e.target.value);
          }}></input>
          <button className={`border-1 border-gray-300 px-1 ${mode === 'light' ? 'bg-gray-200': 'bg-black' } rounded-md mx-0 ${mode === 'light' ? 'hover:bg-black' : 'hover:bg-gray-200'} transition duration-300`} onClick={()=>{props.setSearch(!props.search)}}>🔎</button>
        </div>

        <div className="ml-4">
          <button
            onClick={() => {setIsOn(!isOn); toggleMode()}}
            className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${
              isOn ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                isOn ? 'translate-x-5' : ''
              }`}
            ></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
