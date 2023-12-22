import { useEffect } from 'react'

function Cart() {
  useEffect(() => {
    document.title = 'Giỏ Hàng'
  }, [])

  return (
    <div>
      <h1>Cart Page</h1>
    </div>
  )
}

export default Cart
