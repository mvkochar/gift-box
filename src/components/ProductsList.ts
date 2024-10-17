type TProduct = {
    id: number
    image: string
    title: string
    price: string
    oldPrice: string
    isSale: boolean
}

const ProductsList:TProduct[] = [
    {
        id: 0,
        image: "/images/catalogue/1.png",
        title: "Gift Box",
        price: "80",
        oldPrice: "",
        isSale: false
    },
    
    {
        id: 1,
        image: "/images/catalogue/2.png",
        title: "Gift Box",
        price: "80",
        oldPrice: "96",
        isSale: true
    },

]

export default ProductsList