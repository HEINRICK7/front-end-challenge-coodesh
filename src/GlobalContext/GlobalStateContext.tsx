import {createContext} from "react"

import { Users } from '../types/users'

type GlobalContextType = { 
    patients: Users[],
    setPatients: (newState: Users[]) => void,
    loading: boolean,
    setLoading: (newState: boolean) => void
}

const initialValue = {
    patients: [],
    setPatients: () => {},
    loading: false,
    setLoading: () => {}

}

export const GlobalStateContext = createContext<GlobalContextType>(initialValue)

