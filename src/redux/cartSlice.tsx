import { PayloadAction, createSlice, current } from '@reduxjs/toolkit'
import type { Data } from '../hooks/useFetchData'

type item = Data & { amount: number }

interface CartType {
  cart: item[]
  amount: number
  totalPrice: number
}

const initialState: CartType = {
  cart: [],
  amount: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, { payload }: PayloadAction<Data>) => {
      const isExiste = state.cart.find((item) => item.id === payload.id)

      if (!isExiste) {
        state.cart.push({ ...payload, amount: 1 })
      } else {
        isExiste.amount += 1
      }

      state.amount += 1
      state.totalPrice += payload.price

      console.log(current(state.cart))
    },
    increaseAmount: (state, { payload }: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === payload)

      if (item) {
        item.amount += 1
        state.amount += 1
        state.totalPrice += item.price
      }
    },
    decreaseAmount: (state, { payload }: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === payload)
      if (item && item.amount > 1) {
        item.amount -= 1
        state.amount -= 1
        state.totalPrice -= item.amount * item.price
      }
    },

    removeItem: (state, { payload }: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === payload)

      if (item) {
        state.amount -= item.amount
        state.totalPrice -= item.amount * item.price
      }
      state.cart = state.cart.filter((item) => item.id !== payload)
    },
    clearItems: (state) => {
      state.cart = []
      state.amount = 0
      state.totalPrice = 0
    },
  },
})

export const { addTocart, increaseAmount, decreaseAmount, removeItem , clearItems } = cartSlice.actions
const cartReducer = cartSlice.reducer

export default cartReducer
