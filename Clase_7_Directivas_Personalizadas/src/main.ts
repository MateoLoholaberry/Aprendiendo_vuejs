import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size-70', {
    beforeMount: (el, binding) => {
        el.style.fontSize = '70px'
    }
})

app.directive('custom-size', {
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.value
    }
})

app.directive('custom-size-2', {
    beforeMount: (el, binding) => {
        let size = 16
        switch (binding.arg) {
            case 'sm':
                size = 10
                break
            case 'md':
                size = 20
                break
            case 'lg':
                size = 28
                break
            case 'xl':
                size = 40
                break
            case 'xxl':
                size = 70
                break
        }

        el.style.fontSize = size + 'px'
    }
})

app.directive('custom-size-3', {
    beforeMount: (el, binding) => {
        let size = 16

        if (binding.modifiers.sm) {
            size = 20
        } else if (binding.modifiers.lg) {
            size = 32
        } else if (binding.modifiers.xl) {
            size = 50
        }

        el.style.fontSize = size + 'px'

        if (binding.modifiers.red) {
            el.style.color = '#f00'
        } else if (binding.modifiers.green) {
            el.style.color = '#0f0'
        } else if (binding.modifiers.blue) {
            el.style.color = '#00f'
        }
    }
})

app.mount('#app')
