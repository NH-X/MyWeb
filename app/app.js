const app = Vue.createApp({
    data() {
        return {
            title: 'Zachary travel',
            time: Date(),
            author:  'Zachary',
            like: 0
        }
    },
    methods: {
        clearCountVal(){
            this.like = 0
        }
    }
})

app.mount('#app')