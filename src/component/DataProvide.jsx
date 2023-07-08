import React, { createContext, useState } from 'react'


export const DataContext = createContext(null)
const DataProvider = ({children}) => {
    const [user,setUser] = useState({
        name:""
    })
  return (
    <DataContext.Provider value={{setUser,user}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider