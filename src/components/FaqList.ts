type TFaq = {
    id: number
    question: string
    answer: string
    hasBorder: boolean
}

const FaqList:TFaq[] = [
    {
        id: 0,
        question: "What are delivery options?",
        answer: "Due to the detailed nature and our high order volume, our current order processing time is 3-5 business days, not including transit time.  All orders will ship via Royal Mail Special delivery for FREE ( UK delivery only! )and transit time depends on proximity to our location in London, UK. Please contact us via e-mail Service@SimpleBrownBox.co.uk for large quantity orders of 10+ gift boxes shipping to the same location.",
        hasBorder: true
    },
    
    {
        id: 1,
        question: "Do you create custom boxes?",
        answer: "Yes. You can choose the items for your personal box is HERE.",
        hasBorder: true
    },

    {
        id: 2,
        question: "How far in advance do I need to place my order?",
        answer: "3-5 working days",
        hasBorder: true
    },
 
    {
        id: 3,
        question: "What is your return policy?",
        answer: "7 days return policy",
        hasBorder: true
    },

    {
        id: 4,
        question: "How do I add an item to a pre-curated box?",
        answer: "By adding to the basket.-Custom made basket.",
        hasBorder: false
    }
]

export default FaqList