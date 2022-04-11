import { useEffect, useState,ReactNode } from "react";
import api from '../services/api'
import {GlobalStateContext} from "./GlobalStateContext"
import { Users } from '../types/users'

type GlobalcontextProps = { 
    children: ReactNode;
}

const GlobalState = ({children}:GlobalcontextProps) => {
    const [patients, setPatients] = useState<Users[]>([])
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        
        api.get('/?results=5000')
            .then(response => {
                setPatients(response.data.results);
                setLoading(true)
            })
            .catch((error) => {
                console.log(error.response.message)
            })
    }, []);
    
    
    return (
        <GlobalStateContext.Provider value={{patients, setPatients, loading, setLoading}}>
            {children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState