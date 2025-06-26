import React, { useContext } from 'react'
import ThemeContext from '../context/themeContext'

const About = () => {
    const {mode, setMode} = useContext(ThemeContext)
  return (
    <div className={`text-2xl ${mode === 'light' ? 'text-black' : 'text-gray-300'} font-poppins flex flex-col items-center justify-center min-h-screen`}>
        <p>Made With ❤️ By Savvy.</p> 
        Contact:- <a href='mailto:ssingh20_be23@thapar.edu' className='text-blue-500 hover:underline'>ssingh20_be23@thapar.edu</a>
    </div>
  )
}

export default About