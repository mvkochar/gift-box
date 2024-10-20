import React from 'react'
import classes from './ProductsItem.module.css'

type ProductsItemProps = {
  id: number
  image: string
  title: string
  price: string
  oldPrice: string
  isSale: boolean
  isActtons?: boolean
}

const ProductsItem = ({ id, image, title, price, oldPrice, isSale, isActtons = true }: ProductsItemProps) => {
  return (
    <div className={classes.products_item}>
      <div className={classes.products_item_img}><img src={image} alt="product" width={320} /></div>
      <div className={isActtons ? classes.products_item_actions : "d-n"}>
        <button className={classes.products_item_bag}>Add</button>
        <a href="" className={classes.products_item_view}>View</a>
      </div>
      <h3 className={classes.products_item_title}>{title}</h3>
      <div className={classes.products_item_info}>
        <div className={classes.products_item_price}>£ {price}</div>
        <div className={isSale ? classes.products_item_oldp : "d-n"}>£ {oldPrice}</div>
      </div>
    </div>
  )
}

export default ProductsItem