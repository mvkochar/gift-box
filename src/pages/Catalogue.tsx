import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './css/Catalogue.css'
import { ProductsItem, ProductsList } from '../components';

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
            <main className='catalogue-main d-f jc-sb'>
                <div className="catalogue-filter">
                    <h3 className="catalogue-filter-title">Filter by:</h3>
                    <div className="catalogue-filter-box d-f">
                        <div>
                            <h4 className="filter-bl-title">Price</h4>
                            <div className="catatalogue-filter-price">
                                <Box sx={{ width: 250 }}>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={20}
                                        min={20}
                                        max={150}
                                        getAriaValueText={valuetext}
                                        color="secondary"
                                        valueLabelDisplay="on"
                                    />
                                </Box>
                                <div className="price-info d-f jc-sb">
                                    <div>£20</div>
                                    <div>£150</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="filter-bl-title">Colour</h4>
                            <form action="" className='catalog-filter-colours d-f jc-sb'>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="white" id="white" />
                                    <label htmlFor="white">White</label>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="black" id="black" />
                                    <label htmlFor="black">Black</label>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="blue" id="blue" />
                                    <label htmlFor="blue">Blue</label>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="green" id="green" />
                                    <label htmlFor="green">Green</label>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="beige" id="beige" />
                                    <label htmlFor="beige">Beige</label>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="brown" id="brown" />
                                    <label htmlFor="brown">Brown</label>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="red" id="red" />
                                    <label htmlFor="red">Red</label>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="gold" id="gold" />
                                    <label htmlFor="gold">Gold</label>
                                </div>
                            </form>
                        </div>
                        <div>
                            <h4 className="filter-bl-title">Occasion</h4>
                            <form action="" className='catalog-filter-occasion d-f'>
                                 <div className="check-bl d-f">
                                    <input type="checkbox" name="birthday" id="birthday" />
                                    <label htmlFor="birthday">Birthday</label>
                                 </div>
                                 <div className="check-bl d-f">
                                    <input type="checkbox" name="christmas" id="christmas" />
                                    <label htmlFor="christmas">Christmas</label>
                                 </div>
                                 <div className="check-bl d-f">
                                    <input type="checkbox" name="newYear" id="newYear" />
                                    <label htmlFor="newYear">New Year</label>
                                 </div>
                                 <div className="check-bl d-f">
                                    <input type="checkbox" name="babyShower" id="babyShower" />
                                    <label htmlFor="babyShower">Baby Shower</label>
                                 </div>
                                 <div className="check-bl d-f">
                                    <input type="checkbox" name="wedding" id="wedding" />
                                    <label htmlFor="wedding">Wedding</label>
                                 </div>
                                 <div className="check-bl d-f">
                                    <input type="checkbox" name="motherDay" id="motherDay" />
                                    <label htmlFor="motherDay">Mother’s Day</label>
                                 </div>
                                 <div className="check-bl d-f">
                                    <input type="checkbox" name="fatherDay" id="fatherDay" />
                                    <label htmlFor="fatherDay">Father’s day</label>
                                 </div>
                                 <div className="check-bl d-f">
                                    <input type="checkbox" name="valentineDay" id="valentineDay" />
                                    <label htmlFor="valentineDay">Valentine’s Day</label>
                                 </div>
                                 <button type="button">more</button>
                            </form>
                        </div>
                        <div>
                            <h4 className="filter-bl-title">For whom</h4>
                            <form action="" className="catalogue-filter-whom d-f jc-sb">
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="woman" id="woman" />
                                    <label htmlFor="woman">Woman</label>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="man" id="man" />
                                    <label htmlFor="man">Man</label>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="girl" id="girl" />
                                    <label htmlFor="girl">Girl</label>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="boy" id="boy" />
                                    <label htmlFor="boy">Boy</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button className='catalogue-filter-submit'>Submit</button>
                </div>
                <div className="catalogue-box d-f">
                    {
                      ProductsList.filter((elem)=>elem.id < 6).map((product)=> {
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
        </>
    )
}

export default Catalogue