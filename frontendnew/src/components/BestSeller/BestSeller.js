import React from "react"
import Thumbnails from "../Thumbnails/Thumbnails"

const BestSeller = ({bestseller,name}) => {
    return(
        <Thumbnails tag='Best Sellers' name={name} foods={bestseller}/>
    )
}
export default BestSeller
