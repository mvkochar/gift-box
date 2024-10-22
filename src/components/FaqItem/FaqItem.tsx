import React from 'react'
import classes from './FaqItem.module.css'

type FaqItemProps = {
    question: string
    answer: string
    hasBorder?: boolean
}

const FaqItem = ({ question, answer, hasBorder = true }: FaqItemProps) => {
    const [hasAnswer, setHasAnswer] = React.useState(true)
    const handleHasAnswer = () => {
        setHasAnswer((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={hasBorder ? classes.faq_item : `${classes.faq_item} ${classes.no_border}`}>
            <div className="d-f jc-sb">
                <h3 className={classes.faq_item_question}>{question}</h3>
                <button className='btn-clear d-b' onClick={handleHasAnswer}>
                    <img src={hasAnswer ? "/images/polygon-up.png" : "/images/polygon-down.png"} alt="polygon" />
                </button>
            </div>
            <p className={hasAnswer ? classes.faq_item_answer: "d-n"}>{answer}</p>
        </div>
    )
}

export default FaqItem