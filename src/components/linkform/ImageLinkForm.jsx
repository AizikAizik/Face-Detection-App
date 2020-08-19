import React from 'react'
import './form.css'


function ImageLinkForm({ onInputChange, onButtonDetect }) {
        return (
               <div className = "">
                       <p className = "f3">
                               { "Copy link to a face image from Google and paste into the textfield and click detect" }
                       </p>
                       <div className ="center">
                                <div className ="form center pa4 br3 shadow-5">
                                        <input type="url" className = "f4 pa2 w-70 center" onChange = { onInputChange } required={true} />
                                        <button className ="w-30 grow link f4 ph3 pv2 dib white bg-light-purple" onClick = { onButtonDetect }>Detect</button>
                                </div>
                       </div>
               </div>
        )
}

export default ImageLinkForm
