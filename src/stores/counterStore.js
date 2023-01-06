import { defineStore } from "pinia"

export default defineStore('counter', {
    state() {
        return {
            num: 0
        }
    },
    actions: {
        increase() {
            this.num++
        },
        decrease() {
            this.num--
        }
    }
})

