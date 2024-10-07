import { defineStore } from 'pinia'

export const useExample = defineStore('useExample', {
    state: () => ({
        count: 0
    }),
    actions: {
        init() {
            const count = localStorage.getItem('count')
            if (count) {
                this.count = parseInt(count)
            }
        },
        increment(val = 1) {
            this.count += val
            localStorage.setItem('count', `${this.count}`)
        }
    }
    // persist: true
})
