const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    'BUY_STOCKS'(state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element => element.id == stockId);
        if(record) {
            record.quantity += quantity;
        }else{
            state.stockd.push({
                id: stockId,
                quantity: quantity,
                //price: stockPrice
            })
        }
        state.funds -= stockPrice;
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice;
    }
}

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order)
    }
}

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds
    }
}

export {
    state,
    mutations,
    actions,
    getters
}