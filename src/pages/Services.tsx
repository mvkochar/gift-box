import React from 'react'
import './css/Services.css'
import { Filter, ProductsItem, ProductsList } from '../components'

const Services = () => {
    return (
        <>
            <div className="services-breadcrumbs">Home/ Services</div>
            <section className="services-caption">
                <h1 className="page-title">Bespoke gift boxes with style</h1>
                <p className="services-desc">
                    Our pre-designed collections have been hand curated for a number of special occasions.
                    Whether you're gifting for an engagement, wedding, shower, housewarming, birthday
                    or just because, our artisanal products and luxe packaging will be sure to wow your recipients.
                </p>
            </section>
            <main>
                <div className="services-wr d-f">
                    <Filter />
                    <div className="services-box d-f">
                        {
                            ProductsList.filter((elem) => elem.id > 34 && elem.id < 41).map((product) => {
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
                <div className="services-added d-f">
                    {
                        ProductsList.filter((elem) => elem.id > 40 && elem.id < 45).map((product) => {
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
            </main>
            <section>
                <div className="services-specials d-f">
                    <div className="services-specials-item">
                        <div className="specials-item-info d-f jc-sb align-center">
                            <h3 className="specials-item-title">Valentine’s Day Gifts for your loved ones</h3>
                            <a href="" className="specials-item-shop">Shop now</a>
                        </div>
                    </div>
                    <div className="services-specials-item">
                        <div className="specials-item-info d-f jc-sb align-center">
                            <h3 className="specials-item-title">Easter Gift Boxes for everyone</h3>
                            <a href="" className="specials-item-shop">Shop now</a>
                        </div>
                    </div>
                    <div className="services-specials-item">
                        <div className="specials-item-info d-f jc-sb align-center">
                            <h3 className="specials-item-title">Baby Shower gift boxes for moms-to-be</h3>
                            <a href="" className="specials-item-shop">Shop now</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services