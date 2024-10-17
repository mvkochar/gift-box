import React from 'react'
import classes from './ProductsItem.module.css'

type ProductsItemProps = {
    id: number
    image: string
    title: string
    price: string
    oldPrice: string
    isSale: boolean
}

const ProductsItem = ({id, image, title, price, oldPrice, isSale}:ProductsItemProps) => {
  return (
    <div className={classes.products_item}>
        <div><img src={image} alt="product" /></div>
        <h3 className={classes.products_item_title}>{title}</h3>
        <div className={classes.products_item_info}>
            <div className={classes.products_item_price}>£{price}</div>
            <div className={isSale ? classes.products_item_oldp: "d-n"}>£{oldPrice}</div>
        </div>
    </div>
  )
}

export default ProductsItem