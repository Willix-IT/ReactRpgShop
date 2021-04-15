import React from 'react'

const SampleContext = React.createContext();
const localState = JSON.parse(localStorage.getItem('sampleState'));

const initialState = {
    selectedSample: {
        id: null,
        name: null,
        tva: null,
        price: null
    },
    refreshTable: true,
}

function sampleReducer(state, action) {
    switch (action.type) {
        case 'selected': {
            return {
                ...state,
                selectedSample: {...action.payload, price: Number(action.payload.price.replace(' €', '').replace(',','.')), tva: Number(action.payload.tva.replace(' %', '').replace(',','.'))}
            }
        }
        case 'updateSample': {
            return initialState
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

function SampleProvider({ children }) {
    const [sampleState, sampleDispatch] = React.useReducer(sampleReducer, localState || initialState)

    React.useEffect(() => {
        localStorage.setItem('sampleState', JSON.stringify(sampleState))
    }, [sampleState])

    return (
        <SampleContext.Provider value={{ sampleState, sampleDispatch }}>
            {children}
        </SampleContext.Provider>
    )
}

export { SampleProvider, SampleContext }