import React, { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext();
export const useDataLayerValue = () => useContext(DataLayerContext);

export const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};
export default DataLayer;
