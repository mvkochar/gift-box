import React from 'react'
import './css/Testimonials.css'

const Testimonials = () => {
    return (
        <>
            <div className="testimonials-breadcrumbs">Home/ Testimonials</div>
            <section className="testimonials-caption">
                <h1 className="page-title">Latest reviews</h1>
            </section>
            <section>
                <div className="testimonials-reviews-box d-f jc-sb">
                    <div className="testimonials-reviews-item">
                        <div className="reviews-item-details">Miss Katrin Allain, <span>Bracknell</span></div>
                        <p className="reviews-item-desc">
                            I am very excited for my first order. I have been meaning to send you a note
                            to let you know what a smooth process ordering was.
                        </p>
                        <p className="reviews-item-desc last-desc">
                            Your site is very easy to navigate and user friendly. Check out was a breeze and
                            I really like how the discount/savings were identified next to the item.
                            Thanks so much!
                        </p>
                    </div>
                    <div className="testimonials-reviews-item">
                        <div className="reviews-item-details">Mrs Novik Xelen, London</div>
                        <p className="reviews-item-desc">
                            I was overjoyed when the sale came on. And was looking forward
                            to getting a few items and so I did. I absolutely love everything.
                            I ordered and was very pleased with the service I received.
                            Everything was neatly packed and wrapped.
                        </p>
                        <p className="reviews-item-desc last-desc">
                            It shows the great customer service being provided by the shop.
                            I love shopping here all the way from Ottawa and will continue
                            to buy hidden gems in the future. Keep up the great work...
                            and the sneak peeks keeps us coming back for more or so I do!
                            Thanks a million...
                        </p>
                    </div>
                    <div className="testimonials-reviews-item">
                        <div className="reviews-item-details">Mrs Loretta Teraudi, <span>Ilford</span></div>
                        <p className="reviews-item-desc">
                            Thank you so much. Really appreciated your level of customer service.
                            Will definitely shop with you again.
                        </p>
                    </div>
                    <div className="testimonials-reviews-item">
                        <div className="reviews-item-details">Miss Fiona Parker, Bradford</div>
                        <p className="reviews-item-desc">
                            Thank you again! I really appreciate the excellent service 
                            and look forward to purchasing more from you
                        </p>
                    </div>
                </div>
                <button className='testimonials-more-btn'>Read more</button>
            </section>
            <section className='testimonials-comment'>
               <h3 className="testimonials-comment-title">Leave a comment</h3>
               <form action="" className='testimonials-comment-fm'>
                    <div className="input-bl d-f">
                        <input type="text" name='userName' placeholder='Name' />
                        <input type="email" name="userEmail" placeholder='Email'/>
                    </div>
                    <textarea name="comment" placeholder='Comment'></textarea>
                    <div className="check-bl d-f">
                        <input type="checkbox" name="agree" id="agree" />
                        <label htmlFor="agree">I agree to the policy rules</label>
                    </div>
                    <button type="button">Submit</button>
                </form> 
            </section>
        </>
    )
}

export default Testimonials