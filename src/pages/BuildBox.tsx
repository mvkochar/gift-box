import React from 'react'
import './css/BuildBox.css'
import { Filter, ProductsItem, ProductsList } from '../components'

const BuildBox = () => {
    return (
        <>
            <div className="catalogue-categories">
                <ul className="catalogue-categories-list d-f jc-sb">
                    <li>Birthday gift</li>
                    <li>Christmas</li>
                    <li>New Year</li>
                    <li>Wedding</li>
                    <li>Valentine’s day</li>
                    <li>Baby Shower</li>
                    <li>Father’s Day</li>
                    <li>Mother’s Day</li>
                    <li>Easter</li>
                </ul>
            </div>
            <div className="catalogue-breadcrumbs">Home/ Catalogue / Build your box</div>
            <section className="catatologue-caption"><h1 className="page-title">Build a Box</h1></section>
            <section className="build-info d-f jc-sb">
                <div className='build-info-item'>
                    <h3 className="build-step-title">Step 1</h3>
                    <p className="info-item-desc">
                        Select your favorite gifts from our variety of options and add to your shopping cart.
                    </p>
                </div>
                <div className='build-info-item'>
                    <h3 className="build-step-title">Step 2</h3>
                    <p className="info-item-desc">
                        Select your gift box from our assortment of packaging option
                    </p>
                </div>
                <div className='build-info-item'>
                    <h3 className="build-step-title">Step 3</h3>
                    <p className="info-item-desc">
                        Write your notecard with a special message to the recipient - don't forget to sign your name!
                    </p>
                </div>
            </section>
            <section className='build-step-one'>
                <h3 className="build-step-title">Step 1 of 3</h3>
                <h4 className="build-step-subtitle">Select from the items below and fill up your box!</h4>
                <div className="build-step-wr d-f">
                    <Filter/>
                    <div className="catalogue-box d-f">
                    {
                        ProductsList.filter((elem) => elem.id > 13 && elem.id < 23).map((product) => {
                            return (
                                <ProductsItem
                                    key={product.id}
                                    id={product.id}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    oldPrice={product.oldPrice}
                                    isSale={product.isSale}
                                />
                            )
                        })
                    }
                </div>
                </div>
            </section>
        </>
    )
}

export default BuildBox