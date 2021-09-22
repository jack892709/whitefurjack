import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            cart: [],
        };
    },
    mutations: {
        setCart(state, items) {
            state.cart = items;
        },
        addTobuy(state, item) {
            // state.cart.unshift(item);
            const index = state.cart.findIndex((product) => product.id === item.id);
            if (index !== -1) {
                state.cart[index].quantity += item.quantity;
            } else {
                state.cart.unshift(item);
            }
        },
        removeTobuy(state, id) {
            for (let i = 0; i < state.cart.length; i += 1) {
                if (state.cart[i].id === id) {
                    state.cart.splice(i, 1);
                }
            }
        },
        addTobuyQuantity(state, id) {
            const index = state.cart.findIndex((product) => product.id === id);
            state.cart[index].quantity += 1;
        },
        reduceTobuyQuantity(state, id) {
            const index = state.cart.findIndex((product) => product.id === id);
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity -= 1;
            }
        },
    },
    getters: {
        getTodos(state) {
            return state.todos;
        },
        todoCount(state) {
            return state.todos.length;
        },
        getTobuys(state) {
            return state.cart;
        },
        tobuyCount(state) {
            // return state.cart.length;
            let count = 0;
            for (let i = 0; i < state.cart.length; i += 1) {
                count += state.cart[i].quantity;
            }
            return count;
        },
        tobuySubtotal(state) {
            let sum = 0;
            for (let i = 0; i < state.cart.length; i += 1) {
                sum += state.cart[i].price * state.cart[i].quantity;
            }
            return sum;
        },
    },
});
