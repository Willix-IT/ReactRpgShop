import React from 'react'
const CardContext = React.createContext();
const localState = JSON.parse(localStorage.getItem('cardState'));

const initialState = {
    selectedCard: [
        {
            id: 4,
            name:"Excalibur",
            image:"/sword1.png",
            quantity: 2,
            tva: 0.12,
            price: 10
        },
        {
            id: 3,
            name:"Charlemagne’s Joyeuse",
            image:"/sword1.png",
            quantity: 5,
            tva: 0.12,
            price: 14
        }

    ]
}

function sampleReducer(state, action) {
    switch (action.type) {
        case 'updateCard': {
            return {
                ...state,
                selectedCard: action.payload,
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