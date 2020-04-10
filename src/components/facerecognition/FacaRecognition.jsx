import React from 'react'

function FacaRecognition({ imageURL }) {
        return (
                <div className ="center ma ">
                        <div className ="absolute mt2 ma">
                                <img src= { imageURL } alt="" width ="500px" height="auto"/>
                        </div>
                        
                </div>
        )
}

export default FacaRecognition
