
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const Navbar = () => {
  const cartAmount = useSelector((state: RootState) => state.cart.amount)

  return (
    <div className='nav'>
      <div className='container mx-auto flex justify-between'>
        <div className='logo'>
          <Link to={'/'}>
            <h1 className='font-medium text-xl '>EasyShop</h1>
          </Link>
        </div>

        <div className='basket relative'>
          <span className='bg-red-700 rounded-full w-5 h-5 absolute grid place-items-center top-0 -right-2'>{cartAmount}</span>
          <button className='bg-neutral-800 p-2 rounded-full'>
            <Link to={'/cart'}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
