import React from 'react'
import { Footer, Header, Main } from './components'

const App = () => {
  const [total, setTotal] = React.useState(localStorage.getItem("total") || "0")

  const handleTotal = (productPrice: string) => {
    setTotal((prevState) => {
      return (
        (parseFloat(prevState) + parseFloat(productPrice)).toString()
      )
    })
  }

  React.useEffect(() => {
    localStorage.setItem("total", total)
  }, [total])

  return (

    <>
      <Header />
      <Main total={total} handleTotal={handleTotal} />
      <Footer />
    </>
  )
}

export default App