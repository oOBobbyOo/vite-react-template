import { create } from 'zustand'

interface CountState {
  count: number
  increase: () => void
  increaseBy: (by: number) => void
  decrease: () => void
  reset: () => void
}

const useCountStore = create<CountState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  increaseBy: (by) => set((state) => ({ count: state.count + by })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}))

export default useCountStore
