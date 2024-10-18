import React from 'react'
import './css/Catalogue.css'
import { Filter, ProductsItem, ProductsList } from '../components';
import { Link } from 'react-router-dom';

function valuetext(value: number) {
    return `${value}°C`;
}

const Catalogue = () => {
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
            <div className="catalogue-breadcrumbs">Home/ Catalogue</div>
            <div className="catatologue-caption">
                <h1 className="page-title">All gift boxes</h1>
                <p className="catatologue-caption-desc">
                    Our pre-designed collections have been hand curated for a number of special occasions.
                    Whether you're gifting for an engagement, wedding, shower, housewarming, birthday or
                    just because, our artisanal products and luxe packaging will be sure to wow your recipients.
                </p>
            </div>
            <main className='catalogue-main d-f'>
                <Filter/>
                <div className="catalogue-box d-f">
                    {
                        ProductsList.filter((elem) => elem.id < 6).map((product) => {
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
            <div className="catalogue-added">
                <div className="catalogue-box d-f">
                    {
                        ProductsList.filter((elem) => elem.id > 5 && elem.id < 14).map((product) => {
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
                <div className="catalogue-added-actions d-f">
                    <button className='catalogue-added-more'>More</button>
                    <Link to = "/build-box" className='catalogue-added-build'>Build Yor Box</Link>
                </div>
            </div>
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
        </>
    )
}

export default Catalogue