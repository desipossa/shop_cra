import React from 'react'

const Main = ({ num }) => {
    return (
        <div>
            {console.log(num ? num[0] : '아직')}
        </div>
    )
}

export default Main