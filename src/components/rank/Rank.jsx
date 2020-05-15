import React from 'react'

const Rank = ({ name,entries }) => {
        return (
                <div>
                        <div className ="white f3">
                                { `${name}, you  have detected faces` }
                        </div>
                        <div className ="white f1"> { entries } time(s)</div>
                </div>
        )
}

export default Rank
