
import Product from '../components/product/Product'
import Filter from '../components/filter/Filter'
import useFetchData from '../hooks/useFetchData'

import { useSelector,  } from 'react-redux'
import { RootState } from '../redux/store'

const Store = () => {
  const { } = useFetchData('https://fakestoreapi.com/products/')


  const data = useSelector((item: RootState) => item.data)
 
  


  return (
    <div className='w-full '>
      <div className='container  mx-auto  grid grid-cols-4 gap-1 '>
        <Filter />
        <div className='products col-span-3 grid gap-1 grid-cols-3'>

          {data.newData.map((item,idx)=> <Product key={idx} {...item}/> )}

        </div>
      </div>
    </div>
  )
}

export default Store
