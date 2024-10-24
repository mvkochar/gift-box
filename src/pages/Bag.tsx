import React from 'react'
import './css/Bag.css'
import { BagItem, ProductsList } from '../components'
import { Link } from 'react-router-dom'

type BagProps = {
    total: string
    handleTotal: (productPrice: string) => void
}

const Bag = ({ total, handleTotal }: BagProps) => {

    return (
        <>
            <section className="bag-caption">
                <h1 className="page-title">Frequently asked questions</h1>
            </section>
            <main>
                {
                    total === '0' ?
                        <>
                            <h3 className='bag-note'>No Item</h3>
                            <Link to='/catalogue' className='bag-shop-link'>Shop now</Link>
                        </>
                        :
                        <>
                            <div className="bag-box d-f">
                                {
                                    ProductsList.filter((elem) => localStorage.getItem(elem.id.toString()) != null).map((product) => {
                                        return (
                                            <BagItem
                                                key={product.id}
                                                productId={product.id}
                                                productQuantity={parseInt(localStorage.getItem(product.id.toString() || "0") || '0')}
                                                handleTotal={handleTotal}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className="bag-total">Total: <span>£ {total}</span> </div>
                        </>
                }

            </main>
        </>
    )
}

export default Bag