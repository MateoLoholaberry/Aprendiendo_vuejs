import { createStore } from 'vuex';

export default createStore({
    state: {
        // Data
        counter: 0
    },
    getters: {
        // Computed
        doubleCounter(state) {
            return state.counter * 2;
        }
    },
    mutations: {
        // Methods sync (setter)
        setCounter(state, value) {
            state.counter = value;
        },
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        }
    },
    actions: {
        // Methods async (setter)
    },
    modules: {
        // Subdivision of the store
    }
});
