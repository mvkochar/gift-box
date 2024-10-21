import React from 'react'
import ProductsItem from './ProductsItem/ProductsItem'
import ProductsList from './ProductsList'

const Recently = () => {
    return (
        <div className="catalogue-recently">
            <h3 className="catalogue-recently-title">Recently Viewed</h3>
            <div className="catalogue-recently-box d-f">
                <ProductsItem
                    id={ProductsList[2].id}
                    image={ProductsList[2].image}
                    title={ProductsList[2].title}
                    price={ProductsList[2].price}
                    oldPrice={ProductsList[2].oldPrice}
                    isSale={ProductsList[2].isSale}
                />
                <ProductsItem
                    id={ProductsList[5].id}
                    image={ProductsList[5].image}
                    title={ProductsList[5].title}
                    price={ProductsList[5].price}
                    oldPrice={ProductsList[5].oldPrice}
                    isSale={ProductsList[5].isSale}
                />
            </div>
        </div>
    )  
}

export default Recently