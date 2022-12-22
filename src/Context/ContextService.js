import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from 'react'

// REDUCER --------------------------------------------------
/*function reducer(state, action){
  switch(action.type){
    case 'GET_DATA':
      return {state: action.payload}
    default:
      return {state:"tidak ada case"}
  }
}

const [state, dispatch] = useReducer(reducer, null)
*/
// CONTEXT --------------------------------------------------
const ContextService = createContext({});

export function ContextServiceProvider({child}){
/*  const [data, setData] = useState(null)
  async function getData(){
    const response = await fetch("http://127.0.0.1:8000/todolist/api/")
    const datas = await response.json()
    setData(datas.results)
  }
  useEffect(() => {
    getData()
  }, [])
 if(!data) return null */
 const data = {
   user: "hidhz"
 }
 return (
    <ContextService.Provider value={data}>
      {child}
    </ContextService.Provider>
  )
}

export function useContextService(){
  return useContext(ContextService)
}
