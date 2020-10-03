// @ts-nocheck
const app = new Vue({
        el: '#app',
        data: {
            counter: 0,
        },
        methods: {

            decrement() {
                this.counter--
            },
            increment() {
                this.counter++
            }
        }
    }

)