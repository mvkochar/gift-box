import React from 'react'
import './css/Bag.css'
import { ProductsList } from '../components'

type ProductCount = {
    productId: number
    quantity: number
}
let ProductsCountList: ProductCount[] = []

const Bag = () => {
   
    let i: number
    let key: number
    let count: string
    let t:ProductCount

    
    for (i = 0; i < localStorage.length; i++) {
        key = parseInt((localStorage.key(i) || "0"));
        count = localStorage.getItem(key.toString()) || "1"
        t = {productId: key, quantity: parseInt(count)}
        ProductsCountList.push(t)
    }
 
  console.log(ProductsCountList)

    return (
        <>
            <section className="bag-caption">
                <h1 className="page-title">Frequently asked questions</h1>
            </section>
            <main>
                <div className="bag-box">
                    <div className="bag-item">
                        {
                          ProductsCountList.length
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Bag