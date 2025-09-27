import { createContext, type PropsWithChildren } from "react"
import { useGetUtilities } from "../hooks/useGetUtilities";
import type { IFormattedUtility } from "../interfaces/utilities.interface";


export interface IUtilitiesContext {
  isPending: boolean;
  utilities:{
    aire: IFormattedUtility[] ;
    tripleA: IFormattedUtility[] ;
  };
  hasData: boolean;
  handleGetUtilities: () => void;
  }


// eslint-disable-next-line react-refresh/only-export-components
export const UtilitiesContext = createContext({} as IUtilitiesContext);

const UtilitiesContextProvider = ({children}:PropsWithChildren) => {

  const {utilities,isPending,handleGetUtilities,hasData} = useGetUtilities()

  return (
    <UtilitiesContext value={{isPending,hasData,utilities,handleGetUtilities}}>
        {children}
    </UtilitiesContext>
  )
}

export default UtilitiesContextProvider