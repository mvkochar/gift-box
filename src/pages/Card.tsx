import React from 'react'
import './css/Card.css'
import { useParams } from 'react-router-dom'
import { ProductsList, Recently } from '../components'

const nums: number[] = []

for (let i = 0; i < 20; i++) {
    nums[i] = i + 1
}

const Card = () => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)
    const currentProduct = ProductsList[index]

    return (
        <>
            <div className="card-breadcrumbs">Home/ Catalogue/ {currentProduct.title}</div>
            <main className='card-main'>
                <h1 className="card-main-title">{currentProduct.title}</h1>
                <div className="card-main-box d-f align-center">
                    <div>
                        <div><img src={currentProduct.image} alt="product" width={586} /></div>
                        <div className="card-main-watch d-f">
                            <div className="watch-title">watch the video</div>
                            <a href='https://www.youtube.com/watch?v=hKVhJ4xdZSE' target='__blank' className='d-b'>
                                <img src="/images/polygon1.png" alt="polygon1" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="card-main-prices d-f">
                            <div className="card-main-price">£ {currentProduct.price}</div>
                            <div className={currentProduct.isSale ? "card-main-oldp" : "d-n"}>£ {currentProduct.oldPrice}</div>
                        </div>
                        <div className="card-main-quantity">
                            <div className="quantity-title">Quantity</div>
                            <div className="quantity-select-bl">
                                <select name="quantity">
                                    {
                                        nums.map((num) => {
                                            return (
                                                <option value={num.toString()} key={num}>{num}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="card-main-actions d-f align-center">
                            <button className='card-main-add'>Add to bag</button>
                            <button className='card-main-like'><img src="/images/heart.png" alt="heart" /></button>
                        </div>
                    </div>
                </div>
            </main>
            <Recently />
        </>
    )
}

export default Card