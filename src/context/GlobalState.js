import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';


//Initial State

const initialState = {
 
    transactions: [
    { id: 1, text: 'Abdullah', amount: -20 },
    { id: 2, text: 'Maryam', amount: 300 },
    { id: 3, text: 'Noman', amount: -10 },
    { id: 4, text: 'Ruha', amount: 150 }
 ]

}

//Create context
export const GlobalContext = createContext (initialState);

//Provider component
export const GlobalProvider = ({ children })=>{
    const [state,dispatch] = useReducer(AppReducer, initialState);


//Actions
function deleteTransaction (id) {
dispatch ( {

type : 'Delete_Transaction',
payload : id
}


);
}
function addTransaction (transaction) {
    dispatch ( {
    
    type : 'Add_Transaction',
    payload : transaction
    }
    
    
    );
    }
    

return (<GlobalContext.Provider value = {{

    transactions : state.transactions,
    deleteTransaction,
    addTransaction
}}>

{children}

</GlobalContext.Provider>);

}
