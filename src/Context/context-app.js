import {createContext, useContext} from 'react'

export const ContextApp = createContext({})

const data = {
  nama: "hidha",
  ayang: "mifta",
}

export function ContextAppProvider({children}){
  return <ContextApp.Provider value={data}>{children}</ContextApp.Provider>
}

export function useContextApp(){
  return useContext(ContextApp)
}
