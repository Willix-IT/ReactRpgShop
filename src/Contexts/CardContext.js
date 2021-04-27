import React from 'react'
const CardContext = React.createContext();
const localState = JSON.parse(localStorage.getItem('cardState'));

const initialState = {
    selectedCard: [

    ],
    carcCategory: 'all'
}

function sampleReducer(state, action) {
    switch (action.type) {
        case 'updateCard': {

            const temp = state.selectedCard
            const check = temp.filter(i => i.id === action.payload.id)

            if (check.length !== 0) {
                check[0].quantity += 1
            }
            else {
                temp.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    image: action.payload.img,
                    quantity: 1,
                    tva: action.payload.tva,
                    price: action.payload.price
                })
            }

            return {
                ...state,
                selectedCard: temp
            }
        }
        case 'updateCategory': {
            return {
                ...state,
                cardCategory: action.payload,
            }
        }
        case 'setRefreshTable': {
            return {
                ...state,
                refreshTable: false
            }
        }

        default: {
            return state;
        }
    }
}

function CardProvider({ children }) {
    const [cardState, cardDispatch] = React.useReducer(sampleReducer, localState || initialState)

    React.useEffect(() => {
        localStorage.setItem('cardState', JSON.stringify(cardState))
    }, [cardState])

    return (
        <CardContext.Provider value={{ cardState, cardDispatch }}>
            {children}
        </CardContext.Provider>
    )
}

export { CardProvider, CardContext }