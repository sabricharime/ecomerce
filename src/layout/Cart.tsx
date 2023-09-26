import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import CartProduct from '../components/CartProduct'
import { Link } from 'react-router-dom'
import { clearItems } from '../redux/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart)
  const clearCart = React.useCallback(() => {
    dispatch(clearItems())
  }, [])

  return (
    <div className='container mx-auto  h-full min-h-[calc(100vh-140px)] flex p-6 '>
      <div className='leftSide flex-[3] flex flex-col gap-3'>
        {cartItems.cart.length > 0 ? (
          cartItems.cart.map((item, idx) => (
            //@ts-ignore
            <CartProduct key={idx} {...item} />
          ))
        ) : (
          <h1 className='font-bold text-2xl text-center'>
            {' '}
            Empty Cart{' '}
            <Link className='text-blue-500 border-2 border-blue-500 py-2 px-4 rounded-md' to={'/store'}>
              Go to store
            </Link>{' '}
          </h1>
        )}
      </div>
      <div className='rightSide flex flex-col flex-[1] border border-stone-800 mx-4 p-6 rounded-lg bg-stone-900 '>
        <h1 className='font-bold text-xl my-4'>Quantity: {cartItems.amount} </h1>
        <h1 className='font-bold text-xl my-4'> Total price : ${Math.round(cartItems.totalPrice)} </h1>

        <button className='checkout border text-center my-11 py-2 rounded-xl font-bold w-1/2 mx-auto'>CHECK OUT</button>
        <button onClick={() => clearCart()} className='checkout border text-center my-11 py-2 rounded-xl font-bold w-1/2 mx-auto'>
          clearCart
        </button>
      </div>
    </div>
  )
}

export default Cart
