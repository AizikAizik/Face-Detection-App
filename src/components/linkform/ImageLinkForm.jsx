import React from 'react'
import './form.css'


function ImageLinkForm() {
        return (
               <div className = "">
                       <p className = "f3">
                               { "This magic Brain will detect faces in a picture. Give it a try" }
                       </p>
                       <div className ="center">
                                <div className ="form center pa4 br3 shadow-5">
                                        <input type="url" className = "f4 pa2 w-70 center" />
                                        <button className ="w-30 grow link f4 ph3 pv2 dib white bg-light-purple">Detect</button>
                                </div>
                       </div>
               </div>
        )
}

export default ImageLinkForm
