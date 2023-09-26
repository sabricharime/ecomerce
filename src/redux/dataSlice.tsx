import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Data } from '../hooks/useFetchData'

interface Type {
  data: Data[]
  newData: Data[]
  category: string[]
}

const initialState: Type = {
  data: [],
  newData: [],
  category: [],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: (state, { payload }: PayloadAction<Data[]>) => {
      state.data = payload
      state.newData = payload
      state.category = payload.map((item) => item.category).filter((value, index, self) => self.indexOf(value) === index)
    },
    filterByInput: (state, { payload }: PayloadAction<{ value: string }>) => {
      state.newData = state.data
      if (payload.value.length > 0) {
        state.newData = state.data.filter((item) => item.title.toLowerCase().includes(payload.value.toLowerCase()))
      } else {
        state.newData = state.data
      }
    },
    filterByCategory: (state, { payload }: PayloadAction<string>) => {
      state.newData = state.data.filter((item) => item.category === payload)
    },
    filterByrange: (state, { payload }: PayloadAction<number>) => {
      state.newData = state.data
      if (payload) {
        state.newData = state.data.filter((Product) => Product.price < payload)
      }
    },

    filterTodefault: (state) => {
      state.newData = state.data
    },
  },
})

export const { getData, filterByInput, filterByCategory, filterByrange, filterTodefault } = dataSlice.actions
export default dataSlice.reducer
