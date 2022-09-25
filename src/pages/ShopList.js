import React from 'react'
import { Link } from 'react-router-dom'

const ShopList = ({ shopItm }) => {
    return (
        <div>
            {
                shopItm ?

                    <div>{shopItm.map(itm => <li><Link to={'/list/' + itm.id}>{itm.name}</Link></li>)}</div>
                    :
                    <div>Loading...</div>

            }
        </div>
    )
}

export default ShopList;