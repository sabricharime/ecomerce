import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseAmount, increaseAmount, removeItem } from '../redux/cartSlice'

type Data = {
  id: number
  title?: string
  price?: number
  description: string
  category?: string
  image?: string
  rating?: { rate?: number; count?: number }
  amount?: number
  key?: number
}

const CartProduct = ({ id, title, image, description, amount, price }: React.ComponentProps<'div'> & Data) => {
  const dispatch = useDispatch()

  const increaseHandler = React.useCallback(() => {
    dispatch(increaseAmount(id))
  }, [id])
  const decreaseHandler = React.useCallback(() => {
    dispatch(decreaseAmount(id))
  }, [id])
  const remove = React.useCallback(() => {
    dispatch(removeItem(id))
  }, [id])

  return (
    <div className='CartProduct'>
      <div className='w-full rounded-md px-6 bg-stone-700 flex gap-3 items-center justify-between'>
        <div className='min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px]'>
          <img src={image} alt='ProductImage' className='h-full w-full  max-h-[100px] max-w-[100px] rounded-md' />
        </div>

        <div className='flex flex-col justify-center max-w-[300px]'>
          <h1 className='font-medium text-lg py-2'>{title}</h1>
          <p className='max-w-[300px]'>{description.length >= 100 ? description.substring(0, 100) + '...' : description}</p>
        </div>

        <div className='quantity min-w-[100px] flex justify-between items-center'>
          <button onClick={()=> decreaseHandler()}  className='font-bold text-lg'>-</button>
          {amount}
          <button onClick={()=> increaseHandler()} className='font-bold text-lg'>+</button>
        </div>

        <div className='price min-w-[100px]'>
          <p>${price}</p>
        </div>

        <div className="remove">
         <button onClick={()=> remove()} className='text-red-700 capitalize font-bold'>remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct
