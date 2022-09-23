import React from 'react'

const ShopList = ({ shopItm }) => {
    return (
        <div>
            {
                shopItm.map(itm => <li>{itm.name}</li>)
            }
        </div>
    )
}

export default ShopList