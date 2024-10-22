import React from 'react'
import './css/Faq.css'
import { FaqItem, FaqList } from '../components'

const Faq = () => {
    return (
        <>
            <div className="faq-breadcrumbs">Home / F.A.Q.</div>
            <section className="faq-caption">
                <h1 className="page-title">Frequently asked questions</h1>
            </section>
            <main>
                <div className="faq-box d-f">
                    {
                        FaqList.map((faq)=> {
                            return (
                                <FaqItem
                                    key={faq.id}
                                    question={faq.question}
                                    answer={faq.answer}
                                    hasBorder={faq.hasBorder}
                                />
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default Faq