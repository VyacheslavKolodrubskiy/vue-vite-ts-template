import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: state => state.count,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      if (this.count <= 0)
        this.count = 0
      else this.count--
    },
  },
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
