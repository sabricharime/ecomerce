import React, { ChangeEvent, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { filterByInput, filterByCategory, filterByrange, filterTodefault } from '../../redux/dataSlice'

const Filter = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.data)
  const [priceFilter, setPriceFilter] = useState<number>()

  const filterBysearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value.toString()
      dispatch(filterByInput({ value }))
    },
    [filterByInput]
  )

  const categoryFilter = useCallback(
    ( item: string) => {
      dispatch(filterByCategory(item))
    },
    [filterByCategory]
  )

  const rangeFilter = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.currentTarget.value)

      dispatch(filterByrange(value))
      setPriceFilter(value)
    },
    [filterByrange, priceFilter]
  )

  const defaultValues = useCallback(()=>{

    dispatch(filterTodefault())
  },[])
  return (
    <div className='filters h-[450px]   bg-stone-800 rounded-md py-6 px-3 w-full max-h-[500px]'>
      <div className='flex  w-full justify-between px-3 font-medium'>
        <h1>Filters</h1>
        <button onClick={()=> defaultValues()}>Clear</button>
      </div>

      <div className='flex w-full'>
        <div className='search py-6 px-3 w-full '>
          <input onChange={(e) => filterBysearch(e)} type='text' placeholder='search' className='w-full py-1 px-2 rounded-sm text-zinc-800 focus:outline focus:outline-zinc-400 bg-stone-700' />
        </div>
      </div>

      <div className='flex flex-col gap-3 px-3'>
        <h1 className='font-medium'>By Category</h1>

        <div className='grid grid-cols-1  gap-1 '>
          {data.category.map((item, key) => (
            <div key={key} className='span' onClick={() => categoryFilter( item)}>
              {' '}
              {item}{' '}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-3 px-3 my-3 font-medium'>
        <div className='byPrice w-full mt-5'>
          <h1>By Price : ${priceFilter}</h1>

          <div className='flex items-center h-[40px] gap-3 '>
            <span className='grid place-items-center h-[40px]'>1$</span>
            <input onChange={(e) => rangeFilter(e)} type='range' name='price' min={'1'} max={'1000'} className='w-full appearance-none bg-stone-700 cursor-pointer  rounded-md tracking-tighter ' />

            <span className='grid place-items-center h-[40px]'>1000$</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
