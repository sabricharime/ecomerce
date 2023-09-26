import React, { useEffect, useState } from 'react'
import { getData } from '../redux/dataSlice'
import { useSelector, useDispatch } from 'react-redux/es/exports'

export type Data = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

function useFetchData(url: string): { value: Data[]; loading: boolean; error: Error } {
  const [value, setValue] = useState<Data[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error>()
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async (url) => {
      try {
        const res = await fetch(url)

        if (!res.ok) throw new Error('Network Not Ok ')

        const data: Data[] = await res.json()
        setValue(data)
        dispatch(getData(data))
        setLoading(false)
      } catch (error) {
        // @ts-ignore
        setError(error)
        setLoading(false)
      }
    })(url)
  }, [url])

  // @ts-ignore
  return { value, loading, error }
}

export default useFetchData
