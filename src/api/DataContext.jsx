import { createContext, useContext, useReducer } from 'react'

export const DataContext = createContext()
export const useDataContextValue = () => useContext(DataContext)

const DataProvider = ({ initialState, reducer, children }) => {
    return (
        <DataContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataContext.Provider>)
}

export default DataProvider
