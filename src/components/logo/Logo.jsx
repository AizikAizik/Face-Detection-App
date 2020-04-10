import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'
import Image from './brain1.png'

function Logo() {
        return (
               <div className = "ma2 mt0">
                        <Tilt className = "Tilt br2 shadow-2" options ={ { max : 45 } } style = {{ height : 150, width: 150 }}>
                                <div className="Tilt-inner"> 
                                        <img src={ Image } alt ="Logo pic" style = {{ paddingTop : "12px" }} />
                                 </div>
                        </Tilt>
               </div>
        )
}

export default Logo
