import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShopItm = ({ shopItm }) => {
    const { id } = useParams();
    const matchId = shopItm.find(it => id == it.id);

    return (
        <>
            <div>{console.log(matchId, shopItm, id)}</div>
            <div>
                {
                    !matchId ? <div>로딩중 ...</div>
                        : <div>{matchId.name}</div>
                }
            </div>
        </>
    )
}

export default ShopItm;