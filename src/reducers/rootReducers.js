const initState = {
    posts: [
        {id: '1', title: "Invest", body: "Exchange and transact bitcoin, ethereum, and bitcoin cash using the world’s most trusted and secure cryptocurrency wallet."},
        {id: '2', title: "Explore", body: "Use the first and most popular bitcoin block explorer to search and verify transactions on Bitcoin’s blockchain."},
        {id: '3', title: "Analyze", body: "Stay on top of bitcoin and other top cryptocurrency prices, news, and market information."}
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}
export default rootReducer
