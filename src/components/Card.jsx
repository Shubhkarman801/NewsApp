import React, { useContext } from 'react'
import ThemeContext from '../context/themeContext'



const Card = (props) => {
    const { mode, setMode} = useContext(ThemeContext)
    return (
        <div className={`max-w-sm rounded-xl overflow-hidden shadow-lg ${ mode==='light' ? 'bg-white' : 'bg-black border-1 border-gray-200'} m-2 `}>
            <img
                className="w-full h-48 object-cover"
                src={props.imgUrl}
                alt="Card Image"
            />
            <div className="p-4">
                <h2 className={`text-xl font-semibold ${mode==='light'?'text-gray-800' : 'text-gray-300'} mb-2`}>{props.title}</h2>
                <p className={`${mode==='light'?'text-gray-600' : 'text-gray-400'} text-sm mb-4`}>
                    {props.desc}
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition">
                    <a href={props.artUrl} target="_blank">Read More</a>
                </button>
            </div>
        </div>
    )
}

export default Card