import  { useCallback } from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addTocart } from '../../redux/cartSlice'

const Product = ({
  image,
  title,
  rating,
  description,
  price,
  id,
  category,
}: {
  image: string
  title: string

  rating: { rate: number; count: number }
  description: string
  price: number
  id: number
  category: string
}) => {
  const dispatch = useDispatch()
  const addItemToCart = useCallback(() => {
    dispatch(addTocart({ id, title, price, description, category, image, rating }))
  }, [])

  return (
    <div className=' flex flex-col transition-all duration-200 min-w-[300px] min-h-[290px] bg-neutral-800 rounded-sm overflow-hidden'>
      <header className='flex-1 max-h-[250px] min-h-[250px] overflow-hidden'>
        <img src={image} alt='' className='h-full w-full' />
      </header>
      <main className='h-[120px] flex flex-col justify-between flex-1 px-3'>
        <h1>{title}</h1>
        <div className='typography flex flex-col justify-between   '>
          <div className='description'>
            <p>{description.length > 50 ? description.substring(0, 50) + ' ...' : description}</p>
          </div>
          <div className='rat flex self-end '>
            <p>
              {rating.rate > 1 &&
                ['*'].map((item, idx) => (
                  <span className={item}>
                    <AiTwotoneStar key={idx} />
                  </span>
                ))}
            </p>
            <p>
              {rating.rate > 2 &&
                ['*'].map((item, idx) => (
                  <span className={item}>
                    <AiTwotoneStar key={idx} />
                  </span>
                ))}
            </p>
            <p>
              {rating.rate > 3 &&
                ['*'].map((item, idx) => (
                  <span className={item}>
                    <AiTwotoneStar key={idx} />
                  </span>
                ))}
            </p>
            <p>
              {rating.rate > 4 &&
                ['*'].map((item, idx) => (
                  <span className={item}>
                    <AiTwotoneStar key={idx} />
                  </span>
                ))}
            </p>
          </div>
        </div>

        <div className='price flex min-h-[40px] items-center justify-between my-5'>
          <p>${price}</p>
          <button onClick={() => addItemToCart()} className='bg-stone-950 py-1 px-3 rounded-xl font-medium '>
            {' '}
            ADD TO CART{' '}
          </button>
        </div>
      </main>
    </div>
  )
}

export default Product
