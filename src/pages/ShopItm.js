import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShopItm = ({ shopItm }) => {
    const { id } = useParams();
    const matchId = shopItm.find(it => id == it.id);

    return (
        <>
            {/* <div>{console.log(matchId, shopItm, id)}</div> */}
            <div>
                {
                    matchId ? <div>
                        <img src={matchId.img} />
                        {matchId.name}
                    </div>
                        : <div>로딩중 ...</div>
                }
            </div>
        </>
    )
}

export default ShopItm;