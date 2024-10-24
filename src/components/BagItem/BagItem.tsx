import React from 'react'
import classes from './BagItem.module.css'
import ProductsList from '../ProductsList'

type BagItemProps = {
    productId: number
    productQuantity: number
    handleTotal: (productPrice: string) => void  
}

const BagItem = ({ productId, productQuantity, handleTotal }: BagItemProps) => {
    const currentProduct = ProductsList[productId]
    const [isRemove, setIsRemove] = React.useState(false) 
 
    function removeFromBag () {
        handleTotal("-" +(parseFloat(currentProduct.price) * productQuantity) )
        localStorage.removeItem(productId.toString())
        setIsRemove(true)
    }

    return (
        <div className={isRemove ? "d-n" : classes.bag_item}>
            <div><img src={currentProduct.image } alt="product" width={200} /></div>
            <h3 className={classes.bag_item_title}>{currentProduct.title}</h3>
            <div className={classes.bag_item_price}>£ {currentProduct.price} * {productQuantity}</div>
            <button className={classes.bag_item_remove} onClick={removeFromBag}>remove from bag</button>
        </div>
    )
}

export default BagItem